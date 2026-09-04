import { Link } from "react-router-dom";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
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
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Order</Link>
        </div>

        {/* Order Button */}
        <Link to="/contact" className="navbar-button">
          Get in touch 
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;