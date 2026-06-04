import { motion } from "framer-motion";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 6 + 2,
  delay: Math.random() * 5,
}));

export default function SparkleParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="
            absolute
            rounded-full
            bg-white
          "
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}