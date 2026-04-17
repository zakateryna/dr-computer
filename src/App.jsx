import { useEffect, useLayoutEffect, useRef } from "react";
import {
  Routes,
  Route,
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
  const hasCheckedReload = useRef(false);

  useEffect(() => {
    if (hasCheckedReload.current) return;

    hasCheckedReload.current = true;

    const navEntries = performance.getEntriesByType("navigation");
    const isReload =
      navEntries.length > 0 && navEntries[0].type === "reload";

    if (
      isReload &&
      location.pathname !== "/" &&
      location.pathname !== "/bollette"
    ) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}

function ScrollToSection() {
  const location = useLocation();

  useLayoutEffect(() => {
    const pathToId = {
      "/": "top",
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
        <ServicesSection />
        <ContactSection />
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
        <Route path="/" element={<HomeLayout />} />
        <Route path="/servizi" element={<HomeLayout />} />
        <Route path="/contatti" element={<HomeLayout />} />
        <Route path="/bollette" element={<BillsPage />} />
      </Routes>
    </>
  );
}