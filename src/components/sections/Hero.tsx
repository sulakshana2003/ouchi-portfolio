import { profile } from "../../data/profile";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-full overflow-hidden">
      {/* Background vignette / soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Available pill */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Available for work
              </p>
            </div>

            {/* Big headline like screenshot */}
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Building Scalable{" "}
              <span className="text-white/60">Modern Websites</span>
              <br />
              <span className="text-white/60">for the Future</span>
            </h1>

            {/* Optional small subtitle (your title) */}
            {/* <p className="max-w-xl text-base text-white/70 sm:text-lg">
              {profile.title}
            </p> */}

            {/* Summary paragraph */}
            {/* <p className="max-w-xl text-base leading-relaxed text-white/70">
              {profile.summary}
            </p> */}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/assets/ouchithya-cv.pdf.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-sky-400/20 transition hover:bg-sky-300"
              >
                Download CV
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3v10m0 0 4-4m-4 4-4-4M4 17v3h16v-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — Image Card */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            {/* floating dot like screenshot */}
            <div className="pointer-events-none absolute right-10 top-28 h-6 w-6 rounded-full bg-white/35" />

            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-b from-indigo-950/60 via-slate-900/40 to-slate-950/60 shadow-2xl">
              {/* subtle inner glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />

              {/* image */}
              <img
                src={profile.image ?? "/profile.png"}
                alt="Profile"
                className="h-[520px] w-full object-cover object-top"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
