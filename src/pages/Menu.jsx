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
  "Classic Caramel",
  "Biscoff Lotus",
  "Milk Truffle",
  "Dark Chocolate Truffle",
  "Chocolate Ganache",
];

const fruityFillings = [
  "Strawberry Compote",
];

const decadentFillings = [
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

function MenuList({ items }) {
  return (
    <ul className="menu-list">
      {items.map((item) => (
        <li key={item}>
          <span>♡</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function MenuCard({ title, children, type = "rose" }) {
  return (
    <article className={`menu-card ${type}`}>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function Menu() {
  return (
    <main className="page">

      <section className="page-header">
        <p className="eyebrow">THE SWEET SPOT</p>

        <h1>Cake Menu</h1>

        <div className="heart-divider">♡</div>

        <p>
          Mix and match your favourite cake base with a delicious
          filling. Every cake is made individually by hand.
        </p>
      </section>


      <section className="menu-grid">

        <MenuCard title="Cake Bases">
          <p className="menu-script">Classic flavours</p>

          <MenuList items={cakeBases} />
        </MenuCard>


        <MenuCard title="Fillings & Frostings" type="teal">
          <MenuList items={fillings} />
        </MenuCard>


        <MenuCard title="Fruity Filling">
          <MenuList items={fruityFillings} />

          <p className="menu-note">
            Made with fresh strawberries.
          </p>
        </MenuCard>


        <MenuCard title="Decadent Filling" type="teal">
          <MenuList items={decadentFillings} />

          <p className="menu-note">
            Rich homemade caramel sauce.
          </p>
        </MenuCard>

      </section>


      <section className="menu-occasions">

        <h2>Perfect for</h2>

        <div className="heart-divider">♡</div>

        <div className="occasion-list">
          {occasions.map((occasion) => (
            <span key={occasion}>
              {occasion}
            </span>
          ))}
        </div>

        <Link to="/order" className="btn btn-primary">
          Order your cake
        </Link>

      </section>

    </main>
  );
}

export default Menu;