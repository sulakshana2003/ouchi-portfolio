import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type HoverImageSliderProps = {
  images?: string[];
  alt?: string;
  intervalMs?: number;
  className?: string;
};

export default function HoverImageSlider({
  images = [],
  alt = "Project image",
  intervalMs = 1100,
  className = "",
}: HoverImageSliderProps) {
  const list = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasMany = list.length > 1;

  useEffect(() => {
    if (!hovered || !hasMany) return;

    timerRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % list.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [hovered, hasMany, intervalMs, list.length]);

  const onEnter = () => setHovered(true);
  const onLeave = () => {
    setHovered(false);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setIdx(0);
  };

  if (!list.length) return null;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative h-full w-full overflow-hidden ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={list[idx]}
          alt={alt}
          className="h-full w-full object-cover opacity-90"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          draggable={false}
          loading="lazy"
        />
      </AnimatePresence>

      {hasMany && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-3 flex justify-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-1.5 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur">
            {list.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === idx ? "bg-white/90" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
