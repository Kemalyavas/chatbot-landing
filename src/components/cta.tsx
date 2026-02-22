"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-28 bg-cream grain scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-ink p-12 sm:p-16 lg:p-20"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal/8 rounded-full blur-[80px]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-medium leading-[1.1] text-cream">
                İşletmenizi{" "}
                <span className="italic text-terracotta-light">
                  bir adım
                </span>{" "}
                ileriye taşıyın.
              </h2>
              <p className="mt-6 text-lg text-stone-400 leading-relaxed">
                Ücretsiz demo ve danışmanlık için hemen bize ulaşın.
                İşletmenize özel çözümü birlikte tasarlayalım.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/905549690011?text=Merhaba%2C%20AI%20chatbot%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-8 py-5 bg-[#25D366] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#25D366]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-semibold">WhatsApp</div>
                    <div className="text-xs text-white/70 mt-0.5">
                      En hızlı dönüş
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="tel:+905549690011"
                className="group flex items-center justify-between px-8 py-5 bg-white/10 text-cream rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-stone-400" />
                  <div>
                    <div className="text-sm font-semibold">
                      0554 969 00 11
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="mailto:chatbotaidestek@gmail.com"
                className="group flex items-center justify-between px-8 py-5 bg-white/10 text-cream rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-stone-400" />
                  <div>
                    <div className="text-sm font-semibold">
                      chatbotaidestek@gmail.com
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      24 saat içinde dönüş
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
