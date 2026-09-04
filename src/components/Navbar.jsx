import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();

    // If already on the home page, scroll directly to About
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // If on another page, go home first
    navigate("/");

    // Wait for the Home page to render, then scroll to About
    setTimeout(() => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="The Sweet Spot logo"
            className="navbar-logo"
          />

          <div className="navbar-brand-text">
            <span className="brand-name">The Sweet Spot</span>
            <span className="brand-tagline">Baked with love</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/">Home</Link>

          <a href="#about" onClick={handleAboutClick}>
            About
          </a>

          <Link to="/menu">Menu</Link>

          <Link to="/order">Order</Link>
        </div>

        {/* Contact Button */}
        <Link to="/contact" className="navbar-button">
          Get in touch
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;