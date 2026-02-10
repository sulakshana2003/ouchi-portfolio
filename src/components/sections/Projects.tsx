// Projects.jsx
import { motion, cubicBezier } from "framer-motion";
import HoverImageSlider from "../../components/HoverImageSlider";

import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiCalendar,
  FiUser,
  FiTag,
} from "react-icons/fi";
import { projects } from "../../data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
  hover: {
    y: -10,
    scale: 1.01,
    transition: { type: "spring" as const, stiffness: 240, damping: 18 },
  },
};

const imageWrap = {
  hover: {
    scale: 1.06,
    transition: { duration: 0.45, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const shine = {
  hover: {
    x: "140%",
    opacity: 1,
    transition: { duration: 0.75, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const glow = {
  hover: { opacity: 1, transition: { duration: 0.25 } },
};

const icons = {
  hover: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export const Projects = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-24">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-120px] top-[25%] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-[-160px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span className="text-sm text-white/80">Projects</span>
          </div>

          <div className="mt-5 flex items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              What I&apos;ve <span className="text-white/60">Built</span>
            </h2>

            <div className="hidden sm:flex items-center gap-2 text-xs text-white/50"></div>
          </div>

          <p className="mt-3 max-w-2xl text-white/70">
            A selection of projects I’ve built—focused on clean UI, performance,
            and real-world features.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              initial="hidden"
              animate="show"
              whileHover="hover" // ✅ hover state comes from the whole card
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/10
                bg-white/[0.04] backdrop-blur
                shadow-[0_28px_80px_-50px_rgba(0,0,0,0.95)]
              "
            >
              {/* animated border glow */}
              <motion.div
                variants={glow}
                className="pointer-events-none absolute inset-0 opacity-0"
              >
                <div className="absolute inset-[-2px] rounded-[1.6rem] bg-gradient-to-br from-sky-400/25 via-indigo-500/18 to-transparent blur-xl" />
              </motion.div>

              {/* shine sweep */}
              <motion.div
                variants={shine}
                initial={{ x: "-140%", opacity: 0 }}
                className="pointer-events-none absolute top-0 h-full w-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                  transform: "skewX(-12deg)",
                }}
              />

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                <motion.div variants={imageWrap} className="h-full w-full">
                  <HoverImageSlider
                    images={
                      project.images?.length
                        ? project.images
                        : [
                            project.image ??
                              "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=70",
                          ]
                    }
                    alt={project.title}
                  />
                </motion.div>

                {/* readability gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />

                {/* quick action icons on hover */}
                <motion.div
                  variants={icons}
                  initial={{ opacity: 0, y: 4 }}
                  className="absolute right-4 top-4 z-20 flex gap-2"
                >
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="
                        inline-flex h-9 w-9 items-center justify-center
                        rounded-full border border-white/10 bg-black/45
                        text-white/85 backdrop-blur
                        transition hover:bg-white/10
                      "
                      aria-label="Open repository"
                      title="Code"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="
                        inline-flex h-9 w-9 items-center justify-center
                        rounded-full border border-white/10 bg-black/45
                        text-white/85 backdrop-blur
                        transition hover:bg-white/10
                      "
                      aria-label="Open live demo"
                      title="Live"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </motion.div>

                {/* title overlay */}
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  {/* <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 line-clamp-2">
                    {project.description}
                  </p> */}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                {/* meta badges */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 line-clamp-2">
                    {project.description}
                  </p>
                  {project.year && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/75">
                      <FiCalendar className="text-white/60" />
                      {project.year}
                    </span>
                  )}
                  {project.role && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/75">
                      <FiUser className="text-white/60" />
                      {project.role}
                    </span>
                  )}
                  {project.category && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/75">
                      <FiTag className="text-white/60" />
                      {project.category}
                    </span>
                  )}
                </div>

                {/* points */}
                <ul className="space-y-2 text-sm text-white/70">
                  {project.points?.slice(0, 4).map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/30" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full border border-white/10 bg-white/5
                        px-3 py-1 text-[11px] uppercase tracking-wider text-white/80
                        transition group-hover:bg-white/10
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions row */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-white/45">Details</span>

                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="
                          inline-flex items-center gap-2 rounded-full
                          border border-white/10 bg-white/5 px-4 py-2
                          text-xs font-semibold text-white/85
                          transition hover:bg-white/10
                        "
                      >
                        Live <FiArrowUpRight className="opacity-70" />
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="
                          inline-flex items-center gap-2 rounded-full
                          border border-white/10 bg-white/5 px-4 py-2
                          text-xs font-semibold text-white/85
                          transition hover:bg-white/10
                        "
                      >
                        Code <FiArrowUpRight className="opacity-70" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* bottom shine line */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
