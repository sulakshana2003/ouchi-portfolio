import Orb from "../Orb";

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="
        relative w-full overflow-hidden
        min-h-screen min-h-[100svh]
        bg-black text-white
      "
    >
      {/* ORB BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.7}
          rotateOnHover={true}
          hue={4}
          forceHoverState={false}
        />
      </div>

      {/* CONTENT (RIGHT SIDE) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="min-h-screen min-h-[100svh] flex items-center justify-end">
          <div className="text-right">
            {/* Intro line */}
            <p className="text-white/80 text-[clamp(0.95rem,2.4vw,1.25rem)]">
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">Ouchithya Udangi</span>
              .
            </p>

            {/* Title */}
            <p className="mt-2 text-white/20 text-[clamp(0.95rem,2.4vw,1.25rem)]">
              Full-Stack Engineer
            </p>

            {/* Big heading (image style) */}
            <h1 className="mt-6 leading-[0.9] tracking-tight uppercase font-black">
              <span className="block text-white text-[clamp(2.6rem,9vw,6.5rem)]">
                Welcome to my
              </span>

              <span className="block text-white/20 text-[clamp(2.6rem,9vw,6.5rem)]">
                portfolio
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
