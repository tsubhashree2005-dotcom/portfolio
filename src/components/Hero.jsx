import "../styles/Hero.css";
import SocialLinks from "./SocialLinks";
import profile from "../assets/images/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

function Hero(props) {
  return (
    <section className="hero" id="home">
      <div className="hero-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1>{props.name}</h1>

        <h2>Aspiring AI/ML Engineer | Data Science Student | Deep Learning Explorer</h2>

        <p className="description">
          Passionate about Artificial Intelligence, Machine Learning,
          Deep Learning and solving real-world problems through technology.
        </p>

        <div className="buttons">

        <a
          href="/resume.pdf"
          download
          className="hero-btn"
        >
          📄 Download Resume
        </a>

        <a
          href="#projects"
          className="hero-btn"
        >
          🚀 Explore Projects
        </a>

        </div>
        <SocialLinks />

      </div>

      <div className="hero-right">

        <img src={profile} alt="Profile" />

      </div>

    </section>
  );
}

export default Hero;