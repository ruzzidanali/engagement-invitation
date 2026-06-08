import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

import { supabase } from "../../lib/supabase";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";

interface Wish {
  id: number;
  name: string;
  attendance: string;
  guests: string;
  message: string;
  created_at: string;
}

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const fetchWishes = async () => {
      const { data, error } = await supabase
        .from("wishes")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (!error && data) {
        setWishes(data);
      }

      setLoading(false);
    };

    fetchWishes();

    const channel = supabase
      .channel("wishes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "wishes",
        },
        () => {
          fetchWishes();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (paused) return;

    if (wishes.length < 4) return;

    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      container.scrollTop += 1;

      const halfway = container.scrollHeight / 2;

      if (container.scrollTop >= halfway) {
        container.scrollTop = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [paused, wishes]);

  const displayWishes = [...wishes, ...wishes];

  return (
    <section
      className="
        relative
        overflow-hidden

        px-6
        py-12
      "
    >
      <SectionBackground />

      <div
        className="
          relative
          z-10

          max-w-4xl
          mx-auto
        "
      >
        <InvitationCard>
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <MessageCircleHeart
                size={48}
                strokeWidth={1.5}
                className="text-[#1f6f75]"
              />
            </div>

            <p
              className="
                mt-4

                uppercase

                tracking-[4px]

                text-xs

                text-[#8b7b68]
              "
            >
              Doa & Ucapan
            </p>

            <h2
              className="
                mt-4

                text-[42px]
                sm:text-[52px]

                text-[#1f6f75]
              "
              style={{
                fontFamily: "Great Vibes",
              }}
            >
              Ucapan Tetamu
            </h2>

            <p
              className="
                mt-4

                max-w-xl
                mx-auto

                leading-8

                text-gray-600
              "
            >
              Terima kasih atas doa dan ucapan yang diberikan kepada kami.
            </p>
          </div>

          {/* Divider */}
          <div
            className="
              mx-auto
              my-8

              h-px
              w-24

              bg-[#2f9da3]/30
            "
          />

          {/* Loading */}
          {loading && (
            <div className="text-center">
              <p className="text-gray-500">Memuatkan ucapan...</p>
            </div>
          )}

          {/* Empty */}
          {!loading && wishes.length === 0 && (
            <div className="text-center">
              <p className="text-gray-500">Belum ada ucapan diterima.</p>
            </div>
          )}

          {/* Wishes */}
          {!loading && wishes.length > 0 && (
            <div
              ref={scrollRef}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              className="
                  mt-8

                  max-h-[500px]

                  overflow-y-auto

                  hide-scrollbar

                  space-y-5

                  pr-2
                "
            >
              {displayWishes.map((wish, index) => (
                <motion.div
                  key={`${wish.id}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                        rounded-[24px]

                        border
                        border-[#e6eef0]

                        bg-[#f8fcff]

                        p-6
                      "
                >
                  <div
                    className="
                          flex

                          items-center
                          justify-between

                          gap-4

                          flex-wrap
                        "
                  >
                    <div>
                      <h3
                        className="
                              font-semibold

                              text-[#1f6f75]
                            "
                      >
                        {wish.name}
                      </h3>

                      <p
                        className="
                              text-sm

                              text-gray-500
                            "
                      >
                        {new Date(wish.created_at).toLocaleDateString("ms-MY", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {wish.message && (
                    <p
                      className="
                            mt-4

                            leading-7

                            text-gray-600
                          "
                    >
                      {wish.message}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </InvitationCard>
      </div>
    </section>
  );
}
