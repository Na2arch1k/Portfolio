"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Native scroll has no inertia — the "dead" feeling the redesign is fixing.
 * Lenis intercepts wheel/touch input and eases the scroll position itself,
 * which is what gives sites like devils.inc their weighted, alive feel.
 * Skipped entirely under prefers-reduced-motion: forcing eased scrolling on
 * someone who asked the OS for less motion would be the opposite of respectful.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    // In-page anchors (nav links, "scroll to projects") should ease through
    // Lenis too, not jump-cut via the browser's native anchor handling.
    function onAnchorClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -88 });
    }
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
