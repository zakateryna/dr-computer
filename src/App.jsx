import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import BillsSupport from "./components/BillsSupport";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="site-main">
        <Services />
        <WhyChooseUs />
        <About />
        <BillsSupport />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}