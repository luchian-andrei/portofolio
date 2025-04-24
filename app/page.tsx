import Home from "@/views/Home";
import About from "@/views/About";
import Tech from "@/views/Tech";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import Footer from "@/views/Footer";
import CustomNav from "@/components/CustomNav";

export default function Main() {
  return (
    <main className="flex flex-col justify-center items-center bg-[#0a0a0a] gap-32 scroll-smooth scroll-m-3">
      <CustomNav />
      <Home />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
