import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();

    setMenuOpen(false);

    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/#about");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="The Sweet Spot logo"
            className="navbar-logo"
          />

          <div className="navbar-brand-text">
            <span className="brand-name">
              The Sweet Spot
            </span>

            <span className="brand-tagline">
              Baked with love
            </span>
          </div>
        </Link>


        {/* Navigation */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <a
            href="#about"
            onClick={handleAboutClick}
          >
            About
          </a>

          <Link
            to="/menu"
            onClick={closeMenu}
          >
            Menu
          </Link>

          <Link
            to="/order"
            onClick={closeMenu}
          >
            Order
          </Link>

          {/* Get in touch */}
          <Link
            to="/contact"
            className="navbar-button"
            onClick={closeMenu}
          >
            Get in touch
          </Link>

        </div>


        {/* Hamburger */}
        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
