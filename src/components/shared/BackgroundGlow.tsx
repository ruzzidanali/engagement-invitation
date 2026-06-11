export default function BackgroundGlow() {
  return (
    <>
      {/* Top Left Blue Glow */}
      <div
        className="
            fixed
            -top-32
            -left-32

            w-[450px]
            h-[450px]

            bg-[#9fdcff]

            rounded-full

            opacity-70

            blur-[120px]

            pointer-events-none
            z-0
        "
      />

      {/* Top Right Pink Glow */}
      <div
        className="
            fixed
            top-[25%]
            -right-32

            w-[400px]
            h-[400px]

            bg-[#ffcfe0]

            rounded-full

            opacity-60

            blur-[120px]

            pointer-events-none
            z-0
        "
      />

      {/* Middle Teal Glow */}
      <div
        className="
            fixed
            top-[50%]
            left-[50%]

            -translate-x-1/2
            -translate-y-1/2

            w-[500px]
            h-[500px]

            bg-[#2f9da3]

            rounded-full

            opacity-25

            blur-[150px]

            pointer-events-none
            z-0
        "
      />

      {/* Bottom Green Glow */}
      <div
        className="
            fixed
            bottom-32
            left-[25%]

            w-[400px]
            h-[400px]

            bg-[#c8f0d7]

            rounded-full

            opacity-60

            blur-[120px]

            pointer-events-none
            z-0
        "
      />
    </>
  );
}
