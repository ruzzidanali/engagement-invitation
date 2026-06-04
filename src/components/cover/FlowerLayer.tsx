import { MotionValue, motion } from "framer-motion";

import leftFlowers from "../../assets/cover/foreground-flowers-left.png";
import rightFlowers from "../../assets/cover/foreground-flowers-right.png";
import frameFlowers from "../../assets/cover/flower-frame.png";

interface Props {
  y: MotionValue<number>;
}

export default function FlowerLayer({ y }: Props) {
  return (
    <>
      {/* Left Flower Bottom */}
      <motion.img
        style={{ y }}
        src={leftFlowers}
        alt="Flowers Left Bottom"
        className="
          absolute
          right-[-15px]
          bottom-[1%]

          w-[120px]
          sm:w-[150px]
          md:w-[220px]
          lg:w-[280px]

          pointer-events-none
          select-none
          z-20
        "
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.02, 1],
          rotate: [-142, -138, -142],
        }}
        transition={{
          opacity: {
            delay: 3,
            duration: 1.5,
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Right Flower Bottom */}
      <motion.img
        style={{ y }}
        src={rightFlowers}
        alt="Flowers Right Bottom"
        className="
          absolute
          left-[-15px]
          bottom-[1%]

          w-[120px]
          sm:w-[150px]
          md:w-[220px]
          lg:w-[280px]

          pointer-events-none
          select-none
          z-20
        "
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.02, 1],
          rotate: [138, 142, 138],
        }}
        transition={{
          opacity: {
            delay: 3,
            duration: 1.5,
          },
          scale: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Left Flower Top */}
      <motion.img
        style={{ y }}
        src={leftFlowers}
        alt="Flowers Left Top"
        className="
          absolute
          right-[-15px]
          top-[1%]

          w-[120px]
          sm:w-[150px]
          md:w-[220px]
          lg:w-[280px]

          pointer-events-none
          select-none
          z-20
        "
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.02, 1],
          rotate: [178, 182, 178],
        }}
        transition={{
          opacity: {
            delay: 4,
            duration: 1.5,
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Right Flower Top */}
      <motion.img
        style={{ y }}
        src={rightFlowers}
        alt="Flowers Right Top"
        className="
          absolute
          left-[-15px]
          top-[1%]

          w-[120px]
          sm:w-[150px]
          md:w-[220px]
          lg:w-[280px]

          pointer-events-none
          select-none
          z-20
        "
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.02, 1],
          rotate: [-182, -178, -182],
        }}
        transition={{
          opacity: {
            delay: 4,
            duration: 1.5,
          },
          scale: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Center Flower Frame */}
      <motion.img
        style={{ y }}
        src={frameFlowers}
        alt="Flower Frame"
        className="
          absolute
          left-1/2
          bottom-[20%]

          -translate-x-1/2

          w-[90%]
          max-w-[420px]

          pointer-events-none
          select-none
          z-10
        "
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.01, 1],
        }}
        transition={{
          opacity: {
            delay: 5,
            duration: 1.5,
          },
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </>
  );
}