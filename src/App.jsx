import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Sidebar />
      </section>
      <section id="Services">Parallax</section>
      <section id="Portfolio">Services</section>
      <section id="Contact">Parallax</section>
      <section id="About">Portfolio1</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
