import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

import { invitationData } from "../../data/invitationData";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";
import QRCode from "react-qr-code";

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
              <MapPinned
                size={48}
                strokeWidth={1.5}
                className="text-[#1f6f75]"
              />
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
          <div
            className="
              overflow-hidden

              rounded-[24px]

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
          </div>
          {/* Helper Text */}
          <p
            className="
              mt-5
              
              text-center

              text-sm

              leading-7

              tracking-[0.2px]

              text-gray-500
            " 
          >
            Klik Google Maps atau Waze untuk navigasi terus ke lokasi Majlis.
          </p>

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

          {/* Buttons */}
          <div
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
                rounded-full

                bg-[#1f6f75]

                px-8
                py-3

                text-white

                font-medium

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_10px_25px_rgba(47,157,163,0.35)]

                active:scale-95

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

                px-8
                py-3

                text-[#1f6f75]

                font-medium

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_10px_25px_rgba(47,157,163,0.35)]

                active:scale-95

                cursor-pointer
              "
            >
              Waze
            </button>
            <div
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

                  bg-white

                  p-4

                  shadow-lg
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

                  text-gray-500
                "
              >
                Imbas menggunakan kamera telefon untuk membuka lokasi
              </p>
            </div>
          </div>
        </InvitationCard>
      </div>
    </section>
  );
}