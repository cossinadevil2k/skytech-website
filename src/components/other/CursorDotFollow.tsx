import React, { useEffect, useRef } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

const CursorDotFollow: React.FC = () => {
  const isMobile = useIsMobile();

  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    if (!dot || !circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let circleX = 0;
    let circleY = 0;

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      dot.style.transform = `translate(${dotX - dot.offsetWidth / 2}px, ${dotY - dot.offsetHeight / 2}px)`;
      circle.style.transform = `translate(${circleX - circle.offsetWidth / 2}px, ${circleY - circle.offsetHeight / 2}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full mix-blend-difference">
      <div
        ref={dotRef}
        className="absolute h-3 w-3 rounded-full bg-blue-400"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={circleRef}
        className="absolute h-8 w-8 rounded-full border border-blue-400"
        style={{ left: 0, top: 0 }}
      />
    </div>
  );
};

export default CursorDotFollow;
