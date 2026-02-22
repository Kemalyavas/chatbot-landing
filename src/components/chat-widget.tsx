"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, RotateCcw } from "lucide-react";
import type { Category } from "@/lib/categories";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatWidgetProps {
  category: Category;
}

export default function ChatWidget({ category }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: category.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{ role: "assistant", content: category.greeting }]);
    setInput("");
    setIsLoading(false);
  }, [category]);

  const scrollToBottom = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30_000);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: category.id,
          messages: updatedMessages,
        }),
        signal: controller.signal,
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || "Bir hata oluştu, lütfen tekrar deneyin.",
          },
        ]);
      }
    } catch (error) {
      const isTimeout =
        error instanceof DOMException && error.name === "AbortError";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isTimeout
            ? "Yanıt süresi doldu. Lütfen tekrar deneyin."
            : "Bağlantı hatası. Lütfen tekrar deneyin.",
        },
      ]);
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleReset = () => {
    setMessages([{ role: "assistant", content: category.greeting }]);
    setInput("");
    setIsLoading(false);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white rounded-3xl shadow-[0_24px_80px_-12px_rgba(28,25,23,0.12)] border border-stone-200/60 overflow-hidden flex flex-col h-[540px]">
      {/* Header */}
      <div className="bg-ink px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 flex items-center justify-center text-2xl bg-white/10 rounded-2xl">
            {category.icon}
          </span>
          <div>
            <div className="text-cream font-semibold text-sm">
              {category.businessName}
            </div>
            <div className="text-stone-400 text-xs flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-teal-light rounded-full" />
              AI Asistan
            </div>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="p-2 text-stone-500 hover:text-cream hover:bg-white/10 rounded-xl transition-colors"
          aria-label="Sohbeti sıfırla"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 chat-messages bg-stone-50/50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-3 text-[13px] leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-ink text-cream rounded-2xl rounded-tr-md"
                  : "bg-white text-ink rounded-2xl rounded-tl-md border border-stone-100 shadow-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-md border border-stone-100 shadow-sm px-5 py-4">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-stone-300 rounded-full typing-dot" />
                <span className="w-2 h-2 bg-stone-300 rounded-full typing-dot" />
                <span className="w-2 h-2 bg-stone-300 rounded-full typing-dot" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick questions */}
      {messages.length <= 1 && !isLoading && (
        <div className="px-4 pb-2 flex flex-wrap gap-1.5 bg-stone-50/50">
          {category.quickQuestions.map((q) => (
            <button
              key={q.label}
              onClick={() => sendMessage(q.message)}
              className="px-3 py-1.5 text-xs font-medium text-ink-muted bg-white border border-stone-200 rounded-full hover:border-terracotta/40 hover:text-terracotta transition-colors"
            >
              {q.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-stone-100 shrink-0 bg-white">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajınızı yazın..."
            aria-label="Mesajınızı yazın"
            disabled={isLoading}
            className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-[13px] text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-terracotta/15 focus:border-terracotta/30 disabled:opacity-50 transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Mesaj gönder"
            className="w-11 h-11 bg-ink text-cream rounded-2xl flex items-center justify-center hover:bg-stone-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
