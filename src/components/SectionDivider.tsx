export default function SectionDivider() {
  return (
    <div
      className="
        flex
        items-center
        justify-center

        py-10

        bg-[#f8fcff]
      "
    >
      <div
        className="
          h-[1px]
          w-20

          bg-[#b7d8c3]
        "
      />

      <div
        className="
          mx-5

          text-[#2f9da3]
          text-4xl
        "
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        HR
      </div>

      <div
        className="
          h-[1px]
          w-20

          bg-[#b7d8c3]
        "
      />
    </div>
  );
}