import { useEffect, useState } from "react";

interface FloatingVirus {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

export function VirusBackground() {
  const [viruses, setViruses] = useState<FloatingVirus[]>([]);

  useEffect(() => {
    const items: FloatingVirus[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 18 + 10,
      duration: Math.random() * 12 + 14,
      delay: Math.random() * 10,
      drift: Math.random() * 60 - 30,
    }));
    setViruses(items);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep base gradient layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.04_145/0.35),transparent_60%),radial-gradient(ellipse_at_bottom,oklch(0.2_0.06_90/0.25),transparent_55%)]" />

      {/* Pulsing gold + virus blobs */}
      <div
        className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]"
        style={{ animation: "drift-glow 18s ease-in-out infinite" }}
      />
      <div
        className="absolute right-[8%] top-[55%] h-[480px] w-[480px] rounded-full bg-virus/10 blur-[160px]"
        style={{ animation: "drift-glow 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute left-1/2 bottom-[10%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-virus/8 blur-[130px]"
        style={{ animation: "pulse-glow 9s ease-in-out infinite" }}
      />

      {/* Biohazard / virus SVG pattern (very faint) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="virus-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="60" cy="60" r="14" fill="none" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="60" y1="40" x2="60" y2="20" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="60" y1="80" x2="60" y2="100" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="40" y1="60" x2="20" y2="60" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="80" y1="60" x2="100" y2="60" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="46" y1="46" x2="32" y2="32" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="74" y1="46" x2="88" y2="32" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="46" y1="74" x2="32" y2="88" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <line x1="74" y1="74" x2="88" y2="88" stroke="oklch(0.65 0.2 145)" strokeWidth="1.2" />
            <circle cx="60" cy="20" r="2" fill="oklch(0.65 0.2 145)" />
            <circle cx="60" cy="100" r="2" fill="oklch(0.65 0.2 145)" />
            <circle cx="20" cy="60" r="2" fill="oklch(0.65 0.2 145)" />
            <circle cx="100" cy="60" r="2" fill="oklch(0.65 0.2 145)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#virus-pattern)" />
      </svg>

      {/* Floating virus motes drifting across viewport */}
      {viruses.map((v) => (
        <div
          key={v.id}
          className="absolute rounded-full"
          style={{
            left: `${v.x}%`,
            top: `${v.y}%`,
            width: v.size,
            height: v.size,
            background: `radial-gradient(circle, oklch(0.65 0.2 145 / 0.35) 0%, oklch(0.65 0.2 145 / 0.05) 60%, transparent 100%)`,
            boxShadow: `0 0 ${v.size * 1.5}px oklch(0.65 0.2 145 / 0.25)`,
            animation: `virus-drift ${v.duration}s ease-in-out ${v.delay}s infinite`,
            ["--drift" as string]: `${v.drift}px`,
          }}
        />
      ))}

      {/* Vignette to keep content legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.16_0.02_260/0.6)_100%)]" />
    </div>
  );
}
