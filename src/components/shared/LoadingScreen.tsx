import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.png";

export default function LoadingScreen() {
  return (
    <div
      className="
        fixed
        inset-0

        z-[9999]

        flex
        flex-col
        items-center
        justify-center

        bg-gradient-to-b
        from-[#fdfefe]
        via-[#eef8fb]
        to-[#f8fdf9]
      "
    >
      {/* Logo Container */}
      <div className="relative flex items-center justify-center">
        {/* Soft Glow */}
        <motion.div
          className="
            absolute

            w-24
            h-24

            rounded-full

            bg-[#fffaf0]/70

            blur-2xl
          "
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="
            relative
            z-10

            w-28

            select-none
            pointer-events-none
          "
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.03, 1],
          }}
          transition={{
            opacity: {
              duration: 1.5,
            },
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Initials */}
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        className="
          mt-4

          tracking-[8px]

          font-semibold

          text-[#1f6f75]
        "
      >
        H & R
      </motion.p>

      {/* Welcome Text */}
      <motion.div
        animate={{
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          mt-8

          text-sm

          tracking-[4px]

          uppercase

          text-[#8b7b68]
        "
      >
        Selamat Datang
      </motion.div>
    </div>
  );
}