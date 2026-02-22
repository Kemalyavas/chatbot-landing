import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://botunvar.com"),
  title: "ChatBotAI · İşletmenize Özel AI Chatbot",
  description:
    "Web sitenize yapay zeka destekli chatbot ekleyin. 7/24 müşteri hizmeti, sektörünüze özel eğitim, kolay entegrasyon. Türkiye'nin AI chatbot çözümü.",
  keywords: [
    "ai chatbot",
    "yapay zeka",
    "müşteri hizmeti",
    "chatbot entegrasyonu",
    "türkçe chatbot",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ChatBotAI · İşletmenize Özel AI Chatbot",
    description:
      "Web sitenize yapay zeka destekli chatbot ekleyin. 7/24 müşteri hizmeti, sektörünüze özel eğitim.",
    type: "website",
    locale: "tr_TR",
    url: "https://botunvar.com",
    siteName: "ChatBotAI",
    images: [
      {
        url: "/logo-transparent.png",
        width: 512,
        height: 512,
        alt: "ChatBotAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ChatBotAI · İşletmenize Özel AI Chatbot",
    description:
      "Web sitenize yapay zeka destekli chatbot ekleyin. 7/24 müşteri hizmeti, sektörünüze özel eğitim.",
    images: ["/logo-transparent.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ChatBotAI",
      description: "İşletmelere özel AI chatbot çözümleri",
      url: "https://botunvar.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-554-969-0011",
        contactType: "sales",
        availableLanguage: "Turkish",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Chatbot hangi sitelere entegre edilebilir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WordPress, Shopify, Wix, Squarespace ve özel kodlanmış tüm web sitelerine entegre edilebilir. Mobil uyumlu çalışır.",
          },
        },
        {
          "@type": "Question",
          name: "Chatbot yanlış bilgi verir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chatbot sadece sizin sağladığınız bilgilerle eğitilir. Bilmediği konularda 'bu konuda bilgim yok, lütfen bizimle iletişime geçin' şeklinde yönlendirme yapar. Halüsinasyon riski minimuma indirilmiştir.",
          },
        },
        {
          "@type": "Question",
          name: "Kurulum ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Projenin kapsamına ve zorluğuna göre ortalama 3 ila 7 iş günü arasında sürer. İşletme bilgilerinizin toplanması, chatbotun eğitilmesi ve test süreci bu süreye dahildir.",
          },
        },
        {
          "@type": "Question",
          name: "Türkçe anlama kapasitesi nasıl?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GPT-4.1 altyapısını kullandığımız için Türkçeyi çok iyi anlar ve doğal bir dilde yanıt verir. Konuşma dili, resmi dil ve sektöre özel terminolojiye hakimdir.",
          },
        },
        {
          "@type": "Question",
          name: "Aylık mesaj limiti var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aylık destek paketinde sınırsız mesaj kapasitesi sunuyoruz. Kullanım hacminiz arttıkça ek bir ücret talep etmiyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Mevcut ekibimle nasıl çalışır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eğer mevcut bir müşteri temsilcisi ekibiniz varsa, chatbot onların iş yükünü hafifletir. Sık sorulan ve tekrarlayan soruları otomatik yanıtlar, karmaşık veya özel ilgi gerektiren konularda ise müşteriyi doğrudan temsilcinize yönlendirir.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fraunces.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
