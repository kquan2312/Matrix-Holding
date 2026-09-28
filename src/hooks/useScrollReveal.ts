import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "main > section:not(.hero)",
    );

    if (!("IntersectionObserver" in window)) {
      return;
    }

    document.documentElement.classList.add("scroll-reveal-enabled");
    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -64px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-reveal-enabled");
      sections.forEach((section) => {
        section.classList.remove("scroll-reveal", "is-visible");
      });
    };
  }, []);
}
