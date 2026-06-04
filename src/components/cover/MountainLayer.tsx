import { motion, MotionValue } from "framer-motion";

import mountains from "../../assets/cover/mountains.png";

interface Props {
  y: MotionValue<number>;
}

export default function MountainLayer({ y }: Props) {
  return (
    <motion.img
      src={mountains}
      alt="Mountains"
      style={{ y }}
      className="
        absolute
        inset-0

        w-full
        h-full

        object-cover

        pointer-events-none
        select-none
      "
      initial={{
        opacity: 0,
        scale: 1.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 2,
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}