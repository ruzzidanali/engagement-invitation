import Bismillah from "./sections/Bismillah";
import Couple from "./sections/Couple";
import Event from "./sections/Event";
import Location from "./sections/Location";
// import Gift from "./sections/Gift";
import RSVP from "./sections/RSVP";
import Wishes from "./sections/Wishes";
import Closing from "./sections/Closing";
import FloatingParticles from "./shared/FloatingParticles";
import SectionDivider from "./shared/SectionDivider";
import BackgroundGlow from "./shared/BackgroundGlow";

export default function InvitationContent() {
  return (
    <main className="relative bg-[#eef6f8] overflow-hidden">
      <BackgroundGlow />
      <FloatingParticles />

      <div className="relative z-10">
        <Bismillah />
        <SectionDivider />

        <Couple />
        <SectionDivider />

        <Event />
        <SectionDivider />

        <Location />
        <SectionDivider />

        {/* <Gift /> */}

        <RSVP />
        <SectionDivider />

        <Wishes />
        <SectionDivider />

        <Closing />
      </div>
    </main>
  );
}
