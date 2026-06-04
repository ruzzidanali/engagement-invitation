import { MotionValue, motion } from "framer-motion";

interface Props {
  y: MotionValue<number>;
}

import clouds from "../../assets/cover/clouds.png";

export default function CloudLayer({ y }: Props) {
  return (
    <>
      {/* Far Cloud */}
      <motion.img
        style={{ y }}
        src={clouds}
        alt="Clouds"
        className="
          absolute

          top-[6%]

          w-[180px]
          md:w-[280px]

          opacity-40

          pointer-events-none
          select-none

          z-[1]
        "
        initial={{
          opacity: 0,
          x: "-30vw",
        }}
        animate={{
          opacity: 0.4,
          x: ["-30vw", "120vw"],
        }}
        transition={{
          opacity: {
            duration: 2,
          },
          x: {
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      {/* Mid Cloud */}
      <motion.img
        style={{ y }}
        src={clouds}
        alt="Clouds"
        className="
          absolute

          top-[14%]

          w-[140px]
          md:w-[220px]

          opacity-55

          pointer-events-none
          select-none

          z-[2]
        "
        initial={{
          opacity: 0,
          x: "-50vw",
        }}
        animate={{
          opacity: 0.55,
          x: ["-50vw", "120vw"],
        }}
        transition={{
          opacity: {
            duration: 2,
          },
          x: {
            duration: 75,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      {/* Near Cloud */}
      <motion.img
        style={{ y }}
        src={clouds}
        alt="Clouds"
        className="
          absolute

          top-[10%]
          right-0

          w-[220px]
          md:w-[340px]

          opacity-70

          pointer-events-none
          select-none

          z-[3]
        "
        initial={{
          opacity: 0,
          x: "-20vw",
        }}
        animate={{
          opacity: 0.7,
          x: ["-20vw", "120vw"],
        }}
        transition={{
          opacity: {
            duration: 2,
          },
          x: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </>
  );
}
