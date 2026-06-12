import { motion, MotionValue } from "framer-motion";

import mosque from "../../assets/cover/mosque.png";

interface Props {
  y: MotionValue<number>;
}

export default function MosqueLayer({ y }: Props) {
  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* Glow */}
      <motion.div
        className="
          absolute
          left-1/2
          bottom-32
          -translate-x-1/2

          w-[450px]
          h-[450px]

          rounded-full

          bg-[#fefaf6]/70

          blur-[120px]
        "
        animate={{
          opacity: [0.35, 0.75, 0.35],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mosque */}
      <motion.img
        src={mosque}
        alt="Mosque"
        className="
          absolute
          bottom-0
          w-full

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
    </motion.div>
  );
}