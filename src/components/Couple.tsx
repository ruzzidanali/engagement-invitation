import { invitationData } from "../data/invitationData";
import AnimatedSection from "./AnimatedSection";

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
      <AnimatedSection>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              text-[#8b7b68]
            "
          >
            Pasangan
          </p>

          <h2
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
          </h2>

          <p
            className="
              mt-8

              max-w-2xl
              mx-auto

              leading-9
              text-gray-600
            "
          >
            Dengan penuh kesyukuran ke hadrat Allah SWT,
            kami menjemput Dato' / Datin / Tuan / Puan /
            Encik / Cik ke majlis pertunangan kami.
          </p>

          {/* Bride Card */}
          <div
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
              <p className="text-gray-500">
                Anak kepada
              </p>

              <p className="mt-3 font-semibold">
                {invitationData.bride.father}
              </p>

              <p className="my-2">&</p>

              <p className="font-semibold">
                {invitationData.bride.mother}
              </p>
            </div>
          </div>

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
          <div
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
              <p className="text-gray-500">
                Anak kepada
              </p>

              <p className="mt-3 font-semibold">
                {invitationData.groom.father}
              </p>

              <p className="my-2">&</p>

              <p className="font-semibold">
                {invitationData.groom.mother}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}