import { useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

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