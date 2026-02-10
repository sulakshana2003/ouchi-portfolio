/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "../../../../lib/utils.ts";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="w-full">
      <div
        className={cn(
          // ✅ allow scrolling (page can be taller than viewport)
          "relative min-h-screen w-full bg-black text-white",
          className
        )}
        {...(props as any)}
      >
        {/* ✅ background layers (can be overflow-hidden, doesn't affect scroll) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* white gradient glow */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_20%_90%,rgba(255,255,255,0.10),transparent_60%)]"
            )}
          />

          {/* subtle animated aurora */}
          <div
            className="absolute -inset-[10px] opacity-35 blur-[18px] will-change-transform"
            style={
              {
                "--aurora":
                  "repeating-linear-gradient(100deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.10)_10%,transparent_22%,rgba(255,255,255,0.14)_32%)",
              } as React.CSSProperties
            }
          >
            <div
              className={cn(
                "absolute inset-0 [background-image:var(--aurora)] [background-size:300%_200%] [background-position:50%_50%] animate-[aurora_10s_ease-in-out_infinite]",
                showRadialGradient &&
                  "[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,transparent_70%)]"
              )}
            />
          </div>
        </div>

        {/* ✅ content stays scrollable */}
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};
