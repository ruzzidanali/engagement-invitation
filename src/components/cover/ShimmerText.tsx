import { motion } from "framer-motion";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ShimmerText({
  children,
  className,
  style,
}: ShimmerTextProps) {
  return (
    <span
      className={`
        relative
        inline-block

        text-[#1f6f75]

        ${className || ""}
      `}
      style={style}
    >
      {children}

      {/* Shine */}
      <motion.span
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.95) 50%, transparent 100%)",

          backgroundSize: "250% 100%",

          WebkitBackgroundClip: "text",
          backgroundClip: "text",

          color: "transparent",

          fontFamily: style?.fontFamily,
        }}
        animate={{
          backgroundPosition: [
            "-250% 0%",
            "250% 0%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}