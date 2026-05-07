import logo from "@/assets/logo.png";

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="glass-card glow-gold mx-auto max-w-3xl rounded-3xl p-12 text-center">
        <img src={logo} alt="" className="mx-auto mb-6 h-20 w-20" style={{ animation: "wiggle 2s ease-in-out infinite" }} />
        <h2 className="text-glow-gold mb-4 text-3xl font-black text-primary md:text-4xl">
          Get Infected Now
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground">
          Join thousands of degens who already caught the virus. The only way out is up.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95"
          >
            Buy on DEX
          </a>
          <a
            href="https://x.com/i/communities/2029833193042460801"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-accent bg-accent/10 px-8 py-3.5 text-sm font-bold text-accent transition-all hover:scale-105 hover:bg-accent/20 active:scale-95"
          >
            Join X Community
          </a>
        </div>
      </div>
    </section>
  );
}
