import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SecondOpinion from "@/components/SecondOpinion";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav locale="en" />
      <main>
        <Hero />
        <About />
        <Services />
        <SecondOpinion />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
