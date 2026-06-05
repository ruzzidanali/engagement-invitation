import { motion } from "framer-motion";
import { invitationData } from "../../data/invitationData";

export default function Gift() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("Nombor akaun berjaya disalin.");
    } catch {
      alert("Gagal menyalin nombor akaun.");
    }
  };

  return (
    <section className="px-6 py-16">
      <div
        className="
          max-w-4xl
          mx-auto
          text-center
        "
      >
        {/* Title */}
        <motion.p
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
            duration: 0.8,
          }}
          className="
            uppercase

            tracking-[4px]

            text-sm

            text-[#8b7b68]
          "
        >
          Hadiah
        </motion.p>

        <motion.h2
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
            duration: 1,
          }}
          className="
            mt-3

            text-[42px]

            text-[#1f6f75]
          "
          style={{
            fontFamily: "Great Vibes",
          }}
        >
          Tanda Kasih
        </motion.h2>

        <p
          className="
            mt-4

            text-gray-600

            max-w-xl
            mx-auto

            leading-7
          "
        >
          Kehadiran dan doa restu anda sudah cukup bermakna.
          Namun sekiranya ingin memberikan tanda kasih,
          anda boleh menggunakan maklumat berikut.
        </p>

        {/* Accounts */}
        <div
          className="
            mt-10

            grid
            gap-5
          "
        >
          {invitationData.gift.accounts.map(
            (account, index) => (
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
                  duration: 0.8,
                }}
                className="
                  rounded-[30px]

                  bg-white

                  p-8

                  shadow-lg
                "
              >
                <h3
                  className="
                    text-xl

                    font-semibold

                    text-[#1f6f75]
                  "
                >
                  {account.bank}
                </h3>

                <p
                  className="
                    mt-4

                    text-2xl

                    font-bold

                    tracking-wider
                  "
                >
                  {account.accountNumber}
                </p>

                <p
                  className="
                    mt-2

                    text-gray-500
                  "
                >
                  {account.accountName}
                </p>

                <button
                  onClick={() =>
                    copyToClipboard(
                      account.accountNumber
                    )
                  }
                  className="
                    mt-6

                    rounded-full

                    bg-[#1f6f75]

                    px-6
                    py-3

                    text-white

                    transition

                    hover:scale-105
                  "
                >
                  Salin Nombor Akaun
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}