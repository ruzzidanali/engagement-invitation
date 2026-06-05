import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.png";
import { invitationData } from "../../data/invitationData";

export default function Closing() {
  return (
    <section
      className="
        px-6
        py-24
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto

          text-center
        "
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
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
          className="
            w-24

            mx-auto
          "
        />

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

            text-[52px]

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

            text-gray-600

            leading-8
          "
        >
          {invitationData.closing.message}
        </motion.p>

        {/* Verse */}
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
            duration: 1,
            delay: 0.3,
          }}
          className="
            mt-12

            rounded-[30px]

            bg-white

            p-8

            shadow-lg
          "
        >
          <p
            className="
              italic

              leading-8

              text-gray-600
            "
          >
            "{invitationData.closing.verse}"
          </p>

          <p
            className="
              mt-5

              font-semibold

              text-[#1f6f75]
            "
          >
            {invitationData.closing.source}
          </p>
        </motion.div>

        {/* Couple Names */}
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
            duration: 1,
            delay: 0.4,
          }}
          className="
            mt-12
          "
        >
          <h3
            className="
              text-[42px]

              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            Husnina
          </h3>

          <p
            className="
              my-2

              text-[#8b7b68]
            "
          >
            &
          </p>

          <h3
            className="
              text-[42px]

              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            Ruzzidan
          </h3>
        </motion.div>

        {/* Footer */}
        <p
          className="
            mt-16

            text-xs

            tracking-[3px]

            uppercase

            text-gray-400
          "
        >
          Majlis Pertunangan · 31 Oktober 2026
        </p>
      </div>
    </section>
  );
}