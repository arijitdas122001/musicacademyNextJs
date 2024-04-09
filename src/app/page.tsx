import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Whychooseus from "@/components/Whychooseus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeroSection/>
        <Featured/>
        <Whychooseus/>
    </main>
  );
}