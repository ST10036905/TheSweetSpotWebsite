import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="The Sweet Spot"
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


        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <a
            href="#about"
            onClick={handleAboutClick}
          >
            About
          </a>

          <Link to="/menu">
            Menu
          </Link>

          <Link to="/order">
            Order
          </Link>

        </nav>


        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="navbar-button"
        >
          Get in touch
        </Link>


        {/* Mobile Hamburger */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-navbar-links">

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

          <Link
            to="/contact"
            className="mobile-contact-button"
            onClick={closeMenu}
          >
            Get in touch
          </Link>

        </nav>
      )}
    </header>
  );
}

export default Navbar;