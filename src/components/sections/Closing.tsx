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
        py-12
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
              }}
              className="
                w-24

                mx-auto
              "
            />

            <p
              className="
                mt-4

                tracking-[8px]

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
              mt-8

              text-center

              text-[48px]
              sm:text-[58px]

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

              text-gray-600
            "
          >
            {invitationData.closing.message}
          </motion.p>

          {/* Divider */}
          <div
            className="
              w-24
              h-px

              bg-[#2f9da3]/30

              mx-auto

              my-10
            "
          />
        </InvitationCard>
      </div>
    </section>
  );
}