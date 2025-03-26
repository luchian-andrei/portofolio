import Home from "@/views/Home";
import About from "@/views/About";
import Tech from "@/views/Tech";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import Footer from "@/views/Footer";
import CustomNav from "@/components/CustomNav";

export default function Main() {
  return (
    <main className="flex flex-col justify-center items-center relative">
      {/* <p className="text-4xl font-bold my-10">Cauta si vei gasi</p> */}
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
