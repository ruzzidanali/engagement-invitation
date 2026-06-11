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
                mt-2

                text-[28px]
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
              <p className="text-gray-500 text-[12px]">
                Anak kepada
              </p>

              <p className="mt-2 text-[15px] tracking-[0.2px] text-gray-700">
                {invitationData.bride.father} & {invitationData.bride.mother}
              </p>
            </div>
          </div>
        </InvitationCard>

        {/* Divider */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
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
                mt-2

                text-[28px]
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
              <p className="text-gray-500 text-[12px]">
                Anak kepada
              </p>

              <p className="mt-2 text-[15px] tracking-[0.2px] text-gray-700">
                {invitationData.groom.father} & {invitationData.groom.mother}
              </p>

            </div>
          </div>
        </InvitationCard>
      </div>
    </section>
  );
}