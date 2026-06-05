import { motion } from "framer-motion";
import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      attendance,
      guests,
      message,
    });

    alert("Terima kasih atas RSVP anda.");
  };

  return (
    <section className="px-6 py-16">
      <div
        className="
          max-w-3xl
          mx-auto
          text-center
        "
      >
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            uppercase
            tracking-[4px]
            text-sm
            text-[#8b7b68]
          "
        >
          RSVP
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            mt-3

            text-[42px]

            text-[#1f6f75]
          "
          style={{
            fontFamily: "Great Vibes",
          }}
        >
          Konfirmasi Kehadiran
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="
            mt-10

            rounded-[35px]

            bg-white

            p-8

            shadow-lg

            text-left
          "
        >
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
              Nama
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Masukkan nama"
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
          <div className="mt-6">
            <label
              className="
                block
                mb-3

                font-medium

                text-[#1f6f75]
              "
            >
              Kehadiran
            </label>

            <div className="flex flex-wrap gap-3">
              {[
                "Hadir",
                "Tidak Hadir",
                "Mungkin",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setAttendance(item)
                  }
                  className={`
                    rounded-full

                    px-5
                    py-2

                    border

                    transition

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
          <div className="mt-6">
            <label
              className="
                block
                mb-2

                font-medium

                text-[#1f6f75]
              "
            >
              Bilangan Tetamu
            </label>

            <select
              value={guests}
              onChange={(e) =>
                setGuests(e.target.value)
              }
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

          {/* Wish */}
          <div className="mt-6">
            <label
              className="
                block
                mb-2

                font-medium

                text-[#1f6f75]
              "
            >
              Ucapan
            </label>

            <textarea
              rows={5}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Tulis ucapan anda..."
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
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="
                rounded-full

                bg-[#1f6f75]

                px-8
                py-3

                text-white

                font-medium

                transition

                hover:scale-105
              "
            >
              Hantar RSVP
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}