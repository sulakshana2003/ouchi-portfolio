/* eslint-disable @typescript-eslint/no-explicit-any */
// Education.jsx
import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import { education } from "../../data/education";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Education = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-24">
      {/* neutral background glow (NO blue) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-180px] top-[18%] h-[520px] w-[520px] rounded-full bg-zinc-700/10 blur-3xl" />
        <div className="absolute left-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-zinc-700/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* header */}

        {/* timeline container (same as your zinc/black gradient style) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
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
            <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* content */}
          <div className="relative z-10 p-6 sm:p-10">
            <div className="mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                <span className="text-sm text-white/80">Education</span>
              </div>

              <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Education
              </h2>
            </div>
            <motion.div className="space-y-10">
              {education.map((edu, idx) => (
                <motion.div
                  key={`${edu.degree}-${idx}`}
                  variants={item}
                  className="relative"
                >
                  {/* timeline line */}
                  <div className="absolute left-[14px] top-0 h-full w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent" />

                  <div className="flex gap-4">
                    {/* node */}
                    <div className="relative mt-1">
                      <div
                        className="
                          flex h-9 w-9 items-center justify-center
                          rounded-2xl border border-white/10
                          bg-white/[0.06] backdrop-blur
                          text-white/85
                          shadow-[0_12px_30px_-18px_rgba(0,0,0,0.9)]
                        "
                      >
                        <FiBookOpen />
                      </div>
                    </div>

                    {/* item card (glass row style) */}
                    <div
                      className="
                        min-w-0 flex-1
                        rounded-2xl border border-white/10
                        bg-white/[0.04] backdrop-blur
                        p-4 sm:p-5
                        transition
                        hover:bg-white/[0.06] hover:border-white/15
                      "
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-white">
                            {edu.degree}
                          </h3>
                          <p className="mt-1 text-sm text-white/70">
                            {edu.institution}
                          </p>
                        </div>

                        {/* meta pills (neutral) */}
                        <div className="flex flex-wrap gap-2 sm:justify-end">
                          {edu.period && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/75">
                              <FiCalendar className="text-white/60" />
                              {edu.period}
                            </span>
                          )}
                          {(edu as any).location && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/75">
                              <FiMapPin className="text-white/60" />
                              {(edu as any).location}
                            </span>
                          )}
                          {edu.grade && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/75">
                              <FiAward className="text-white/60" />
                              {edu.grade}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* details */}
                      {edu.details?.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                          {edu.details.map((detail) => (
                            <li key={detail} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/30" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* divider */}
                      {idx !== education.length - 1 && (
                        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* bottom shine */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
