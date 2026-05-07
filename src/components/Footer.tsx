export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 text-center md:grid-cols-3">
        <p className="text-sm font-bold text-primary md:text-left">$UVC</p>
        <div className="flex justify-center gap-6">
          {[
            { label: "X Community", href: "https://x.com/i/communities/2029833193042460801" },
            { label: "Dextools", href: "#" },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.href !== "#" ? "_blank" : undefined} rel={link.href !== "#" ? "noopener noreferrer" : undefined} className="text-sm text-muted-foreground transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground md:text-right">© 2026 Unstable Virus Coin. NFA. DYOR.</p>
      </div>
    </footer>
  );
}
