import { useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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

function ScrollToSection() {
  const location = useLocation();

  useLayoutEffect(() => {
    const pathToId = {
      "/": "top",
      "/home": "top",
      "/servizi": "servizi",
      "/chi-siamo": "chi-siamo",
      "/bollette": "bollette",
      "/dove-siamo": "dove-siamo",
      "/contatti": "contatti",
    };

    const targetId = pathToId[location.pathname] || "top";

    requestAnimationFrame(() => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, [location.pathname]);

  return null;
}

function HomeLayout() {
  return (
    <>
      <div id="top" />
      <Navbar />
      <Hero />

      <main className="site-main">
        <div id="servizi">
          <Services />
        </div>

        <WhyChooseUs />

        <div id="chi-siamo">
          <About />
        </div>

        <div id="bollette">
          <BillsSupport />
        </div>

        <div id="dove-siamo">
          <Location />
        </div>

        <div id="contatti">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/servizi" element={<HomeLayout />} />
        <Route path="/chi-siamo" element={<HomeLayout />} />
        <Route path="/bollette" element={<HomeLayout />} />
        <Route path="/dove-siamo" element={<HomeLayout />} />
        <Route path="/contatti" element={<HomeLayout />} />
      </Routes>
    </>
  );
}