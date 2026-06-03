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

        bg-gradient-to-b
        from-[#ffffff]
        via-[#f8fcff]
        to-[#fdfdfd]

        px-6
        py-24
      "
    >
      {/* Decorative Background */}
      <div
        className="
          absolute
          top-0
          left-0

          w-64
          h-64

          rounded-full

          bg-[#dcefff]

          blur-3xl

          opacity-30
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-64
          h-64

          rounded-full

          bg-[#f8dce8]

          blur-3xl

          opacity-30
        "
      />

      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            className="
              uppercase
              tracking-[4px]
              text-sm
              text-[#6d6258]
            "
          >
            Pasangan
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
            {invitationData.bride.firstName} &{" "}
            {invitationData.groom.firstName}
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              mx-auto
              leading-8
              text-gray-600
            "
          >
            Dengan penuh kesyukuran ke hadrat Allah SWT,
            kami menjemput Dato' / Datin / Tuan / Puan /
            Encik / Cik ke majlis pertunangan kami.
          </p>

          {/* Bride */}
          <div className="mt-20">
            <p className="uppercase tracking-[3px] text-xs text-[#8b7b68]">
              Pihak Perempuan
            </p>

            <h3
              className="
                mt-5
                text-[42px]
                text-[#1f6f75]
              "
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              {invitationData.bride.fullName}
            </h3>

            <div className="mt-8 space-y-2">
              <p className="text-gray-500">
                Anak kepada
              </p>

              <p className="font-medium">
                {invitationData.bride.father}
              </p>

              <p>&</p>

              <p className="font-medium">
                {invitationData.bride.mother}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-20">
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

          {/* Groom */}
          <div>
            <p className="uppercase tracking-[3px] text-xs text-[#8b7b68]">
              Pihak Lelaki
            </p>

            <h3
              className="
                mt-5
                text-[42px]
                text-[#1f6f75]
              "
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              {invitationData.groom.fullName}
            </h3>

            <div className="mt-8 space-y-2">
              <p className="text-gray-500">
                Anak kepada
              </p>

              <p className="font-medium">
                {invitationData.groom.father}
              </p>

              <p>&</p>

              <p className="font-medium">
                {invitationData.groom.mother}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}