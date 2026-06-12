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
        opacity: 0.75,
        x: ["-30vw", "120vw"],
        y: [0, -10, 5, -8, 3, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        opacity: {
          delay: 5.5,
          duration: 2,
        },

        x: {
          delay: 5.5,
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        },

        y: {
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        },

        rotate: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}