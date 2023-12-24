import About from "./components/About";
import EmailSection from "./components/EmailSelection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <About/>
        <Project/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}
