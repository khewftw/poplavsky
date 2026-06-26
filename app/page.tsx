import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CasesFaqBento } from "@/components/sections/CasesFaqBento";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { ConversionBento } from "@/components/sections/ConversionBento";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainDiagnostics } from "@/components/sections/PainDiagnostics";
import { ServicesAboutBento } from "@/components/sections/ServicesAboutBento";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        <HeroSection />
        <ServicesAboutBento />
        <PainDiagnostics />
        <ConversionBento />
        <CasesFaqBento />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
