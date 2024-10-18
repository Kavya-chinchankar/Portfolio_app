import NavBar from "./components/Navbar/NavBar"
import HomeSection from "./components/Home/homeSection";
import AboutSection from "./components/About/AboutSection"
import ContactSection from "./components/Contact/ContactSection"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
      
        <HomeSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
    </div>

  );
}
