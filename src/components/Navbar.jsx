import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/The-Sweet-Spot-Logo.png";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="The Sweet Spot logo"
            className="navbar-logo"
          />

          <div className="navbar-brand-text">
            <span className="navbar-name">The Sweet Spot</span>
            <span className="navbar-tagline">Baked with love</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#menu">Cake Menu</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>

          <a
            href="https://wa.me/258845023340"
            target="_blank"
            rel="noreferrer"
            className="navbar-whatsapp"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#menu" onClick={closeMenu}>
            Cake Menu
          </a>

          <a href="#order" onClick={closeMenu}>
            Order
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="https://wa.me/258845023340"
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;