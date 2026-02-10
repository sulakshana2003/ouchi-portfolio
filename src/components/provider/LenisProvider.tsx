import { useEffect, type PropsWithChildren } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

type LenisProviderProps = PropsWithChildren<{
  options?: ConstructorParameters<typeof Lenis>[0];
}>;

export default function LenisProvider({
  children,
  options,
}: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      ...options,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [options]);

  return <>{children}</>;
}
