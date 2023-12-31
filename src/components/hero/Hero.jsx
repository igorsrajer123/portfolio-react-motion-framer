import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IGOR ŠRAJER</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>

          <motion.h4 variants={textVariants} className="description">
            I&apos;m a Bachelor with Honours in Electrical and Computer
            Engineering and a software engineer with 2 years of professional
            experience. I&apos;ve been working mostly with React.js and Next.js.
            My main goal is not only to keep up with the modern technologies but
            also to fully grasp all concepts required for it and beyond.
          </motion.h4>

          <motion.div className="buttons" variants={textVariants}>
            <a href="#Experience">
              <motion.button>See my project history</motion.button>
            </a>
            <a href="#Contact">
              <motion.button>Contact Me!</motion.button>
            </a>
          </motion.div>
          <motion.img
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            variants={textVariants}
          />
        </motion.div>
        <div className="imageContainer">
          <img
            src="/ja.png"
            alt="igor-srajer"
            className="igor"
            loading="lazy"
          />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer
      </motion.div>
    </div>
  );
};

export default Hero;
