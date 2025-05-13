import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Tournaments from "@/components/Tournaments";
import Leagues from "@/components/Leagues";
import Games from "@/components/Games";
import WhatsHappening from "@/components/WhatsHappenning";
import PreviousEvents from "@/components/PreviousEvents";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="font-outfit">
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Tournaments />
      <Leagues />
      <Games />
      <WhatsHappening />
      <PreviousEvents />
      <FAQ />
      <Footer />
    </div>
  );
}
