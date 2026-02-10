// Contact.jsx
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { profile } from "../../data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export const Contact = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-24">
      {/* background glow (always behind) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-140px] top-[20%] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-[-160px] bottom-[-160px] h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      </div>

      {/* CONTENT must be above glow */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Contact Me
            </p>
          </div>

          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Work
            <span className="text-white/60"> Together</span>
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            I&apos;m actively looking for an internship or junior software
            developer role where I can contribute to real products and keep
            growing.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          {/* LEFT: info card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="
              group relative overflow-hidden
              rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur
              p-6 sm:p-8
              shadow-[0_28px_80px_-50px_rgba(0,0,0,0.95)]
            "
          >
            {/* glow inside card (pointer-events-none already ok) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
              <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
            </div>

            {/* IMPORTANT: keep actual content above card glow */}
            <div className="relative z-10">
              <p className="text-white/60 text-sm tracking-wide uppercase">
                Reach me
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                    <FiPhone />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-white/60">Phone</p>
                    <p className="text-white font-semibold">{profile.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                    <FiMail />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-white/60">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="break-all text-white font-semibold hover:text-sky-300 transition"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                    <FiMapPin />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-white/60">Location</p>
                    <p className="text-white font-semibold">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* socials */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-white/5 px-4 py-2
                    text-sm font-semibold text-white/85
                    transition hover:bg-white/10
                  "
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-white/5 px-4 py-2
                    text-sm font-semibold text-white/85
                    transition hover:bg-white/10
                  "
                >
                  <FiGithub /> GitHub
                </a>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <p className="mt-6 text-sm text-white/60">
                You can also email me directly using the email link above.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: form card */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="
              group relative overflow-hidden
              rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur
              p-6 sm:p-8
              shadow-[0_28px_80px_-50px_rgba(0,0,0,0.95)]
            "
            action="https://formspree.io/f/mdanbwzp"
            method="POST"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
              <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
            </div>

            {/* IMPORTANT: inputs above card glow */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Send a message
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="mb-1 flex items-center gap-2 text-sm text-white/70">
                    <FiUser /> Name
                  </span>
                  <input
                    name="name"
                    required
                    className="
                      w-full rounded-2xl border border-white/10 bg-black/40
                      px-4 py-3 text-sm text-white placeholder:text-white/35
                      outline-none transition
                      focus:border-sky-400/50 focus:ring-2 focus:ring-sky-500/20
                    "
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 flex items-center gap-2 text-sm text-white/70">
                    <FiMail /> Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="
                      w-full rounded-2xl border border-white/10 bg-black/40
                      px-4 py-3 text-sm text-white placeholder:text-white/35
                      outline-none transition
                      focus:border-sky-400/50 focus:ring-2 focus:ring-sky-500/20
                    "
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 flex items-center gap-2 text-sm text-white/70">
                    <FiMessageSquare /> Message
                  </span>
                  <textarea
                    name="message"
                    required
                    className="
                      w-full rounded-2xl border border-white/10 bg-black/40
                      px-4 py-3 text-sm text-white placeholder:text-white/35
                      outline-none transition
                      focus:border-sky-400/50 focus:ring-2 focus:ring-sky-500/20
                      h-32 resize-none
                    "
                    placeholder="Tell me about your project..."
                  />
                </label>

                <input
                  type="hidden"
                  name="_subject"
                  value="New message from Portfolio Contact Form"
                />

                {/* ✅ IMPORTANT: remove window.location usage here (SSR safe) */}
                <input type="hidden" name="_redirect" value="/#contact" />

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="
                    w-full inline-flex items-center justify-center gap-2
                    rounded-2xl bg-white text-black
                    px-4 py-3 text-sm font-semibold
                    transition hover:bg-white/90
                  "
                >
                  <FiSend />
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
