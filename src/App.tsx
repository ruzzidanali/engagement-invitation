import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Cover from "./components/sections/Cover";
import InvitationContent from "./components/InvitationContent";
import MusicPlayer from "./components/shared/MusicPlayer";
import LoadingScreen from "./components/shared/LoadingScreen";

function App() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
