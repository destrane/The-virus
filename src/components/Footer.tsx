export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-bold text-primary">$UVC</p>
        <div className="flex gap-6">
          {[
            { label: "X Community", href: "https://x.com/i/communities/2029833193042460801" },
            { label: "Dextools", href: "#" },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.href !== "#" ? "_blank" : undefined} rel={link.href !== "#" ? "noopener noreferrer" : undefined} className="text-sm text-muted-foreground transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Unstable Virus Coin. NFA. DYOR.</p>
      </div>
    </footer>
  );
}
