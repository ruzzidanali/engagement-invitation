import Bismillah from "./sections/Bismillah";
import Couple from "./sections/Couple";
import Event from "./sections/Event";
import Location from "./sections/Location";
import Gift from "./sections/Gift";
import RSVP from "./sections/RSVP";
import Wishes from "./sections/Wishes";
import Closing from "./sections/Closing";

export default function InvitationContent() {
  return (
    <main className="bg-[#eef6f8]">
      <Bismillah />
      <Couple />
      <Event />
      <Location />
      <Gift />
      <RSVP />
      <Wishes />
      <Closing />
    </main>
  );
}
