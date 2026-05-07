import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Tokenomics } from "@/components/Tokenomics";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "$UNSTABLE - The Most Contagious Memecoin" },
      { name: "description", content: "The virus that spreads gains. No cure. No rug. Just pure viral chaos on the blockchain." },
      { property: "og:title", content: "$UNSTABLE - The Most Contagious Memecoin" },
      { property: "og:description", content: "The virus that spreads gains. No cure. No rug. Just pure viral chaos." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <CTA />
      <Footer />
    </div>
  );
}
