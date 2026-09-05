import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();

    closeMobileMenu();

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

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo and Brand */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMobileMenu}
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


        {/* Desktop Navigation Links */}
        <div className="navbar-links">

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

        </div>


        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="navbar-button"
        >
          Get in touch
        </Link>


        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-navbar-links">

          <Link
            to="/"
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
          >
            Menu
          </Link>

          <Link
            to="/order"
            onClick={closeMobileMenu}
          >
            Order
          </Link>

          <Link
            to="/contact"
            className="mobile-contact-button"
            onClick={closeMobileMenu}
          >
            Get in touch
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;