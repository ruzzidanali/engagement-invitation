import { useState } from "react";
import { motion } from "framer-motion";
import { Gift as GiftIcon } from "lucide-react";

import { invitationData } from "../../data/invitationData";

import SectionBackground from "../shared/SectionBackground";
import InvitationCard from "../shared/InvitationCard";
// import { text } from "stream/consumers";

export default function Gift() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (
    accountNumber: string
  ) => {
    try {
      await navigator.clipboard.writeText(
        accountNumber
      );

      setCopied(accountNumber);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (err) {
      console.error(err);

      const textArea =
        document.createElement("textarea");

      textArea.value = accountNumber;

      document.body.appendChild(textArea);

      textArea.select();

      document.execCommand("copy");

      document.body.removeChild(textArea);

      setCopied(accountNumber);

      setTimeout(() => {
        setCopied("");
      }, 2000);
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
          {/* Icon */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >
            <div className="flex justify-center">
              <GiftIcon
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
              Tanda kasih
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
              Hadiah
            </h2>

            <p
              className="
                mt-4

                max-w-2xl
                mx-auto

                leading-8

                text-gray-600
              "
            >
              Kehadiran dan doa restu anda sudah cukup bermakna. Namun sekiranya
              ingin memberikan tanda kasih, anda boleh menggunakan maklumat
              berikut.
            </p>
          </motion.div>

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

          {/* Accounts */}
          <div className="space-y-6">
            {invitationData.gift.accounts.map((account, index) => (
              <div
                key={index}
                className="
                    rounded-[24px]

                    border
                    border-[#e6eef0]

                    bg-[#f8fcff]

                    p-6
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

                      tex-[#1f6f75]
                    "
                >
                  {account.accountNumber}
                </p>

                <p
                  className="
                      mt-2

                      text-gray-600
                    "
                >
                  {account.accountName}
                </p>

                <button
                  onClick={() => copyToClipboard(account.accountNumber)}
                  className="
                      mt-6

                      rounded-full

                      bg-[#1f6f75]

                      px-6
                      py-3

                      text-white

                      font-medium

                      transition-all
                      duration-300

                      hover:scale-105
                    "
                >
                  {copied === account.accountNumber
                    ? "Copied ✓"
                    : "Copy Account Number"}
                </button>
              </div>
            ))}
          </div>
        </InvitationCard>
      </div>
    </section>
  );
}
