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

        opacity-60

        pointer-events-none
        select-none
      "
      animate={{
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    />
  );
}