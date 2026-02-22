import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <h1 className="font-[var(--font-display)] text-7xl font-medium text-ink mb-4">
          404
        </h1>
        <p className="text-xl text-ink-muted mb-8">
          Aradığınız sayfa bulunamadı.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-ink text-cream font-semibold rounded-full hover:bg-stone-800 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
