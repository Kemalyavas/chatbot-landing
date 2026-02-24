"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background blobs */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-terracotta-soft/40 rounded-full blur-[120px] blob-animate" />
      <div className="absolute bottom-20 -right-32 w-[400px] h-[400px] bg-teal-soft/30 rounded-full blur-[100px] blob-animate" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[var(--font-display)] text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-ink"
            >
              Müşterileriniz
              <br />
              <span className="italic text-terracotta">hiç beklemeden</span>
              <br />
              yanıt alsın.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg sm:text-xl text-ink-muted leading-relaxed max-w-lg"
            >
              İşletmenize özel eğitilmiş yapay zeka chatbot.
              Sektörünüzü bilir, markanızla konuşur,{" "}
              <span className="text-ink font-medium">7/24 çalışır.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#demo"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream font-semibold rounded-full hover:bg-stone-800 transition-all duration-300 hover:shadow-2xl hover:shadow-ink/15 hover:gap-4 shadow-lg shadow-ink/10"
              >
                Canlı Demo Deneyin
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-ink font-semibold border-b-2 border-ink/20 hover:border-ink transition-colors duration-300"
              >
                Fiyatları İnceleyin
              </a>
            </motion.div>

          </div>

          {/* Right: Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-terracotta/8 to-teal/8 rounded-[2rem] blur-2xl" />

              <div className="relative bg-white rounded-3xl shadow-[0_24px_80px_-12px_rgba(28,25,23,0.12)] border border-stone-200/60 overflow-hidden">
                {/* Header */}
                <div className="bg-ink px-6 py-5 flex items-center gap-3">
                  <span className="w-12 h-12 flex items-center justify-center text-2xl bg-white/10 rounded-2xl">
                    🦷
                  </span>
                  <div className="flex-1">
                    <div className="text-cream font-semibold text-sm">
                      Beyaz Diş Kliniği
                    </div>
                    <div className="text-stone-400 text-xs flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-teal-light rounded-full" />
                      AI Asistan aktif
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex justify-start"
                  >
                    <div className="bg-stone-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-[260px]">
                      <p className="text-[13px] text-ink leading-relaxed">
                        Merhaba! Beyaz Diş Kliniği&apos;ne hoşgeldiniz. Size nasıl yardımcı olabilirim?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="flex justify-end"
                  >
                    <div className="bg-ink text-cream rounded-2xl rounded-tr-md px-4 py-3 max-w-[240px]">
                      <p className="text-[13px]">
                        Diş beyazlatma ne kadar?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="flex justify-start"
                  >
                    <div className="bg-stone-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-[280px]">
                      <p className="text-[13px] text-ink leading-relaxed">
                        Diş beyazlatma işlemimiz{" "}
                        <span className="font-semibold text-terracotta">3.000 - 5.000 TL</span>{" "}
                        arasındadır. İlk muayenemiz ücretsizdir!
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Input */}
                <div className="px-5 pb-5">
                  <div className="flex items-center gap-2 bg-stone-50 rounded-2xl px-4 py-3 border border-stone-200">
                    <span className="text-[13px] text-stone-400 flex-1">Mesajınızı yazın...</span>
                    <div className="w-8 h-8 bg-ink rounded-xl flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-ink-muted">Keşfet</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-ink/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-ink/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
