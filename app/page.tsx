import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import SpecialEquipment from "@/components/SpecialEquipment";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <SpecialEquipment />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
