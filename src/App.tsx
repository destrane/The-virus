import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Tokenomics } from "@/components/Tokenomics";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { VirusBackground } from "@/components/VirusBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <VirusBackground />
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <CTA />
      <Footer />
    </div>
  );
}
