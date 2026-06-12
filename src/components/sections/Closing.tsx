import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.png";

import { invitationData } from "../../data/invitationData";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";

export default function Closing() {
  return (
    <section
      className="
        relative
        overflow-hidden

        px-6
        py-16
        sm:py-20
      "
    >
      <SectionBackground />

      <div
        className="
          relative
          z-10

          max-w-4xl
          mx-auto
        "
      >
        <InvitationCard>
          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="text-center"
          >
            <motion.img
              src={logo}
              alt="Logo"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-24

                mx-auto

                animate-[floatLogo_4s_ease-in-out_infinite]

                drop-shadow-[0_0_25px_rgba(220,239,255,1)]

                duration-500
              "
            />

            <p
              className="
                mt-4

                tracking-[10px]

                font-semibold

                text-[#1f6f75]
              "
            >
              H & R
            </p>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="
              mt-10

              text-center

              text-[52px]
              sm:text-[62px]

              leading-none

              drop-shadow-[0_4px_10px_rgba(47,157,163,0.15)]

              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            {invitationData.closing.title}
          </motion.h2>

          {/* Message */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              mt-6

              max-w-2xl
              mx-auto

              text-center

              leading-8

              tracking-[0.2px]

              text-[#6d6258]
            "
          >
            {invitationData.closing.message}
          </motion.p>

          {/* Final Decorative Divider */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              flex

              items-center
              justify-center

              gap-4

              my-10
            "
          >
            <div
              className="
                w-12
                h-px

                bg-[#2f9da3]/30
              "
            />

            <span
              className="
                text-[#8b7b68]

                text-sm
              "
            >
              ✦
            </span>

            <div
              className="
                w-12
                h-px

                bg-[#2f9da3]/30
              "
            />
          </motion.div>
        </InvitationCard>
      </div>
    </section>
  );
}