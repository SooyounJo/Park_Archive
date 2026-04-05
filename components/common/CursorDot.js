import { useEffect, useRef } from "react";

export function CursorDot() {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
    if (!finePointer) return;

    let x = 0;
    let y = 0;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;

      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        el.style.opacity = "0.4";
      });
    };

    const hide = () => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", hide, { passive: true });
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursorDot" aria-hidden="true" />;
}

