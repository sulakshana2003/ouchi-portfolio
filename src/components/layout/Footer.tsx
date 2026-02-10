import { profile } from "../../data/profile";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-140px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="py-10">
          {/* top line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* left */}
            <div className="space-y-2">
              <p className="text-white font-semibold tracking-tight">
                {profile.name}
              </p>
              <p className="text-sm text-white/55">
                © {new Date().getFullYear()} — All rights reserved.
              </p>
            </div>

            {/* middle: socials */}
            <div className="flex flex-wrap items-center gap-2">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-white/5 px-4 py-2
                    text-sm font-semibold text-white/80
                    transition hover:bg-white/10 hover:text-white
                  "
                >
                  <FiLinkedin />
                  LinkedIn <FiArrowUpRight className="opacity-60" />
                </a>
              )}

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-white/5 px-4 py-2
                    text-sm font-semibold text-white/80
                    transition hover:bg-white/10 hover:text-white
                  "
                >
                  <FiGithub />
                  GitHub <FiArrowUpRight className="opacity-60" />
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-white/5 px-4 py-2
                    text-sm font-semibold text-white/80
                    transition hover:bg-white/10 hover:text-white
                  "
                >
                  <FiMail />
                  Email
                </a>
              )}
            </div>

            {/* right */}
            
          </div>

          {/* bottom shine line */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="mt-4 text-xs text-white/40">
            Designed & developed by {profile.name}.
          </p>
        </div>
      </div>
    </footer>
  );
};
