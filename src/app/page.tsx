import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import Whychooseus from "@/components/Whychooseus";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <Featured/>
        <Whychooseus/>
        <MovingCards/>
        <Instructors/>
        <Footer/>
    </main>
  );
}