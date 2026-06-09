import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import music from "../../assets/music/music.mp3";

interface MusicPlayerProps {
  opened: boolean;
}

export default function MusicPlayer({ opened }: MusicPlayerProps) {
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
      <audio ref={audioRef} src={music} loop />

      {opened && (
        <button
          onClick={toggleMusic}
          aria-label="Music Player"
          className="
            fixed
            bottom-5
            right-5

            z-[999]

            flex
            items-center
            justify-center

            w-14
            h-14

            rounded-full

            border
            border-white/60

            bg-white/85

            backdrop-blur-md

            shadow-xl

            transition-all
            duration-300

            hover:scale-105
          "
        >
          <div
            className={`
              absolute

              inset-1

              rounded-full

              border
              border-[#2f9da3]/20

              ${playing ? "animate-spin" : ""}
            `}
            style={{
              animationDuration: "8s",
            }}
          />

          {playing ? (
            <Pause
              size={16}
              className="
                relative

                text-[#1f6f75]
              "
            />
          ) : (
            <Play
              size={16}
              className="
                relative

                ml-[2px]

                text-[#1f6f75]
              "
            />
          )}
        </button>
      )}
    </>
  );
}
