const features = [
  {
    emoji: "🧬",
    title: "Self-Mutating",
    description: "Every transaction triggers a micro-mutation in the tokenomics. It's alive.",
  },
  {
    emoji: "🦠",
    title: "Hyper Contagious",
    description: "Referral system that spreads like a real virus. Infect your friends.",
  },
  {
    emoji: "📈",
    title: "Unstable Charts",
    description: "Volatility is the feature, not the bug. Embrace the chaos.",
  },
  {
    emoji: "🔒",
    title: "Liquidity Locked",
    description: "LP locked. Contract renounced. The only risk is not buying.",
  },
  {
    emoji: "🤝",
    title: "Community Driven",
    description: "No VCs. No insiders. Just degens who believe in the virus.",
  },
  {
    emoji: "🔥",
    title: "Deflationary Burns",
    description: "Tokens get burned every epoch. Supply shrinks. Pressure builds.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Symptoms</p>
          <h2 className="text-glow-gold text-3xl font-black text-primary md:text-5xl">
            Side Effects May Include
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-accent/50"
            >
              <span className="mb-4 block text-4xl transition-transform duration-300 group-hover:scale-110" style={{ animation: "wiggle 2s ease-in-out infinite" }}>
                {f.emoji}
              </span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
