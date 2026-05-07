import { useEffect, useState } from "react";

interface Mote {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

export function VirusBackground() {
  const [motes, setMotes] = useState<Mote[]>([]);

  useEffect(() => {
    const items: Mote[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 8,
      duration: Math.random() * 14 + 18,
      delay: Math.random() * 12,
      drift: Math.random() * 80 - 40,
    }));
    setMotes(items);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.22 0.05 145 / 0.45), transparent 60%), radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.22 0.06 90 / 0.35), transparent 60%)",
        }}
      />

      {/* Two soft drifting glow orbs (one gold, one virus green) */}
      <div
        className="absolute rounded-full"
        style={{
          left: "8%",
          top: "12%",
          width: 480,
          height: 480,
          background: "oklch(0.85 0.18 90 / 0.12)",
          filter: "blur(140px)",
          animation: "drift-glow 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          right: "6%",
          top: "55%",
          width: 520,
          height: 520,
          background: "oklch(0.65 0.2 145 / 0.14)",
          filter: "blur(160px)",
          animation: "drift-glow 26s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          left: "50%",
          bottom: "8%",
          width: 380,
          height: 380,
          transform: "translateX(-50%)",
          background: "oklch(0.65 0.2 145 / 0.1)",
          filter: "blur(130px)",
          animation: "pulse-glow 11s ease-in-out infinite",
        }}
      />

      {/* Faint virus particle SVG pattern */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.05 }}
      >
        <defs>
          <pattern
            id="virus-pattern"
            x="0"
            y="0"
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <g stroke="oklch(0.65 0.2 145)" strokeWidth="1" fill="none">
              <circle cx="70" cy="70" r="14" />
              <line x1="70" y1="48" x2="70" y2="32" />
              <line x1="70" y1="92" x2="70" y2="108" />
              <line x1="48" y1="70" x2="32" y2="70" />
              <line x1="92" y1="70" x2="108" y2="70" />
              <line x1="55" y1="55" x2="42" y2="42" />
              <line x1="85" y1="55" x2="98" y2="42" />
              <line x1="55" y1="85" x2="42" y2="98" />
              <line x1="85" y1="85" x2="98" y2="98" />
            </g>
            <g fill="oklch(0.65 0.2 145)">
              <circle cx="70" cy="32" r="2" />
              <circle cx="70" cy="108" r="2" />
              <circle cx="32" cy="70" r="2" />
              <circle cx="108" cy="70" r="2" />
              <circle cx="42" cy="42" r="1.5" />
              <circle cx="98" cy="42" r="1.5" />
              <circle cx="42" cy="98" r="1.5" />
              <circle cx="98" cy="98" r="1.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#virus-pattern)" />
      </svg>

      {/* Floating glowing virus motes */}
      {motes.map((m) => (
        <div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            background:
              "radial-gradient(circle, oklch(0.65 0.2 145 / 0.5) 0%, oklch(0.65 0.2 145 / 0.1) 55%, transparent 100%)",
            boxShadow: `0 0 ${m.size * 1.8}px oklch(0.65 0.2 145 / 0.3)`,
            animation: `virus-drift ${m.duration}s ease-in-out ${m.delay}s infinite`,
            ["--drift" as string]: `${m.drift}px`,
          }}
        />
      ))}

      {/* Vignette to keep content legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, oklch(0.16 0.02 260 / 0.55) 100%)",
        }}
      />
    </div>
  );
}
