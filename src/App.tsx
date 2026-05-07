import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Tokenomics } from "@/components/Tokenomics";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function App() {
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
