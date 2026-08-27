import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const cakeBases = [
  "Vanilla Bean",
  "Chocolate Fudge",
  "Red Velvet",
  "Marble Cake",
];

const fillings = [
  "Cream Cheese Frosting",
  "Peppermint Crisp",
  "Biscoff Lotus",
  "Milk Truffle",
  "Dark Chocolate Truffle",
];

const specialFillings = [
  "Chocolate Ganache",
  "Strawberry Compote",
  "Salted Caramel",
];

const occasions = [
  "Birthdays",
  "Weddings",
  "Baby Showers",
  "Anniversaries",
  "Bridal Showers",
  "Corporate Events",
  "Just Because",
];

function MenuCard({ title, items, pink = false }) {
  return (
    <div className={`menu-card ${pink ? "pink-card" : "teal-card"}`}>
      <div className={`menu-label ${pink ? "pink-label" : "teal-label"}`}>
        {title}
      </div>

      <ul className="menu-list">
        {items.map((item) => (
          <li key={item}>
            <Heart size={14} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu-page">

      {/* Header */}
      <section className="menu-header">
        <h1>Cake Menu</h1>

        <div className="heart-divider">
          ♡
        </div>

        <p>
          Mix and match a base with a filling. Every cake is made
          individually by hand, so no two are ever identical.
        </p>
      </section>

      {/* Cake Options */}
      <section className="menu-grid">

        <MenuCard
          title="Cake Bases"
          items={cakeBases}
          pink
        />

        <MenuCard
          title="Fillings & Frostings"
          items={fillings}
        />

        <MenuCard
          title="Special Fillings"
          items={specialFillings}
          pink
        />

        <MenuCard
          title="Our Promise"
          items={[
            "Freshly baked to order",
            "Made with quality ingredients",
            "Hand decorated",
          ]}
        />

      </section>

      {/* Occasions */}
      <section className="occasion-section">

        <h2>Perfect for</h2>

        <div className="heart-divider">
          ♡
        </div>

        <div className="occasion-list">
          {occasions.map((occasion) => (
            <span key={occasion}>
              {occasion}
            </span>
          ))}
        </div>

        <Link to="/order" className="menu-order-button">
          Order your cake
        </Link>

      </section>

    </main>
  );
}

export default Menu;