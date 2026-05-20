import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020D1D] text-white">
      <Header />
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <Footer />
    </div>
  );
}