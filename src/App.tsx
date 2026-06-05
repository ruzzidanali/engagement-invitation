import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Cover from "./components/sections/Cover";
import InvitationContent from "./components/InvitationContent";
import MusicPlayer from "./components/shared/MusicPlayer";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!opened && <Cover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && <InvitationContent />}

      <MusicPlayer opened={opened} />
    </>
  );
}

export default App;
