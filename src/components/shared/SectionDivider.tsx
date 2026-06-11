import { Flower2 } from "lucide-react";

export default function SectionDivider() {
  return (
    <div
      className="
        flex 
        items-center
        justify-center

        py-6

        px-10
      "
    >
      <div
        className="
          h-px
          flex-1

          bg-gradient-to-r
          from-transparent
          via-[#dcefff]
          to-[#2f9da3]/40
        "
      />

      <Flower2
        size={22}
        strokeWidth={1.5}
        className="
          mx-4

          text-[#2f9da3]

          drop-shadow-[0_0_8px_rgba(47,157,163,0.3)]
        "
      />

      <div
        className="
          h-px
          flex-1

          bg-gradient-to-1
          from-transparent
          via-[#f8dce8]
          to-[#b7d8c3]/50
        "
      />
    </div>
  );
}
