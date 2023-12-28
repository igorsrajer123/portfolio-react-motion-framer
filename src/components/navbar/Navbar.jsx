import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Igor Šrajer
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="https://www.linkedin.com/in/igor-srajer/" target="_newtab">
            <img src="/linkedin.png" alt="Linkedin Icon" />
          </a>
          <a href="https://www.instagram.com/srajer_7/">
            <img src="/instagram.png" alt="Instagram Icon" />
          </a>
          <a href="https://github.com/igorsrajer123/portfolio-react-motion-framer">
            <img src="/github.png" alt="Github Icon" />
          </a>
          <a href="https://www.facebook.com/igor.srajer.7">
            <img src="/facebook.png" alt="Facebook Icon" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
