import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";
import QRCode from "react-qr-code";

import { invitationData } from "../../data/invitationData";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";

export default function Location() {
  const openGoogleMaps = () => {
    window.open(
      invitationData.event.gmap,
      "_blank"
    );
  };

  const openWaze = () => {
    window.open(
      invitationData.event.waze,
      "_blank"
    );
  };

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
          {/* Icon */}
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
              duration: 0.8,
            }}
            className="text-center"
          >
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MapPinned
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#1f6f75]"
                />
              </motion.div>
            </div>

            <p
              className="
                mt-4

                uppercase

                tracking-[6px]

                text-[11px]
                font-medium

                text-[#8b7b68]
              "
            >
              Lokasi Majlis
            </p>
          </motion.div>

          {/* Divider */}
          <div
            className="
              mx-auto
              my-8

              h-px
              w-24

              bg-[#2f9da3]/30
            "
          />

          {/* Map */}
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
              delay: 0.2,
            }}
            className="
              overflow-hidden

              rounded-[24px]

              border
              border-white/70

              shadow-md
            "
          >
            <iframe
              title="Location Map"
              src={invitationData.event.embedMap}
              width="100%"
              height="380"
              loading="lazy"
              className="border-0"
            />
          </motion.div>

          {/* Helper Text */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
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
            className="
              mt-5

              text-center

              text-sm

              leading-7

              tracking-[0.2px]

              text-[#6d6258]
            "
          >
            Klik Google Maps atau Waze untuk navigasi terus ke lokasi majlis.
          </motion.p>

          {/* Divider */}
          <div
            className="
              mx-auto
              my-8

              h-px
              w-24

              bg-[#2f9da3]/30
            "
          />

          {/* Navigation Buttons */}
          <motion.div
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
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              flex

              flex-col
              sm:flex-row

              justify-center

              gap-3
            "
          >
            <button
              onClick={openGoogleMaps}
              className="
                primary-button

                cursor-pointer
              "
            >
              Google Maps
            </button>

            <button
              onClick={openWaze}
              className="
                rounded-full

                border
                border-[#1f6f75]

                bg-white/60

                backdrop-blur-sm

                px-8
                py-3

                text-[#1f6f75]

                font-medium

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_10px_25px_rgba(47,157,163,0.25)]

                active:scale-95

                cursor-pointer
              "
            >
              Waze
            </button>
          </motion.div>

          {/* QR Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              delay: 0.6,
            }}
            className="
              mt-10

              text-center
            "
          >
            <p
              className="
                uppercase

                tracking-[6px]

                text-[11px]

                font-medium

                text-[#8b7b68]
              "
            >
              Atau Imbas QR
            </p>

            <div
              className="
                mt-5

                inline-block

                rounded-[24px]

                bg-white/80

                p-4

                shadow-lg

                backdrop-blur-sm
              "
            >
              <QRCode
                value={invitationData.event.gmap}
                size={160}
                bgColor="transparent"
                fgColor="#1f6f75"
              />
            </div>

            <p
              className="
                mt-4

                text-sm

                leading-7

                text-[#6d6258]
              "
            >
              Imbas menggunakan kamera telefon
              <br />
              untuk membuka lokasi.
            </p>
          </motion.div>
        </InvitationCard>
      </div>
    </section>
  );
}