import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function ShimmerLogo({ src }: Props) {
  return (
    <div
      className="
        relative
        inline-flex
        items-center
        justify-center
      "
    >
      {/* Glow Behind Logo */}
      <motion.div
        className="
          absolute

          w-20
          h-20

          rounded-full

          bg-white/50

          blur-2xl

          pointer-events-none
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Logo */}
      <motion.img
        src={src}
        alt="Logo"
        className="
          relative
          z-10

          w-20
          sm:w-24
          md:w-28

          select-none
          pointer-events-none
        "
        animate={{
          scale: [1, 1.02, 1],
          filter: [
            "drop-shadow(0 0 0px rgba(255,255,255,0))",
            "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
            "drop-shadow(0 0 0px rgba(255,255,255,0))",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle Top Left */}
      <motion.div
        className="
          absolute

          top-[10%]
          left-[15%]

          text-white

          text-lg

          z-20

          pointer-events-none
        "
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.4, 0.5],
          rotate: [0, 180],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      >
        ✦
      </motion.div>

      {/* Sparkle Top Right */}
      <motion.div
        className="
          absolute

          top-[15%]
          right-[10%]

          text-white

          text-sm

          z-20

          pointer-events-none
        "
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.3, 0.5],
          rotate: [0, -180],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 1,
        }}
      >
        ✦
      </motion.div>

      {/* Sparkle Bottom Right */}
      <motion.div
        className="
          absolute

          bottom-[10%]
          right-[15%]

          text-white

          text-base

          z-20

          pointer-events-none
        "
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.4, 0.5],
          rotate: [0, 180],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 2,
        }}
      >
        ✦
      </motion.div>

      {/* Floating Light Orb */}
      <motion.div
        className="
          absolute

          w-4
          h-4

          rounded-full

          bg-white

          blur-sm

          z-20

          pointer-events-none
        "
        animate={{
          x: [-30, 0, 30],
          y: [10, -15, 10],
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}