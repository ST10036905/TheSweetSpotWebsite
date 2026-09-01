import { Link } from "react-router-dom";
import mainImage from "../assets/The-Sweet-Spot-Logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Custom cakes,
            <span>baked with love</span>
          </h1>

          <p className="hero-description">
            Hand-crafted celebration cakes made to order in Cape Town.
            Choose your cake base, filling, occasion and we'll bake
            something special just for you.
          </p>

          <div className="hero-buttons">
            <Link to="/order" className="btn btn-primary">
              Place an order
            </Link>

            <Link to="/menu" className="btn btn-secondary">
              View menu
            </Link>
          </div>

        </div>

        <div className="hero-image-wrapper">
          <div className="hero-circle"></div>

          <img
            src={mainImage}
            alt="The Sweet Spot"
            className="mainImage"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;