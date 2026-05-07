const slices = [
  { label: "Virus", pct: 100, color: "bg-primary" },
];

export function Tokenomics() {
  return (
    <section id="buy" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Tokenomics</p>
          <h2 className="text-glow-gold text-3xl font-black text-primary md:text-5xl">
            The Viral Blueprint
          </h2>
        </div>

        {/* Supply info */}
        <div className="glass-card mx-auto mb-10 max-w-md rounded-2xl p-8 text-center">
          <p className="text-sm font-medium text-muted-foreground">Total Supply</p>
          <p className="text-glow-gold mt-1 text-4xl font-black text-primary">1,000,000,000</p>
          <p className="mt-1 text-lg font-bold text-accent">$UVC</p>
        </div>

        {/* Bar chart */}
        <div className="space-y-4">
          {slices.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="w-24 text-right text-sm font-medium text-muted-foreground">{s.label}</span>
              <div className="flex-1 overflow-hidden rounded-full bg-card">
                <div
                  className={`${s.color} h-8 rounded-full transition-all duration-700`}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
              <span className="w-12 text-sm font-bold text-foreground">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
