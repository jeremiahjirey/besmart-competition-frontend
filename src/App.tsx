import "./App.css";
import About from "./components/About";
import Competitions from "./components/Competitions";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PrizePool from "./components/PrizePool";
import Scheme from "./components/Scheme";

function App() {
  return (
    <main>
      <Navbar />
      <section className="mt-24">
        <Hero />
        <PrizePool />
        <About />
        <Scheme />
        <Competitions />
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}

export default App;
