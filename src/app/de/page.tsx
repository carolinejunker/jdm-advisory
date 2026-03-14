import HeroDe from "@/components/de/HeroDe";
import AboutDe from "@/components/de/AboutDe";
import ServicesDe from "@/components/de/ServicesDe";
import SecondOpinionDe from "@/components/de/SecondOpinionDe";
import ContactDe from "@/components/de/ContactDe";
import Nav from "@/components/Nav";
import FooterDe from "@/components/de/FooterDe";

export default function HomeDe() {
  return (
    <>
      <Nav locale="de" />
      <main>
        <HeroDe />
        <AboutDe />
        <ServicesDe />
        <SecondOpinionDe />
        <ContactDe />
      </main>
      <FooterDe />
    </>
  );
}
