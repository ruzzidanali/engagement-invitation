export default function SectionDivider() {
  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center gap-4">
        <div className="h-px w-16 bg-[#b7d8c3]" />

        <span
          className="text-4xl text-[#2f9da3]"
          style={{
            fontFamily: "Great Vibes",
          }}
        >
          ❦
        </span>
        <div className="h-px w-16 bg-[#b7d8c3]" />
      </div>
    </div>
  );
}
