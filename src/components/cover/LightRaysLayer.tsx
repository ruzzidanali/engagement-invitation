import { motion } from "framer-motion";

export default function LightRaysLayer() {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        bottom-[20%]
        -translate-x-1/2

        w-[600px]
        h-[600px]

        pointer-events-none
      "
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: [0.12, 0.25, 0.12],
        scale: [1, 1.04, 1],
        rotate: [0, 2, 0],
      }}
      transition={{
        opacity: {
          delay: 0.8,
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="
          absolute
          inset-0
          rounded-full

          bg-[conic-gradient(
            from_0deg,
            transparent_0deg,
            rgba(255,248,235,0.35)_20deg,
            transparent_40deg,
            rgba(255,248,235,0.28)_60deg,
            transparent_90deg,
            rgba(255,248,235,0.30)_120deg,
            transparent_160deg,
            rgba(255,248,235,0.22)_200deg,
            transparent_240deg,
            rgba(255,248,235,0.30)_280deg,
            transparent_320deg
          )]
          
          blur-3xl
        "
      />
    </motion.div>
  );
}