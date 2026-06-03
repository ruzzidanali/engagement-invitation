import { useEffect, useState } from "react";
import { invitationData } from "../data/invitationData";
import AnimatedSection from "./AnimatedSection";

export default function Countdown() {
  const targetDate = new Date(
    invitationData.event.countdownDate
  );

  const calculateTimeLeft = () => {
    const difference =
      targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      className="
        min-h-screen

        bg-gradient-to-b
        from-[#dcefff]
        via-[#f8fcff]
        to-[#ffffff]

        px-6
        py-24
      "
    >
      <AnimatedSection>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              text-[#6d6258]
            "
          >
            Menanti Hari Bahagia
          </p>

          <h2
            className="
              mt-4
              text-[56px]
              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            Countdown
          </h2>

          <div
            className="
              mt-16

              grid
              grid-cols-2
              md:grid-cols-4

              gap-6
            "
          >
            <CountdownCard value={timeLeft.days} label="Hari" />
            <CountdownCard value={timeLeft.hours} label="Jam" />
            <CountdownCard value={timeLeft.minutes} label="Minit" />
            <CountdownCard value={timeLeft.seconds} label="Saat" />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function CountdownCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        rounded-[30px]

        bg-white/80
        backdrop-blur-sm

        border
        border-white

        px-6
        py-8

        shadow-xl
      "
    >
      <div
        className="
          text-5xl
          font-bold
          text-[#1f6f75]
        "
      >
        {value}
      </div>

      <p
        className="
          mt-3
          uppercase
          tracking-[2px]
          text-xs
          text-[#8b7b68]
        "
      >
        {label}
      </p>
    </div>
  );
}