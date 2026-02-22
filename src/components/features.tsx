"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "7/24 Kesintisiz",
    description:
      "Müşterileriniz gece gündüz anında yanıt alır. Tatil, hafta sonu, chatbotunuz her zaman aktif.",
    accent: "bg-terracotta/10 text-terracotta",
  },
  {
    number: "02",
    title: "Sektörünüze Özel",
    description:
      "Diş kliniği, restoran, e-ticaret... İşletmenizin diliyle konuşur, hizmetlerinizi bilir.",
    accent: "bg-teal/10 text-teal",
  },
  {
    number: "03",
    title: "Her Platforma Uyumlu",
    description:
      "WordPress, Shopify, özel yazılım... Mevcut sisteminize sorunsuz entegre olur.",
    accent: "bg-terracotta/10 text-terracotta",
  },
  {
    number: "04",
    title: "Türkçe Doğal Dil",
    description:
      "Türkçeyi ana dil seviyesinde anlar. Konuşma dili, resmi dil, sektöre özel jargon. Hepsine hakim.",
    accent: "bg-teal/10 text-teal",
  },
  {
    number: "05",
    title: "Sürekli Öğrenir",
    description:
      "Müşteri etkileşimlerinden öğrenir, zamanla daha doğru ve etkili yanıtlar verir.",
    accent: "bg-terracotta/10 text-terracotta",
  },
  {
    number: "06",
    title: "Maliyetin %10'u",
    description:
      "Tam zamanlı müşteri temsilcisi yerine AI chatbot. Aylık 2.000 TL'den başlayan fiyatlarla.",
    accent: "bg-teal/10 text-teal",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-white grain scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
              Neden Biz
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl font-medium leading-[1.1] text-ink">
              Basit bir chatbot{" "}
              <span className="italic">değil,</span>
              <br />
              gerçek bir asistan.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <p className="text-lg text-ink-muted leading-relaxed">
              Hazır şablonlarla değil, işletmenizin gerçek bilgileriyle
              eğitilmiş yapay zeka.
            </p>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-xs font-bold tracking-wider ${feature.accent} shrink-0`}
                >
                  {feature.number}
                </span>
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink mb-2 group-hover:text-terracotta transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-ink-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
