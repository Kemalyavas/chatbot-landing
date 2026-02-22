"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    step: "1",
    name: "Kurulum",
    price: "10 - 25K",
    period: "tek seferlik",
    description: "Chatbotunuzun sıfırdan oluşturulması ve işletmenize özel eğitimi.",
    features: [
      "İşletmenize özel AI eğitimi",
      "Web sitesine entegrasyon",
      "Türkçe doğal dil işleme",
      "Mobil uyumlu chat widget",
      "1 hafta test süresi",
    ],
    highlighted: false,
  },
  {
    step: "2",
    name: "Aylık Bakım",
    price: "2K",
    period: "aylık",
    description: "Sürekli iyileştirme, içerik güncelleme ve teknik destek.",
    features: [
      "Sınırsız mesaj kapasitesi",
      "AI model güncellemeleri",
      "Aylık performans raporu",
      "7/24 teknik destek",
      "İçerik güncelleme",
      "Öncelikli yeni özellikler",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-cream grain scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
            Fiyatlandırma
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl font-medium leading-[1.1] text-ink">
            Şeffaf, <span className="italic">basit</span> fiyatlar.
          </h2>
          <p className="mt-4 text-lg text-ink-muted max-w-xl mx-auto">
            Gizli maliyet yok. İşletmenizin ihtiyacına göre belirlenir.
          </p>
        </motion.div>

        {/* Cards - yan yana */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-ink text-cream shadow-[0_24px_80px_-12px_rgba(28,25,23,0.25)]"
                  : "bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg"
              }`}
            >
              {/* Step badge */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold ${
                    plan.highlighted
                      ? "bg-terracotta/20 text-terracotta-light"
                      : "bg-terracotta/10 text-terracotta"
                  }`}
                >
                  {plan.step}
                </span>
                <h3
                  className={`font-[var(--font-display)] text-xl font-semibold ${
                    plan.highlighted ? "text-cream" : "text-ink"
                  }`}
                >
                  {plan.name}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    plan.highlighted
                      ? "text-stone-400 bg-white/10"
                      : "text-ink-muted bg-stone-100"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-stone-400" : "text-ink-muted"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span
                  className={`font-[var(--font-display)] text-4xl font-semibold ${
                    plan.highlighted ? "text-cream" : "text-ink"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-stone-500" : "text-ink-muted"
                  }`}
                >
                  TL
                </span>
              </div>

              <div
                className={`h-px mb-8 ${
                  plan.highlighted ? "bg-white/10" : "bg-stone-200"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-terracotta/20" : "bg-teal/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.highlighted ? "text-terracotta-light" : "text-teal"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-stone-300" : "text-ink-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`group flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-cream text-ink hover:bg-white hover:shadow-lg"
                    : "bg-ink text-cream hover:bg-stone-800 hover:shadow-lg"
                }`}
              >
                Teklif Alın
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
