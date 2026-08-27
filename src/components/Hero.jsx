import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-location">
            CAPE TOWN , Central
          </p>

          <h1>
            Custom cakes,
            <span>baked with love</span>
          </h1>

          <p className="hero-description">
            Hand-crafted celebration cakes made to order in Cape Town.
            Choose your cake base, filling and occasion — we'll bake
            something special just for you.
          </p>

          <div className="hero-buttons">
            <Link to="/order" className="btn btn-primary">
              Place an order
            </Link>

            <Link to="/menu" className="btn btn-secondary">
              View cake menu
            </Link>
          </div>

        </div>

        <div className="hero-image-wrapper">
          <div className="hero-circle"></div>

          <img
            src={heroImage}
            alt="The Sweet Spot celebration cake"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;