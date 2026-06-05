import { motion } from "framer-motion";

const wishes = [
  {
    name: "Ahmad Farhan",
    attendance: "Hadir",
    message:
      "Tahniah atas pertunangan kalian. Semoga dipermudahkan segala urusan sehingga ke jinjang pelamin.",
  },
  {
    name: "Nurul Ain",
    attendance: "Hadir",
    message:
      "Semoga berbahagia dan sentiasa dalam rahmat Allah SWT.",
  },
  {
    name: "Hakim",
    attendance: "Mungkin",
    message:
      "InsyaAllah akan cuba hadir. Tahniah buat kedua-dua keluarga.",
  },
];

export default function Wishes() {
  return (
    <section className="px-6 py-16">
      <div
        className="
          max-w-4xl
          mx-auto
        "
      >
        {/* Title */}
        <motion.div
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
          className="text-center"
        >
          <p
            className="
              uppercase

              tracking-[4px]

              text-sm

              text-[#8b7b68]
            "
          >
            Ucapan
          </p>

          <h2
            className="
              mt-3

              text-[42px]

              text-[#1f6f75]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            Doa & Ucapan
          </h2>
        </motion.div>

        {/* Wish Cards */}
        <div className="mt-10 space-y-5">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                rounded-[30px]

                bg-white

                p-6

                shadow-lg
              "
            >
              <div
                className="
                  flex

                  items-center
                  justify-between

                  gap-4
                "
              >
                <h3
                  className="
                    font-semibold

                    text-[#1f6f75]
                  "
                >
                  {wish.name}
                </h3>

                <span
                  className="
                    rounded-full

                    bg-[#eef6f8]

                    px-4
                    py-1

                    text-xs

                    text-[#1f6f75]
                  "
                >
                  {wish.attendance}
                </span>
              </div>

              <p
                className="
                  mt-4

                  leading-7

                  text-gray-600
                "
              >
                {wish.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}