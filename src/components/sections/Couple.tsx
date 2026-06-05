import { invitationData } from "../../data/invitationData";
import { motion } from "framer-motion";
// import AnimatedSection from "./AnimatedSection";

export default function Couple() {
  return (
    <section
      id="couple"
      className="
        relative
        overflow-hidden

        min-h-screen

        bg-[#f8fcff]

        px-6
        py-24
      "
    >
      <div>
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
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
              amount: 0.4,
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
            Pasangan
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.9,
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
              mt-5
              text-[60px]
              leading-tight
              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            {invitationData.bride.firstName}
            <br />
            &
            <br />
            {invitationData.groom.firstName}
          </motion.h2>

          <motion.p
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
              delay: 0.4,
            }}
            className="
              mt-8

              max-w-2xl
              mx-auto

              leading-9
              text-gray-600
            "
          >
            Dengan penuh kesyukuran ke hadrat Allah SWT, kami menjemput Dato' /
            Datin / Tuan / Puan / Encik / Cik ke majlis pertunangan kami.
          </motion.p>

          {/* Bride Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="
              mt-16

              rounded-[35px]

              bg-white

              p-8

              shadow-xl
            "
          >
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

            <h3
              className="
                mt-5

                text-[38px]

                text-[#1f6f75]
              "
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              {invitationData.bride.fullName}
            </h3>

            <div className="mt-6">
              <p className="text-gray-500">Anak kepada</p>

              <p className="mt-3 font-semibold">
                {invitationData.bride.father}
              </p>

              <p className="my-2">&</p>

              <p className="font-semibold">{invitationData.bride.mother}</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-12">
            <span
              className="
                text-[70px]
                text-[#2f9da3]
              "
              style={{
                fontFamily: "Great Vibes",
              }}
            >
              &
            </span>
          </div>

          {/* Groom Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="
              rounded-[35px]

              bg-white

              p-8

              shadow-xl
            "
          >
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

            <h3
              className="
                mt-5

                text-[38px]

                text-[#1f6f75]
              "
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              {invitationData.groom.fullName}
            </h3>

            <div className="mt-6">
              <p className="text-gray-500">Anak kepada</p>

              <p className="mt-3 font-semibold">
                {invitationData.groom.father}
              </p>

              <p className="my-2">&</p>

              <p className="font-semibold">{invitationData.groom.mother}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
