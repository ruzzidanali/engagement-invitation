import { useState } from "react";

import Cover from "./components/Cover";
import Couple from "./components/Couple";
import EventDetails from "./components/EventDetails";
import Countdown from "./components/Countdown";
import MusicPlayer from "./components/MusicPlayer";
import SectionDivider from "./components/SectionDivider";
import Location from "./components/Location";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Cover
        onOpen={() => setOpened(true)}
      />

      <Couple />

      <SectionDivider />

      <EventDetails />

      <Location />

      <SectionDivider />

      <Countdown />

      <MusicPlayer opened={opened} />
    </>
  );
}

export default App;