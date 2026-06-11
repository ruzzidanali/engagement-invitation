import { motion } from "framer-motion";

interface InvitationCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function InvitationCard({
  children,
  className = "",
}: InvitationCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={`
          relative

          w-full

          rounded-[32px]

          bg-white/92

          px-6
          py-8

          sm:px-8
          sm:py-10

          border
          border-white/80

          shadow-[0_15px_50px_rgba(47,157,163,0.12)]

          backdrop-blur-sm

          overflow-hidden

          ${className}
        `}
      >
        {/* Top Gradient Accent */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0

            h-[4px]

            bg-gradient-to-r
            from-[#dcefff]
            via-[#2f9da3]
            to-[#f8dce8]
          "
        />

        {/* Soft Background Glow */}
        <div
          className="
            absolute

            -top-24
            -right-24

            w-48
            h-48

            rounded-full

            bg-[#dcefff]/50

            blur-3xl
          "
        />

        <div
          className="
            absolute

            -bottom-24
            -left-24

            w-48
            h-48

            rounded-full

            bg-[#f8dce8]/40

            blur-3xl
          "
        />

        {/* Inner Light */}
        <div
          className="
            absolute

            inset-0

            rounded-[32px]

            shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]

            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
  );
}