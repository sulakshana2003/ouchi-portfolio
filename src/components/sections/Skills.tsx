// Skills.jsx
import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// Your skills data (use yours or import from profile if you prefer)
const skills = {
  languages: ["Java", "SQL", "C", "C++", "JavaScript", "PHP", "HTML", "CSS"],
  frameworks: ["MERN Stack", "Next.js"],
};

const languageLogos = [
  { node: <FaJava />, title: "Java", href: "https://www.oracle.com/java/" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net/" },
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiC />,
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org/" },
];

const frameworkLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden overflow-x-hidden py-16 sm:py-24"
    >
      {/* Background vignette / soft glow (matches Hero vibe) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[360px] w-[360px] sm:h-[520px] sm:w-[900px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Skills & Stacks
              </p>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Tools I use to build{" "}
              <span className="text-white/60">fast, modern</span>
              <br />
              <span className="text-white/60">web experiences</span>
            </h2>

            {/* <p className="max-w-xl text-base leading-relaxed text-white font-semibold">
              A practical stack for responsive UI, clean APIs, and scalable
              projects. Here are the languages and frameworks I’m comfortable
              with.
            </p> */}

            {/* Pills */}
            <div className="space-y-4">
              <div className="space-y-2"></div>

              <div className="space-y-2"></div>
            </div>
          </div>

          {/* RIGHT — Loop Card */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            {/* floating dot like Hero */}
            <div className="pointer-events-none absolute right-6 top-6 sm:right-10 sm:top-10 h-6 w-6 rounded-full bg-white/35" />

            <div
              className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] border border-white/10
bg-gradient-to-b from-stone-900/70 via-stone-950/45 to-black
shadow-2xl"
            >
              {/* subtle inner glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />

              <div className="relative p-6 sm:p-9">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white/80">
                    Core Technologies
                  </p>
                </div>

                <div className="mt-6 space-y-6">
                  <div
                    className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] border border-white/10
bg-gradient-to-b from-zinc-900/70 via-zinc-950/45 to-black
shadow-2xl"
                  >
                    <div className="origin-center scale-[0.92] sm:scale-100">
                      <LogoLoop
                        logos={frameworkLogos}
                        speed={50}
                        direction="left"
                        logoHeight={42}
                        gap={36}
                        hoverSpeed={20}
                        scaleOnHover
                        ariaLabel="Frameworks and tools"
                      />
                    </div>
                  </div>

                  {/* Second loop (languages) */}
                  <div
                    className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] border border-white/10
bg-gradient-to-b from-zinc-900/70 via-zinc-950/45 to-black
shadow-2xl"
                  >
                    <div className="origin-center scale-[0.92] sm:scale-100">
                      <LogoLoop
                        logos={languageLogos}
                        speed={50}
                        direction="right"
                        logoHeight={40}
                        gap={34}
                        hoverSpeed={18}
                        scaleOnHover
                        ariaLabel="Programming languages"
                      />
                    </div>
                  </div>

                  {/* Small stat row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 p-3 sm:p-4
shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] hover:bg-zinc-900/30 transition"
                    >
                      <p className="text-xs text-white/60">Languages</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        {skills.languages.length}
                      </p>
                    </div>
                    <div
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 p-3 sm:p-4
shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] hover:bg-zinc-900/30 transition"
                    >
                      <p className="text-xs text-white/60">Frameworks</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        {skills.frameworks.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny bottom glow */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
