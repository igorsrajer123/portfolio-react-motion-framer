import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Igor Srajer
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#">
            <img src="/facebook.png" alt="Facebook Icon" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="Instagram Icon" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="Youtube Icon" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="Dribble Icon" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
