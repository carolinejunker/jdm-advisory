import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Track from "@/components/Track";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav locale="de" />
      <main>
        <Hero />
        <About />
        <Services />
        <Track />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
