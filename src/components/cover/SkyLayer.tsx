import { motion, MotionValue } from "framer-motion";

import sky from "../../assets/cover/sky.png";

interface Props {
  y: MotionValue<number>;
}

export default function SkyLayer({ y }: Props) {
  return (
    <motion.img
      src={sky}
      alt="Sky"
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
      animate={{
        scale: [1, 1.04, 1],
        x: [0, -15, 0]
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}