import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { AboutJoin } from "@/components/about-join";
import { LogoSection } from "@/components/logo-section";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <AboutJoin />
      <LogoSection />
      <PreFooter />
      <Footer />
    </main>
  );
}
