import { motion, MotionValue } from "framer-motion";

import mosque from "../../assets/cover/mosque.png";

interface Props {
  y: MotionValue<number>;
}

export default function MosqueLayer({ y }: Props) {
  return (
    <>
      {/* Glow */}
      <motion.div
        style={{ y }}
        className="
          absolute

          left-1/2
          bottom-32

          -translate-x-1/2

          w-[450px]
          h-[450px]

          rounded-full

          bg-white/70

          blur-[120px]
        "
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: [0.35, 0.8, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          opacity: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Mosque */}
      <motion.img
        src={mosque}
        alt="Mosque"
        style={{ y }}
        className="
          absolute
          bottom-0
          w-full

          pointer-events-none
          select-none
        "
        initial={{
          opacity: 0,
          y: 250,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
}