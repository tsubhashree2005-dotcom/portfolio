
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">T SUBHA SHREE</h2>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>

        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;