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
        py-12
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

                tracking-[3px]

                text-xs

                text-[#8b7b68]
              "
            >
              Bakal Pengantin Perempuan
            </p>

            <h2
              className="
                mt-2

                text-[25px]
                sm:text-[40px]

                text-[#1f6f75]
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

              <p className="mt-1 text-[15px]">
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

                tracking-[3px]

                text-xs

                text-[#8b7b68]
              "
            >
              Bakal Pengantin Lelaki
            </p>

            <h2
              className="
                mt-2

                text-[25px]
                sm:text-[40px]

                text-[#1f6f75]
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

              <p className="mt-1 text-[15px]">
                {invitationData.groom.father} & {invitationData.groom.mother}
              </p>

            </div>
          </div>
        </InvitationCard>
      </div>
    </section>
  );
}