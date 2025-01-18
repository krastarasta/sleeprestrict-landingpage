import FAQSection from "./components/sections/FAQSection";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}
