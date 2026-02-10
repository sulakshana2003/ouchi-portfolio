import { profile } from "../../data/profile";

export const About = () => {
  return (
    <section id="about" className="relative w-full min-h-full py-16 sm:py-24">
      {/* subtle background glow (optional but looks really good) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full" />
        <div className="absolute -bottom-28 right-[-40px] h-80 w-80 rounded-full " />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          {/* top “shine” line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          {/* soft highlight blob */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-2xl"
          />

          <header className="space-y-2">
            {/* <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Profile
            </p> */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Profile
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              About <span className="text-white/60">Me</span>
            </h2>
          </header>

          <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200/80">
            {profile.summary}
          </p>

          {/* Optional: tiny divider for polish */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};
