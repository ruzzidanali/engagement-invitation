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
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`
        relative

        w-full

        rounded-[28px]

        bg-white

        px-8
        py-10

        shadow-[0_8px_30px_rgba(0,0,0,0.08)]

        border
        border-[#f3ede7]

        overflow-hidden

        ${className}
      `}
    >
      {/* Top Accent Line */}
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

      {children}
    </motion.div>
  );
}