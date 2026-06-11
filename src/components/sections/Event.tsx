import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import { invitationData } from "../../data/invitationData";
import { useCountdown } from "../../hooks/useCountdown";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";

import { CalendarPlus } from "lucide-react";
import { downloadCalendar} from "../../utils/calendar";

export default function Event() {
  const countdown = useCountdown(
    invitationData.event.countdownDate
  );

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
              <CalendarDays
                size={38}
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
              Butiran Majlis
            </p>
          </motion.div>

          {/* Date */}
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              mt-6

              text-center

              text-[46px]
              sm:text-[60px]

              leading-none

              drop-shadow-[0_4px_10px_rgba(47,157,163,0.15)]

              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            {invitationData.event.date}
          </motion.h2>

          {/* Time */}
          <p
            className="
              mt-2

              text-center

              text-lg

              tracking-[0.3px]

              text-gray-600
            "
          >
            {invitationData.event.time}
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

          {/* Venue */}
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
              Lokasi Majlis
            </p>

            <h3
              className="
                mt-3

                text-xl
                sm:text-2xl

                font-semibold

                text-[#1f6f75]
              "
            >
              {invitationData.event.venue}
            </h3>

            <div
              className="
                mt-4

                space-y-1

                text-gray-600
              "
            >
              {invitationData.event.address.map(
                (line, index) => (
                  <p key={index}>{line}</p>
                )
              )}
            </div>
          </div>

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

          {/* Countdown */}
          <p
            className="
              text-center

              text-sm

              uppercase

              tracking-[6px]
              text-[11px]
              font-medium

              text-[#8b7b68]
            "
          >
            Menghitung Hari Bahagia
          </p>

          <div className="mt-6">
            <CountdownGrid countdown={countdown} />
            <div className="mt-8 text-center">
              <button
                onClick={downloadCalendar}
                className="
                  inline-flex
                  items-center
                  gap-3

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
                <CalendarPlus size={20} />
                Tambah ke Kalendar
              </button>
            </div>
          </div>
        </InvitationCard>
      </div>
    </section>
  );
}

function CountdownGrid({
  countdown,
}: {
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}) {
  return (
    <div
      className="
        grid
        grid-cols-4

        gap-3
      "
    >
      <CountdownItem
        value={countdown.days}
        label="Hari"
      />

      <CountdownItem
        value={countdown.hours}
        label="Jam"
      />

      <CountdownItem
        value={countdown.minutes}
        label="Minit"
      />

      <CountdownItem
        value={countdown.seconds}
        label="Saat"
      />
    </div>
  );
}

function CountdownItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      className="
        rounded-2xl

        bg-[#eef6f8]

        border
        border-white

        py-5

        text-center

        shadow-sm
      "
    >
      <div
        className="
          text-3xl
          sm:text-4xl

          font-bold

          text-[#1f6f75]
        "
      >
        {value}
      </div>

      <div
        className="
          mt-2

          text-[10px]

          uppercase

          tracking-[2px]

          text-gray-500
        "
      >
        {label}
      </div>
    </motion.div>
  );
}