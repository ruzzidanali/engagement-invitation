import { motion } from "framer-motion";

import sparkles from "../../assets/cover/sparkles.png";

export default function SparkleLayer() {
  return (
    <motion.img
      src={sparkles}
      alt="Sparkles"
      className="
        absolute
        inset-0

        w-full
        h-full

        object-cover

        opacity-40

        pointer-events-none
        select-none
      "
      animate={{
        opacity: [0.25, 0.55, 0.25],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}