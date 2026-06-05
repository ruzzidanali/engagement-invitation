import mountainsWaterfall from "../../assets/backgrounds/mountains-waterfall.png";

export default function SectionBackground() {
  return (
    <>
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0

          bg-center
          bg-cover
          bg-fixed

          opacity-100
        "
        style={{
          backgroundImage: `url(${mountainsWaterfall})`,
        }}
      />

      {/* Soft White Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-white/90
          backdrop-blur-[2px]
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/40
          via-transparent
          to-white/50
        "
      />
    </>
  );
}