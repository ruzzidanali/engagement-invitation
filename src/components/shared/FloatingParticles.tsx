const particles = [
  { left: "5%", delay: "0s", duration: "8s", size: "8px" },
  { left: "10%", delay: "2s", duration: "10s", size: "12px" },
  { left: "15%", delay: "4s", duration: "9s", size: "6px" },
  { left: "20%", delay: "1s", duration: "12s", size: "10px" },
  { left: "25%", delay: "5s", duration: "8s", size: "7px" },
  { left: "30%", delay: "3s", duration: "11s", size: "14px" },
  { left: "35%", delay: "6s", duration: "9s", size: "9px" },
  { left: "40%", delay: "2s", duration: "10s", size: "11px" },
  { left: "45%", delay: "7s", duration: "8s", size: "6px" },
  { left: "50%", delay: "1s", duration: "12s", size: "13px" },

  { left: "55%", delay: "4s", duration: "9s", size: "8px" },
  { left: "60%", delay: "2s", duration: "10s", size: "12px" },
  { left: "65%", delay: "5s", duration: "8s", size: "7px" },
  { left: "70%", delay: "3s", duration: "11s", size: "10px" },
  { left: "75%", delay: "6s", duration: "9s", size: "14px" },
  { left: "80%", delay: "1s", duration: "10s", size: "9px" },
  { left: "85%", delay: "7s", duration: "8s", size: "6px" },
  { left: "90%", delay: "3s", duration: "12s", size: "11px" },
  { left: "95%", delay: "5s", duration: "9s", size: "8px" },
  { left: "98%", delay: "2s", duration: "10s", size: "13px" },
];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </>
  );
}