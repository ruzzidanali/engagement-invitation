import { invitationData } from "../data/invitationData";
import AnimatedSection from "./AnimatedSection";

export default function Location() {
  const { event } = invitationData;

  return (
    <section
      id="location"
      className="
        min-h-screen

        bg-gradient-to-b
        from-[#ffffff]
        via-[#f8fcff]
        to-[#fdfdfd]

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
            Lokasi Majlis
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
            Jumpa Di Sini
          </h2>

          {/* Embedded Map */}
          <div
            className="
              mt-12

              overflow-hidden
              rounded-[30px]

              shadow-xl
            "
          >
            <iframe
              title="Location Map"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${event.coordinates.lat},${event.coordinates.lng}&z=16&output=embed`}
            />
          </div>

          {/* Address */}
          <div className="mt-10">
            {event.address.map((line) => (
              <div key={line} className="text-gray-700 leading-8">
                {line}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div
            className="
              mt-10

              flex
              flex-col
              gap-4

              sm:flex-row
              sm:justify-center
            "
          >
            <a
              href={event.gmap}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-[#2f9da3]
                px-8
                py-4
                text-white
                shadow-lg
              "
            >
              Google Maps
            </a>

            <a
              href={event.waze}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                border
                border-[#2f9da3]

                bg-white

                px-8
                py-4

                text-[#2f9da3]

                shadow-lg
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
