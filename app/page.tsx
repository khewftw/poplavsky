import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesAboutBento } from "@/components/sections/ServicesAboutBento";
import { StrategyVsReaction } from "@/components/sections/StrategyVsReaction";
import { WhenToAppeal } from "@/components/sections/WhenToAppeal";
import { PracticalSituations } from "@/components/sections/PracticalSituations";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        <HeroSection />
        <TrustBar />
        <ServicesAboutBento />
        <StrategyVsReaction />
        <WhenToAppeal />
        <PracticalSituations />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
