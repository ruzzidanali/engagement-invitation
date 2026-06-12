import { motion } from "framer-motion";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 6 + 2,
  delay: Math.random() * 8,
}));

export default function SparkleParticles() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        z-5
      "
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-[#fffaf0]
          "
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 0.45, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}