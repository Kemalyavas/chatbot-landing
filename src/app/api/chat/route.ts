import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { categories } from "@/lib/categories";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rate limiting: dakikada max 10 istek + günde max 50 mesaj per IP
const rateLimitMap = new Map<
  string,
  { count: number; resetTime: number; dailyCount: number; dailyReset: number }
>();
const RATE_LIMIT_PER_MIN = 10;
const RATE_WINDOW_MS = 60_000;
const DAILY_LIMIT = 100;
const DAY_MS = 86_400_000;

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 500;
const VALID_ROLES = new Set(["user", "assistant"]);

function checkRateLimit(ip: string): string | null {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    const dailyCount =
      entry && now < entry.dailyReset ? entry.dailyCount + 1 : 1;
    const dailyReset =
      entry && now < entry.dailyReset ? entry.dailyReset : now + DAY_MS;

    if (dailyCount > DAILY_LIMIT) {
      return "Günlük mesaj limitinize ulaştınız. Yarın tekrar deneyin.";
    }

    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_WINDOW_MS,
      dailyCount,
      dailyReset,
    });
    return null;
  }

  // Günlük limit kontrolü
  if (entry.dailyCount >= DAILY_LIMIT) {
    return "Günlük mesaj limitinize ulaştınız. Yarın tekrar deneyin.";
  }

  entry.count++;
  entry.dailyCount++;

  if (entry.count > RATE_LIMIT_PER_MIN) {
    return "Çok fazla istek gönderdiniz. Lütfen biraz bekleyin.";
  }

  return null;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const rateLimitError = checkRateLimit(ip);
  if (rateLimitError) {
    return NextResponse.json({ error: rateLimitError }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { category, messages } = body as {
      category: unknown;
      messages: unknown;
    };

    // Kategori doğrulama
    if (typeof category !== "string") {
      return NextResponse.json(
        { error: "Geçersiz kategori formatı." },
        { status: 400 },
      );
    }

    const cat = categories.find((c) => c.id === category);
    if (!cat) {
      return NextResponse.json(
        { error: "Geçersiz kategori." },
        { status: 400 },
      );
    }

    // Mesaj dizisi doğrulama
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Mesaj bulunamadı." },
        { status: 400 },
      );
    }

    if (messages.length > MAX_MESSAGES) {
      return NextResponse.json(
        { error: `En fazla ${MAX_MESSAGES} mesaj gönderilebilir.` },
        { status: 400 },
      );
    }

    // Tek tek mesaj doğrulama
    for (const msg of messages) {
      if (
        typeof msg !== "object" ||
        msg === null ||
        typeof (msg as Record<string, unknown>).content !== "string" ||
        typeof (msg as Record<string, unknown>).role !== "string"
      ) {
        return NextResponse.json(
          { error: "Geçersiz mesaj formatı." },
          { status: 400 },
        );
      }

      const { role, content } = msg as { role: string; content: string };

      if (!VALID_ROLES.has(role)) {
        return NextResponse.json(
          { error: "Geçersiz mesaj rolü." },
          { status: 400 },
        );
      }

      if (content.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          { error: `Mesaj en fazla ${MAX_MESSAGE_LENGTH} karakter olabilir.` },
          { status: 400 },
        );
      }
    }

    const validMessages = (
      messages as { role: string; content: string }[]
    ).map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      instructions: cat.systemPrompt,
      input: validMessages,
    });

    const assistantMessage =
      response.output_text || "Üzgünüm, şu an yanıt üretemiyorum.";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 },
    );
  }
}
