import { invitationData } from "../../data/invitationData";
import AnimatedSection from "../shared/AnimatedSection";

export default function EventDetails() {
  return (
    <section
      id="event-details"
      className="
        relative
        overflow-hidden

        min-h-screen

        bg-gradient-to-b
        from-[#fdfdfd]
        via-[#f8fcff]
        to-[#dcefff]

        px-6
        py-24
      "
    >
      <AnimatedSection>
        <div
          className="
            max-w-4xl
            mx-auto
            text-center

            bg-white/60
            backdrop-blur-sm

            rounded-[40px]

            px-8
            py-12

            shadow-lg
          "
        >
          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              text-[#6d6258]
            "
          >
            Butiran Majlis
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
            {invitationData.event.title}
          </h2>

          <div className="mt-20">
            <p className="uppercase tracking-[3px] text-xs text-[#8b7b68]">
              Tarikh
            </p>

            <p className="mt-3 text-3xl text-[#1f6f75]">
              {invitationData.event.date}
            </p>
          </div>

          <div className="mt-16">
            <p className="uppercase tracking-[3px] text-xs text-[#8b7b68]">
              Masa
            </p>

            <p className="mt-3 text-3xl text-[#1f6f75]">
              {invitationData.event.time}
            </p>
          </div>

          <div className="mt-16">
            <p className="uppercase tracking-[3px] text-xs text-[#8b7b68]">
              Lokasi
            </p>

            <div className="mt-4 leading-8 text-gray-700">
              {invitationData.event.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>

          <div
            className="
              mt-16
              flex
              flex-col
              gap-4

              sm:flex-row
              sm:justify-center
            "
          >
            <a
              href={invitationData.event.gmap}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-[#2f9da3]
                px-8
                py-4
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Google Maps
            </a>

            <a
              href={invitationData.event.waze}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-[#2f9da3]
                shadow-lg
                border
                border-[#2f9da3]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Waze
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}