import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on Home — scroll directly to About
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Go to Home and tell React that we want the About section
      navigate("/#about");
    }
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