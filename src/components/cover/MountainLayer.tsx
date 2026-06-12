import { motion, MotionValue } from "framer-motion";

import mountains from "../../assets/cover/mountains.png";

interface Props {
  y: MotionValue<number>;
}

export default function MountainLayer({ y }: Props) {
  return (
    <motion.div
      style={{ y }}
      className="
        absolute
        inset-0
        pointer-events-none
      "
    >
      <motion.img
        src={mountains}
        alt="Mountains"
        className="
          w-full
          h-full

          object-cover

          select-none
        "
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.015, 1],
        }}
        transition={{
          opacity: {
            delay: 2,
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          },
          scale: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </motion.div>
  );
}