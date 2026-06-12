import { motion } from "framer-motion";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";
import logo from "../../assets/logo/logo.png";


export default function Bismillah() {
  return (
    <section
      className="
        relative
        overflow-hidden

        px-6
        pt-28
        pb-16
        sm:pb-20
      "
    >
      <SectionBackground />
      

      <div
        className="
          relative
          z-10

          max-w-3xl
          mx-auto
          my-auto

          text-center
        "
      >
        {/* Logo */}
        <motion.img
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
          src={logo}
          alt="Logo"
          className="
            mx-auto

            w-20
            sm:w-24
            animate-[floatLogo_4s_ease-in-out_infinite]

            drop-shadow-[0_0_18px_rgba(220,239,255,0.9)]

            duration-500
        "
        />

        {/* Initials */}
        <motion.h1
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
            delay: 0.2,
          }}
          className="
            mt-[-10px]

            text-[22px]
            sm:text-[32px]

          text-[#1f6f75]
        "
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          H & R
        </motion.h1>

        {/* Arabic */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-10
            text-[28px]
            sm:text-[34px]

            text-[#1f6f75]
          "
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-5

            text-[28px]
            sm:text-[34px]

            leading-8

            tracking-[0.2px]

            text-[#8b7b68]
          "
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          Pertalian Kasih
          <br />
          Terpahat Indah
        </motion.h3>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-5

            max-w-2xl
            mx-auto

            leading-8

            tracking-[0.2px]

            text-gray-600
          "
        >
          Dengan penuh kesyukuran ke hadrat Allah SWT, kami menjemput Dato' /
          Datin / Tuan / Puan / Encik / Cik untuk hadir memeriahkan majlis
          pertunangan kami dan berkongsi kegembiraan pada hari yang penuh
          bermakna ini.
        </motion.p>

        {/* Quote Card */}
        <div className="mt-8">
          <InvitationCard>
            <p
              className="
                text-[14px]
                leading-8

                tracking-[0.2px]

                italic

                text-gray-600
              "
            >
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu pasangan dari jenismu sendiri supaya kamu cenderung dan
              merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
              kasih dan sayang."
            </p>

            <p
              className="
                mt-5

                font-semibold

                text-[#1f6f75]
              "
            >
              Surah Ar-Rum : 21
            </p>
          </InvitationCard>
        </div>
      </div>
    </section>
  );
}
