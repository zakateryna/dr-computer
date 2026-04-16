import { useEffect, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BillsPage from "./pages/BillsPage";
import "./index.css";

function ForceHomeOnRefresh() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload =
      navEntries.length > 0 && navEntries[0].type === "reload";

    if (
      isReload &&
      location.pathname !== "/" &&
      location.pathname !== "/home" &&
      location.pathname !== "/bollette"
    ) {
      navigate("/home", { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}

function ScrollToSection() {
  const location = useLocation();

  useLayoutEffect(() => {
    const pathToId = {
      "/": "top",
      "/home": "top",
      "/servizi": "servizi",
      "/contatti": "contatti",
    };

    const targetId = pathToId[location.pathname];

    requestAnimationFrame(() => {
      if (targetId) {
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }
      }

      window.scrollTo(0, 0);
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
          <ServicesSection />
        </div>

        <div id="contatti">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ForceHomeOnRefresh />
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/servizi" element={<HomeLayout />} />
        <Route path="/contatti" element={<HomeLayout />} />
        <Route path="/bollette" element={<BillsPage />} />
      </Routes>
    </>
  );
}