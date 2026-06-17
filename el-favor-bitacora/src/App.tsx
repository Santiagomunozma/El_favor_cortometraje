import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Casting from "./sections/Casting/Casting";
import Team from "./sections/Team/Team";
import Rehearsals from "./sections/Rehearsals/Rehearsals";
import Footer from "./components/Footer/Footer";
import FotoFijaPage from "./sections/FotoFija/FotoFijaPage";
import TeaserSection from "./sections/Teaser/TeaserSection";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/foto-fija" element={<FotoFijaPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
