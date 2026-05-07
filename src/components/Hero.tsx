import { useState } from "react";
import logo from "@/assets/logo.png";
import { VirusParticles } from "./VirusParticle";

const CA = "GDuAA4A4sLAhhzyXHh8dPps3QoQs5GWbp6xq6cSFpump";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [flash, setFlash] = useState(false);

  const handleBuyClick = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setFlash(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setFlash(false), 1000);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      <VirusParticles />
      
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-virus/5 blur-[100px]" />

      {/* Logo */}
      <div className="relative mb-8" style={{ animation: "float 6s ease-in-out infinite" }}>
        <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
        <img src={logo} alt="Unstable Virus Coin Logo" className="relative h-48 w-48 drop-shadow-2xl md:h-64 md:w-64" />
      </div>

      {/* Title */}
      <h1 className="text-glow-gold mb-4 text-center text-5xl font-black tracking-tight text-primary md:text-7xl lg:text-8xl">
        $UVC
      </h1>

      {/* CA - clickable to copy */}
      <button
        onClick={handleBuyClick}
        className={`group mb-2 max-w-lg cursor-pointer rounded-xl border px-4 py-2 text-center font-mono text-xs transition-all duration-300 ${
          flash
            ? "border-primary bg-primary/20 text-primary scale-105 glow-gold"
            : "border-border bg-card/30 text-muted-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
        }`}
      >
        <span className="mr-2 text-[10px] uppercase tracking-wider text-accent">CA</span>
        <span className="break-all">{CA}</span>
        <span className="ml-2 inline-block text-[10px] uppercase tracking-wider">
          {copied ? "✅ Copied!" : "📋 Click to copy"}
        </span>
      </button>

      <p className="mb-2 text-center text-lg font-medium text-accent md:text-xl">
        The Virus That Spreads Gains 🦠
      </p>
      <p className="mb-10 max-w-lg text-center text-sm text-muted-foreground">
        The most contagious memecoin on the blockchain. No cure. No rug. Just pure viral chaos.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleBuyClick}
          className="glow-gold rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg active:scale-95"
        >
          {copied ? "CA Copied! 🦠" : "Buy $UVC"}
        </button>
        <a
          href="#about"
          className="rounded-xl border border-border bg-card/50 px-8 py-3.5 text-sm font-bold text-foreground backdrop-blur transition-all hover:scale-105 hover:border-accent hover:shadow-lg active:scale-95"
        >
          Learn More
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
