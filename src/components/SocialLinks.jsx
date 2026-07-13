import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links">

      <a
        href="https://github.com/tsubhashree2005-dotcom"
        target="_blank"
        rel="noreferrer"
        >
        <FaGithub />
    </a>

      <a
        href="https://www.linkedin.com/in/t-subhashree/"
        target="_blank"
        rel="noreferrer"
        >
        <FaLinkedin />
    </a>

      <a href="mailto:tsubhashree2005@gmail.com">
        <FaEnvelope />
    </a>

    </div>
  );
}

export default SocialLinks;