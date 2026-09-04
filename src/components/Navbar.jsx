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
          <Link to="/menu">Cake Menu</Link>
          <Link to="/order">Order</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Order Button */}
        <Link to="/order" className="navbar-button">
          Order a Cake
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;