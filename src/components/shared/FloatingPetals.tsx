import { useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  depth: number;
  opacity: number;
  spinSpeed: number;
  swayWidth: number;
  color: string;
}

export default function FloatingPetals() {
  const [petals] = useState<Petal[]>(() => {
    const petalColors = [
      "#ffd6e7", // soft pink
      "#bde4ff", // baby blue
      "#c9e8d4", // soft green
    ];

    return Array.from({ length: 12 }).map((_, i) => {
      const size = Math.random() * 16 + 14;
      const left = Math.random() * 100;
      const delay = Math.random() * -15;
      const duration = Math.random() * 8 + 10;
      const depth = Math.floor(Math.random() * 3);
      const opacity = Math.random() * 0.2 + 0.8;
      const spinSpeed = Math.random() * 360 + 180;
      const swayWidth = Math.random() * 80 + 30;

      const color = petalColors[Math.floor(Math.random() * petalColors.length)];

      return {
        id: i,
        left,
        size,
        delay,
        duration,
        depth,
        opacity,
        spinSpeed,
        swayWidth,
        color,
      };
    });
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-20">
      <style>{`
        @keyframes fall {
          0% {
            transform:
              translateY(-5%)
              translateX(0px)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(50vh)
              translateX(var(--sway))
              rotate(calc(var(--spin) * 0.5));
          }

          100% {
            transform:
              translateY(110vh)
              translateX(calc(var(--sway) * -0.5))
              rotate(var(--spin));
          }
        }
      `}</style>

      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="absolute"
          style={
            {
              top: "-5%",
              left: `${petal.left}%`,
              width: petal.size,
              height: petal.size,
              opacity: petal.opacity,
              zIndex: petal.depth === 0 ? 5 : petal.depth === 1 ? 15 : 25,
              animationName: "fall",
              animationDuration: `${petal.duration}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${petal.delay}s`,
              transformOrigin: "center",
              "--sway": `${petal.swayWidth}px`,
              "--spin": `${petal.spinSpeed}deg`,
            } as React.CSSProperties
          }
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Petal Shape */}
          <path
            d="M15,2 C22,2 28,10 26,18 C24,24 18,28 15,28 C12,28 6,24 4,18 C2,10 8,2 15,2 Z"
            fill={petal.color}
            style={{
              filter: "drop-shadow(0 0 3px rgba(255,255,255,0.8))",
            }}
          />

          {/* Vein */}
          <path
            d="M15,4 Q15,16 13,26"
            stroke="#2f9da3"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      ))}
    </div>
  );
}
