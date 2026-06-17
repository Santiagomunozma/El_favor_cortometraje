import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Casting from "./sections/Casting/Casting";
import Team from "./sections/Team/Team";
import Rehearsals from "./sections/Rehearsals/Rehearsals";
import Footer from "./components/Footer/Footer";
import DetrasDeCamaraPage from "./sections/DetrasDeCamaras/DetrasDeCamara";
import TeaserSection from "./sections/Teaser/TeaserSection";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// --------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <TeaserSection />
              <Casting />
              <Team />
              <Rehearsals />
            </main>
          }
        />
        <Route path="/detras-de-camara" element={<DetrasDeCamaraPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
