"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/categories";
import ChatWidget from "./chat-widget";

export default function DemoSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="demo" className="relative bg-ink grain overflow-hidden scroll-mt-16">

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-terracotta/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-40 -left-20 w-72 h-72 bg-teal/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: Text + Tabs */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta-light">
                Canlı Demo
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl font-medium leading-[1.1] text-cream">
                Sektörü seçin,{" "}
                <span className="italic text-terracotta-light">
                  hemen deneyin.
                </span>
              </h2>
              <p className="mt-6 text-stone-400 text-lg leading-relaxed">
                Her işletme farklı. Aşağıdan bir sektör seçin ve chatbotun
                o işletme için nasıl çalıştığını görün.
              </p>
            </motion.div>

            {/* Category buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-col gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-left transition-all duration-300 ${
                    activeCategory.id === cat.id
                      ? "bg-white/10 border border-white/10"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="w-8 h-8 flex items-center justify-center text-lg rounded-lg bg-white/5">
                    {cat.icon}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold transition-colors ${
                        activeCategory.id === cat.id
                          ? "text-cream"
                          : "text-stone-400"
                      }`}
                    >
                      {cat.name}
                    </div>
                    <div
                      className={`text-xs mt-0.5 transition-colors ${
                        activeCategory.id === cat.id
                          ? "text-stone-400"
                          : "text-stone-600"
                      }`}
                    >
                      {cat.businessName}
                    </div>
                  </div>
                  {activeCategory.id === cat.id && (
                    <div className="w-2 h-2 bg-terracotta rounded-full" />
                  )}
                </button>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xs text-stone-600 leading-relaxed"
            >
              * Bu demo gerçek yapay zeka ile çalışır. Yanıtlar GPT-4.1-mini
              tarafından üretilir.
            </motion.p>
          </div>

          {/* Right: Chat widget */}
          <div className="lg:col-span-6 lg:col-start-7 flex justify-center">
            <ChatWidget category={activeCategory} />
          </div>
        </div>
      </div>
    </section>
  );
}
