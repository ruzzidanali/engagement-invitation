import logo from "../assets/logo.png";
import background from "../assets/scenic-background.png";
import frame from "../assets/flower-frame.png";

import FloatingPetals from "./FloatingPetals";

import { invitationData } from "../data/invitationData";

interface CoverProps {
  onOpen: () => void;
}

export default function Cover({ onOpen }: CoverProps) {
  const handleOpenInvitation = () => {
    onOpen();

    const section = document.getElementById("couple");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Falling Petals */}
      <FloatingPetals />

      {/* Floral Frame */}
      <img
        src={frame}
        alt="Frame"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-fill
          pointer-events-none
          select-none
        "
      />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-2 py-4">
        <div className="relative w-full max-w-[450px] h-[95vh]">
          {/* Content */}
          <div
            className="
              absolute
              inset-0

              flex
              flex-col
              items-center
              text-center

              px-8
              pt-[200px]
            "
          >
            {/* Logo */}
            <img
              src={logo}
              alt="HR Logo"
              className="
                w-16
                md:w-20
                mb-5
              "
            />

            {/* Title */}
            <p
              className="
                uppercase
                tracking-[4px]
                text-[11px]
                text-[#6d6258]
              "
            >
              {invitationData.event.title}
            </p>

            {/* Bride Name */}
            <h1
              className="
                mt-2
                text-[60px]
                leading-none
                text-[#1f6f75]
              "
              style={{
                fontFamily: "Great Vibes",
              }}
            >
              {invitationData.bride.firstName}
            </h1>

            {/* Ampersand */}
            <p
              className="
                my-1
                text-2xl
                text-[#8b7b68]
              "
            >
              &
            </p>

            {/* Groom Name */}
            <h1
              className="
                text-[60px]
                leading-none
                text-[#1f6f75]
              "
              style={{
                fontFamily: "Great Vibes",
              }}
            >
              {invitationData.groom.firstName}
            </h1>

            {/* Open Button */}
            <button
              onClick={handleOpenInvitation}
              className="
                mt-10

                rounded-full

                bg-white

                px-10
                py-4

                shadow-xl

                text-xs
                font-semibold

                tracking-[4px]
                uppercase

                text-[#4a4037]

                transition-all
                duration-300

                hover:scale-105
              "
            >
              Buka Jemputan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}