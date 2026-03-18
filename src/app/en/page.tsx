import HeroEn from "@/components/en/HeroEn";
import AboutEn from "@/components/en/AboutEn";
import AIPartnerEn from "@/components/en/AIPartnerEn";
import ServicesEn from "@/components/en/ServicesEn";
import TrackEn from "@/components/en/TrackEn";
import ContactEn from "@/components/en/ContactEn";
import Nav from "@/components/Nav";
import FooterEn from "@/components/en/FooterEn";

export default function HomeEn() {
  return (
    <>
      <Nav locale="en" />
      <main>
        <HeroEn />
        <AboutEn />
        <AIPartnerEn />
        <ServicesEn />
        <TrackEn />
        <ContactEn />
      </main>
      <FooterEn />
    </>
  );
}
