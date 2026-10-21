"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.display = "block";
    ring.style.display = "block";

    let mx = -100, my = -100, rx = -100, ry = -100;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    let frameId: number;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate(${mx - 2.5}px, ${my - 2.5}px)`;
      ring.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`;
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    const onMouseEnter = () => ring.classList.add("cursor-hover");
    const onMouseLeave = () => ring.classList.remove("cursor-hover");

    const targets = document.querySelectorAll("a, button, [data-interactive]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] hidden"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[34px] h-[34px] rounded-full border border-[#ff2844]/60 pointer-events-none z-[9999] hidden transition-[width,height,border-color] duration-150 ease-out [&.cursor-hover]:w-[50px] [&.cursor-hover]:h-[50px] [&.cursor-hover]:border-[#ff2844]"
      />
    </>
  );
}
