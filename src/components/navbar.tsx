"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Özellikler", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Fiyatlar", href: "#pricing" },
  { label: "SSS", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-stone-200/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/logo-transparent.png"
              alt="ChatBotAI Logo"
              width={48}
              height={48}
              className="rounded-xl transition-transform duration-300 group-hover:rotate-6"
            />
            <div className="font-[var(--font-display)] text-xl tracking-tight">
              <span className="font-semibold text-ink">chatbot</span>
              <span className="font-light text-terracotta italic">ai</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium tracking-wide uppercase text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#cta"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-ink text-cream text-[13px] font-semibold tracking-wide rounded-full hover:bg-stone-800 transition-all duration-300 hover:shadow-xl hover:shadow-ink/10"
          >
            İletişime Geçin
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-ink"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4 space-y-1" role="menu" aria-label="Ana menü">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-ink-muted hover:text-ink hover:bg-cream-dark rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-3 text-center px-5 py-3 bg-ink text-cream text-sm font-semibold rounded-full"
            >
              İletişime Geçin
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
