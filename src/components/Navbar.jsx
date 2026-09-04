import "../App.css";
import logo from "../assets/The-Sweet-Spot-Logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-brand">
          <img
            src={logo}
            alt="The Sweet Spot"
            className="navbar-logo"
          />

          <div className="navbar-brand-text">
            <span className="brand-name">The Sweet Spot</span>
            <span className="brand-tagline">Baked with love</span>
          </div>
        </a>

        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/">About us</a>
          <a href="/order">Order</a>
        </nav>

        <a
          href="/contact"
          target="_blank"
          rel="noreferrer"
          className="navbar-button"
        >
          Get in touch
        </a>

      </div>
    </header>
  );
}

export default Navbar;