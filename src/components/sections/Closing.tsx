import logo from "../assets/logo.png";
import { invitationData } from "../../data/invitationData";
import AnimatedSection from "../shared/AnimatedSection";

export default function Closing() {
  return (
    <section
      id="closing"
      className="
        min-h-screen

        bg-gradient-to-b
        from-[#ffffff]
        via-[#f8fcff]
        to-[#dcefff]

        px-6
        py-24

        flex
        items-center
      "
    >
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={logo}
            alt="Logo"
            className="
              w-20
              mx-auto
            "
          />

          <h2
            className="
              mt-8
              text-[60px]
              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            {invitationData.closing.title}
          </h2>

          <p
            className="
              mt-8
              leading-8
              text-gray-600
            "
          >
            {invitationData.closing.message}
          </p>

          <div
            className="
              mt-12

              italic

              leading-8

              text-[#2f9da3]
            "
          >
            "{invitationData.closing.verse}"
          </div>

          <p
            className="
              mt-4
              text-sm
              text-gray-500
            "
          >
            {invitationData.closing.source}
          </p>

          <div className="mt-16">
            <p
              className="
                text-[50px]
                text-[#1f6f75]
              "
              style={{
                fontFamily: "Great Vibes",
              }}
            >
              {invitationData.bride.firstName}
            </p>

            <p
              className="
                text-xl
                text-[#8b7b68]
              "
            >
              &
            </p>

            <p
              className="
                text-[50px]
                text-[#1f6f75]
              "
              style={{
                fontFamily: "Great Vibes",
              }}
            >
              {invitationData.groom.firstName}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}