import { motion } from "framer-motion";

import leaves from "../../assets/cover/leaves.png";

export default function LeafLayer() {
  return (
    <>
      {/* Left Foreground Leaves */}
      <motion.img
        src={leaves}
        alt="Leaves"
        className="
          absolute

          -left-20
          top-0

          w-[280px]
          md:w-[420px]

          opacity-20

          pointer-events-none
          select-none

          z-30
        "
        animate={{
          y: [0, -30, 0],
          rotate: [-2, 2, -2],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Foreground Leaves */}
      <motion.img
        src={leaves}
        alt="Leaves"
        className="
          absolute

          -right-24
          top-10

          w-[250px]
          md:w-[400px]

          opacity-15

          pointer-events-none
          select-none

          z-30
        "
        animate={{
          y: [0, 40, 0],
          rotate: [2, -2, 2],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Floating Leaves */}
      <motion.img
        src={leaves}
        alt="Leaves"
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[180px]
          md:w-[260px]

          opacity-10

          pointer-events-none
          select-none

          z-20
        "
        animate={{
          y: [0, -25, 0],
          rotate: [-1, 1, -1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}