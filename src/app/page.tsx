import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CompetitionSection from "@/components/sections/CompetitionSection";
import TimelineSection from "@/components/sections/TimelineSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <CompetitionSection/>
      <TimelineSection />
      <Footer/>
    </div>
  );
}