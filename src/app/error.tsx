"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <h1 className="font-[var(--font-display)] text-4xl font-medium text-ink mb-4">
          Bir hata oluştu
        </h1>
        <p className="text-ink-muted mb-8">
          Beklenmeyen bir sorunla karşılaştık. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-ink text-cream font-semibold rounded-full hover:bg-stone-800 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
