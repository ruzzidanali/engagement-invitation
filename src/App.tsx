import { useState } from "react";

import Cover from "./components/sections/Cover";
import Couple from "./components/sections/Couple";
import EventDetails from "./components/sections/EventDetails";
import Countdown from "./components/sections/Countdown";
import MusicPlayer from "./components/shared/MusicPlayer";
import SectionDivider from "./components/shared/SectionDivider";
import Location from "./components/sections/Location";
import Closing from "./components/sections/Closing";

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
