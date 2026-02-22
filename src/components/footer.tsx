import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/logo-transparent.png"
              alt="ChatBotAI Logo"
              width={44}
              height={44}
              className="rounded-xl"
            />
            <div className="text-lg tracking-tight">
              <span className="font-semibold text-cream">chatbot</span>
              <span className="font-light text-terracotta italic">ai</span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[13px] tracking-wide">
            {[
              { label: "Özellikler", href: "#features" },
              { label: "Demo", href: "#demo" },
              { label: "Fiyatlar", href: "#pricing" },
              { label: "SSS", href: "#faq" },
              { label: "İletişim", href: "#cta" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-500 hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5 text-center">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} ChatBotAI. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
