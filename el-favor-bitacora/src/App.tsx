import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Casting from "./sections/Casting/Casting";
import Team from "./sections/Team/Team";
import Rehearsals from "./sections/Rehearsals/Rehearsals";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Casting />
      <Team />
      <Rehearsals />
      <Footer />
    </main>
  );
}

export default App;
