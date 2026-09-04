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

        {/* LOGO */}
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
              Bake with love
            </span>
          </div>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a
            href="#about"
            onClick={handleAboutClick}
          >
            About
          </a>

          <Link to="/menu" onClick={closeMenu}>
            Menu
          </Link>

          <Link to="/order" onClick={closeMenu}>
            Order
          </Link>

        </nav>


        {/* DESKTOP CONTACT */}
        <Link
          to="/contact"
          className="navbar-button"
          onClick={closeMenu}
        >
          Get in touch
        </Link>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE NAVIGATION */}
      <div
        className={`mobile-navbar ${
          menuOpen ? "mobile-navbar-open" : ""
        }`}
      >
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
      </div>

    </header>
  );
}

export default Navbar;