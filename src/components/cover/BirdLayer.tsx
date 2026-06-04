import { motion } from "framer-motion";

import birds from "../../assets/cover/birds.png";

export default function BirdLayer() {
  return (
    <motion.img
      src={birds}
      alt="Birds"
      className="
        absolute

        top-[12%]

        w-20
        sm:w-24
        md:w-28

        pointer-events-none
        select-none

        z-10
      "
      initial={{
        opacity: 0,
        x: "-30vw",
      }}
      animate={{
        opacity: 1,
        x: ["-30vw", "120vw"],
        y: [0, -40, 20, -30, 10, 0],
        rotate: [-2, 2, -2],
        scale: [1, 1.05, 1],
      }}
      transition={{
        opacity: {
          delay: 5.5,
          duration: 1,
        },

        x: {
          delay: 5.5,
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        },

        y: {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        },

        rotate: {
          duration: 10,
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
  );
}