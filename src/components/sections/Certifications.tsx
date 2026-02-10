import { certifications } from "../../data/certifications";

export const Certifications = () => {
  return (
    <section className="relative w-full bg-black py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className="
            group relative overflow-hidden
            rounded-3xl sm:rounded-[3rem]
            border border-white/10
            bg-gradient-to-b from-zinc-900/70 via-zinc-950/45 to-black
            shadow-[0_30px_90px_-60px_rgba(0,0,0,0.95)]
            transition-all duration-300
            hover:border-white/20
          "
        >
          {/* subtle glass shine (NO blue) */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/40" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* content */}
          <div className="relative z-10 p-7 sm:p-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
                Certifications
              </p>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Certifications
            </h2>

            <ul className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="
                    flex items-start gap-3
                    rounded-2xl border border-white/10
                    bg-white/[0.04] backdrop-blur
                    px-4 py-3
                    text-sm text-white/75
                    transition
                    hover:bg-white/[0.06] hover:border-white/15
                  "
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                  <span className="leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
