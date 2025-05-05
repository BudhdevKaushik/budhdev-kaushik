import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const FloatingElements = () => {
  const elements = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      elements.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI;

        el.style.transform = `rotate(${angle}deg)`;
        el.style.setProperty("--x", `${(x - centerX) / 20}px`);
        el.style.setProperty("--y", `${(y - centerY) / 20}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating circles */}
      <motion.div
        ref={(el) => (elements.current[0] = el) as any}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-xl pointer-events-none"
        style={{
          transform: "rotate(0deg)",
          transformStyle: "preserve-3d",
          translate: "calc(var(--x, 0)) calc(var(--y, 0))",
        }}
      />

      <motion.div
        ref={(el) => (elements.current[1] = el) as any}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-xl pointer-events-none"
        style={{
          transform: "rotate(0deg)",
          transformStyle: "preserve-3d",
          translate: "calc(var(--x, 0)) calc(var(--y, 0))",
        }}
      />
    </>
  );
};

export default FloatingElements;
