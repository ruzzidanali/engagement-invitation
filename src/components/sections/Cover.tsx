import { motion, useScroll, useTransform } from "framer-motion";

import logo from "../assets/logo.png";

import FloatingPetals from "../shared/FloatingPetals";
import CoverScene from "../cover/CoverScene";
import ShimmerLogo from "../cover/ShimmerLogo";
import ShimmerText from "../cover/ShimmerText";
import SparkleParticles from "../cover/SparkleParticles";

import { invitationData } from "../../data/invitationData";

interface CoverProps {
  onOpen: () => void;
}

export default function Cover({ onOpen }: CoverProps) {
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 500], [0, -250]);

  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleOpenInvitation = () => {
    onOpen();

    const section = document.getElementById("couple");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Scene */}
      <CoverScene />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Petals */}
      <FloatingPetals />

      {/* Sparkles */}
      <SparkleParticles />

      {/* Main Container */}
      <div
        className="
          relative
          z-10

          flex
          min-h-screen

          items-center
          justify-center

          px-3
          py-3
        "
      >
        <div
          className="
            relative

            w-full
            max-w-[430px]

            aspect-[9/16]

            overflow-hidden
          "
        >
          {/* Content */}
          <motion.div
            style={{
              y: contentY,
              opacity: contentOpacity,
            }}
            className="
              absolute
              inset-0

              flex
              flex-col

              items-center
              justify-center

              text-center

              px-6
              sm:px-8

              pb-[5%]
            "
          >
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 6,
              }}
            >
              <ShimmerLogo src={logo} />
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 7,
              }}
              className="
                mt-4

                uppercase

                text-[10px]
                sm:text-[11px]
                md:text-[12px]

                tracking-[3px]
                sm:tracking-[4px]

                text-[#6d6258]
              "
            >
              {invitationData.event.title}
            </motion.p>

            {/* Bride Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 7.5,
              }}
              className="
                mt-3

                text-[48px]
                sm:text-[56px]
                md:text-[60px]
                lg:text-[68px]

                leading-none
              "
            >
              <ShimmerText
                style={{
                  fontFamily: "Great Vibes",
                }}
              >
                {invitationData.bride.firstName}
              </ShimmerText>
            </motion.h1>

            {/* Ampersand */}
            <motion.p
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 8,
              }}
              className="
                my-1

                text-xl
                sm:text-2xl

                text-[#8b7b68]
              "
            >
              &
            </motion.p>

            {/* Groom Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 8.5,
              }}
              className="
                text-[48px]
                sm:text-[56px]
                md:text-[60px]
                lg:text-[68px]

                leading-none

                overflow-visible
              "
            >
              <ShimmerText
                style={{
                  fontFamily: "Great Vibes",
                }}
              >
                {invitationData.groom.firstName}
              </ShimmerText>
            </motion.h1>

            {/* Button */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 9.5,
              }}
            >
              <button
                onClick={handleOpenInvitation}
                className="
                mt-8
                sm:mt-10

                rounded-full

                bg-white

                px-8
                sm:px-10

                py-3
                sm:py-4

                shadow-xl

                text-[10px]
                sm:text-xs

                font-semibold

                tracking-[3px]
                sm:tracking-[4px]

                uppercase

                text-[#4a4037]

                transition-all
                duration-300

                hover:scale-105
                "
              >
                Buka Jemputan
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
