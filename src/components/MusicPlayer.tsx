import { useEffect, useRef, useState } from "react";

import music from "../assets/music/music.mp3";

interface MusicPlayerProps {
  opened: boolean;
}

export default function MusicPlayer({
  opened,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!opened || !audioRef.current) return;

    const audio = audioRef.current;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch((err) => {
        console.log("Audio autoplay blocked:", err);
      });
  }, [opened]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
      />

      {opened && (
        <button
          onClick={toggleMusic}
          className="
            fixed
            bottom-6
            right-6

            z-50

            w-14
            h-14

            rounded-full

            bg-[#2f9da3]
            text-white

            shadow-xl

            flex
            items-center
            justify-center

            hover:scale-110

            transition-all
            duration-300
          "
        >
          {playing ? "♫" : "▶"}
        </button>
      )}
    </>
  );
}