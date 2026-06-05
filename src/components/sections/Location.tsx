import { motion } from "framer-motion";
import { invitationData } from "../../data/invitationData";

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
    <section className="px-6 py-16">
      <div
        className="
          max-w-4xl
          mx-auto
          text-center
        "
      >
        {/* Title */}
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
            duration: 0.8,
          }}
          className="
            uppercase

            tracking-[4px]

            text-sm

            text-[#8b7b68]
          "
        >
          Lokasi Majlis
        </motion.p>

        {/* Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          }}
          className="
            mt-8

            rounded-[35px]

            bg-white

            p-6
            md:p-8

            shadow-lg
          "
        >
          {/* Map */}
          {/* <div
            className="
              overflow-hidden

              rounded-3xl
            "
          >
            <iframe
              title="Location"
              src={invitationData.event.embedMap}
              width="100%"
              height="320"
              loading="lazy"
              className="border-0"
            />
          </div> */}

          {/* Venue */}
          <h3
            className="
              mt-6

              text-2xl

              font-semibold

              text-[#1f6f75]
            "
          >
            {invitationData.event.venue}
          </h3>

          {/* Address */}
          <p
            className="
              mt-3

              text-gray-600

              leading-7
            "
          >
            {invitationData.event.address}
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8

              flex
              flex-col
              sm:flex-row

              gap-3

              justify-center
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

                transition

                hover:scale-105
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

                transition

                hover:scale-105
              "
            >
              Waze
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}