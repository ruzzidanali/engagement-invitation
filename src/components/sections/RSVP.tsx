import { useState } from "react";
// import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

import { supabase } from "../../lib/supabase";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Sila masukkan nama.");
      return;
    }

    if (!attendance) {
      alert("Sila pilih status kehadiran.");
      return;
    }

    try {
      setLoading(true);

      // Save to Supabase (MAIN DATABASE)
      const { error } = await supabase.from("wishes").insert({
        name,
        attendance,
        guests,
        message,
      });

      if (error) {
        throw error;
      }

      // Save to Google Sheet (OPTIONAL)
      try {
        const response = await fetch(
          import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK,
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              attendance,
              guests,
              message,
              created_at: new Date().toISOString(),
            }),
          },
        );

        console.log("Google Sheet:", response.status);
      } catch (sheetError) {
        console.error("Google Sheet Error:", sheetError);

        // Don't fail RSVP if Google Sheet fails
      }

      setSuccess(true);

      setName("");
      setAttendance("");
      setGuests("1");
      setMessage("");

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Supabase Error:", error);

      alert("Gagal menghantar pengesahan. Sila cuba lagi.");
    } finally {
      setLoading(false);
    }
  };

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
              <HeartHandshake
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
              RSVP
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
              Pengesahan Kehadiran
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
              Mohon sahkan kehadiran anda bagi memudahkan urusan persiapan
              majlis.
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                className="
                  block
                  mb-2

                  font-medium

                  text-[#1f6f75]
                "
              >
                Nama Tetamu
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama penuh"
                className="
                  w-full

                  rounded-xl

                  border

                  px-4
                  py-3

                  outline-none

                  focus:border-[#1f6f75]
                "
              />
            </div>

            {/* Attendance */}
            <div>
              <label
                className="
                  block
                  mb-3

                  font-medium

                  text-[#1f6f75]
                "
              >
                Status Kehadiran
              </label>

              <div className="flex flex-wrap gap-3">
                {["Hadir", "Belum Pasti", "Tidak Hadir"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setAttendance(item)}
                    className={`
                      rounded-full

                      px-5
                      py-2

                      border

                      transition-all

                      ${
                        attendance === item
                          ? "bg-[#1f6f75] text-white border-[#1f6f75]"
                          : "bg-white text-gray-700"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests */}
            <div>
              <label
                className="
                  block
                  mb-2

                  font-medium

                  text-[#1f6f75]
                "
              >
                Bilangan Kehadiran
              </label>

              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="
                  w-full

                  rounded-xl

                  border

                  px-4
                  py-3

                  outline-none

                  focus:border-[#1f6f75]
                "
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                className="
                  block
                  mb-2

                  font-medium

                  text-[#1f6f75]
                "
              >
                Ucapan & Doa
              </label>

              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tinggalkan ucapan dan doa buat kami..."
                className="
                  w-full

                  rounded-xl

                  border

                  px-4
                  py-3

                  outline-none

                  resize-none

                  focus:border-[#1f6f75]
                "
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="
                  rounded-full

                  bg-[#1f6f75]

                  px-8
                  py-3

                  text-white

                  font-medium

                  transition-all
                  duration-300

                  hover:scale-105

                  disabled:opacity-50
                "
              >
                {loading ? "Menghantar..." : "Hantar Pengesahan"}
              </button>

              {success && (
                <p
                  className="
                    mt-4

                    text-green-600
                  "
                >
                  RSVP berjaya dihantar ✓
                </p>
              )}
            </div>
          </form>
        </InvitationCard>
      </div>
    </section>
  );
}
