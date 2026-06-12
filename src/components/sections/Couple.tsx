import { motion } from "framer-motion";

import { invitationData } from "../../data/invitationData";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";

export default function Couple() {
  return (
    <section
      id="couple"
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

          max-w-3xl
          mx-auto
        "
      >
        {/* Bride Card */}
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
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <InvitationCard>
            <div className="text-center">
              <p
                className="
                  uppercase

                  tracking-[6px]

                  text-[11px]
                  font-medium

                  text-[#8b7b68]
                "
              >
                Bakal Pengantin Perempuan
              </p>

              <h2
                className="
                  mt-3

                  text-[32px]
                  sm:text-[44px]

                  leading-none

                  text-[#1f6f75]

                  drop-shadow-[0_4px_10px_rgba(47,157,163,0.12)]
                "
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                {invitationData.bride.fullName}
              </h2>

              <div className="mt-3">
                <p
                  className="
                    text-[12px]
                    text-[#8b7b68]
                  "
                >
                  Anak kepada
                </p>

                <p
                  className="
                    mt-2

                    text-[15px]

                    tracking-[0.2px]

                    text-[#6d6258]
                  "
                >
                  {invitationData.bride.father} &{" "}
                  {invitationData.bride.mother}
                </p>
              </div>
            </div>
          </InvitationCard>
        </motion.div>

        {/* Divider */}
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
            delay: 0.2,
          }}
          className="
            py-8

            flex
            items-center
            justify-center

            gap-4
          "
        >
          <div className="w-16 h-px bg-[#d8c7b7]" />

          <span
            className="
              text-[#8b7b68]

              text-2xl
            "
          >
            ♥
          </span>

          <div className="w-16 h-px bg-[#d8c7b7]" />
        </motion.div>

        {/* Groom Card */}
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
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <InvitationCard>
            <div className="text-center">
              <p
                className="
                  uppercase

                  tracking-[6px]

                  text-[11px]
                  font-medium

                  text-[#8b7b68]
                "
              >
                Bakal Pengantin Lelaki
              </p>

              <h2
                className="
                  mt-3

                  text-[32px]
                  sm:text-[44px]

                  leading-none

                  text-[#1f6f75]

                  drop-shadow-[0_4px_10px_rgba(47,157,163,0.12)]
                "
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                {invitationData.groom.fullName}
              </h2>

              <div className="mt-3">
                <p
                  className="
                    text-[12px]

                    text-[#8b7b68]
                  "
                >
                  Anak kepada
                </p>

                <p
                  className="
                    mt-2

                    text-[15px]

                    tracking-[0.2px]

                    text-[#6d6258]
                  "
                >
                  {invitationData.groom.father} &{" "}
                  {invitationData.groom.mother}
                </p>
              </div>
            </div>
          </InvitationCard>
        </motion.div>
      </div>
    </section>
  );
}