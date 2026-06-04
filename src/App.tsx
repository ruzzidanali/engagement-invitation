import { useState } from "react";

import Cover from "./components/Cover";
import Couple from "./components/Couple";
import EventDetails from "./components/EventDetails";
import Countdown from "./components/Countdown";
import MusicPlayer from "./components/MusicPlayer";
import SectionDivider from "./components/SectionDivider";
import Location from "./components/Location";
import Closing from "./components/Closing";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Cover onOpen={() => setOpened(true)} />

      <Couple />

      <SectionDivider />

      <EventDetails />

      <SectionDivider />

      <Location />

      <SectionDivider />

      <Countdown />

      <SectionDivider />

      <Closing />

      <MusicPlayer opened={opened} />
    </>
  );
}

export default App;
