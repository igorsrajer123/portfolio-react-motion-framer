import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Portfolio">Services</section>
      <section id="Contact">
        <Parallax type="portfolio" />
      </section>
      <section id="About">Portfolio1</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
