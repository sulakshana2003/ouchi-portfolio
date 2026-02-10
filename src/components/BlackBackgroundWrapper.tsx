import React from "react";

type BlackBackgroundWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Full-viewport black background wrapper.
 * - Fills the screen
 * - Uses white text by default
 * - Centers nothing by default (you control layout inside)
 */
export default function BlackBackgroundWrapper({
  children,
  className = "",
}: BlackBackgroundWrapperProps) {
  return (
    <div className={`min-h-screen w-full bg-black text-white ${className}`}>
      {children}
    </div>
  );
}
