import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[56vh] max-w-[560px] flex-col items-center justify-center gap-7 px-8 py-24 text-center">
      <div className="eyebrow">Error 404</div>
      <h1 className="font-serif text-[clamp(40px,8vw,80px)] leading-none">
        Lost the thread.
      </h1>
      <p className="max-w-[360px] text-[15px] font-light leading-[1.7] text-ink/[.72]">
        This page has slipped off the rail. Let us take you back to the
        collection.
      </p>
      <Link
        href="/"
        className="inline-block border border-ink px-9 py-4 text-[11px] uppercase tracking-[.24em] transition-all duration-[350ms] hover:bg-ink hover:text-ivory hover:opacity-100"
      >
        Return home
      </Link>
    </section>
  );
}
