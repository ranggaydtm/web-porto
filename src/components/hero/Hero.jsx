/* eslint-disable no-unused-vars */
import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/hero-img.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../theme/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={HeroImg} alt="Profile Picture of Mohammad Rangga Yuditama" />
        <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt="Color Mode Icon" />
      </div>
      <div className={styles.info}>
        <h1>Mohammad Rangga Yuditama</h1>
        <br />
        <h2>Frontend Developer</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit impedit mollitia.</p>
        <a href="">
          <button className="hover">Resume</button>
        </a>
        <span>
          <a href="" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
