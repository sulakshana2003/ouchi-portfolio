import { useCallback } from "react";

export const useScrollToSection = () => {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
};
