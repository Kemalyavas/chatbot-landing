"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Chatbot hangi sitelere entegre edilebilir?",
    answer:
      "WordPress, Shopify, Wix, Squarespace ve özel kodlanmış tüm web sitelerine entegre edilebilir. Mobil uyumlu çalışır.",
  },
  {
    question: "Chatbot yanlış bilgi verir mi?",
    answer:
      "Chatbot sadece sizin sağladığınız bilgilerle eğitilir. Bilmediği konularda 'bu konuda bilgim yok, lütfen bizimle iletişime geçin' şeklinde yönlendirme yapar. Halüsinasyon riski minimuma indirilmiştir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Projenin kapsamına ve zorluğuna göre ortalama 3 ila 7 iş günü arasında sürer. İşletme bilgilerinizin toplanması, chatbotun eğitilmesi ve test süreci bu süreye dahildir.",
  },
  {
    question: "Türkçe anlama kapasitesi nasıl?",
    answer:
      "GPT-4.1 altyapısını kullandığımız için Türkçeyi çok iyi anlar ve doğal bir dilde yanıt verir. Konuşma dili, resmi dil ve sektöre özel terminolojiye hakimdir.",
  },
  {
    question: "Aylık mesaj limiti var mı?",
    answer:
      "Aylık destek paketinde sınırsız mesaj kapasitesi sunuyoruz. Kullanım hacminiz arttıkça ek bir ücret talep etmiyoruz.",
  },
  {
    question: "Mevcut ekibimle nasıl çalışır?",
    answer:
      "Eğer mevcut bir müşteri temsilcisi ekibiniz varsa, chatbot onların iş yükünü hafifletir. Sık sorulan ve tekrarlayan soruları otomatik yanıtlar, karmaşık veya özel ilgi gerektiren konularda ise müşteriyi doğrudan temsilcinize yönlendirir. Böylece ekibiniz daha değerli konulara odaklanabilir.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-white grain scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
            SSS
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl font-medium leading-[1.1] text-ink">
            Sıkça sorulan <span className="italic">sorular.</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl text-left transition-all duration-300 ${
                    isOpen
                      ? "bg-ink text-cream"
                      : "bg-stone-50 hover:bg-stone-100 text-ink"
                  }`}
                >
                  <span className="font-[var(--font-display)] font-medium text-[15px] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-white/10" : "bg-stone-200"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div id={`faq-panel-${i}`} role="region" className="px-6 py-4 text-ink-muted text-[15px] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
