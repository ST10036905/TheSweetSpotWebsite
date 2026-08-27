const occasions = [
  "Birthdays",
  "Weddings",
  "Baby Showers",
  "Anniversaries",
  "Bridal Showers",
  "Corporate Events",
  "Just Because",
];

function Occasions() {
  return (
    <section className="occasions-section">

      <div className="section-card">

        <h2>Perfect for</h2>

        <div className="heart-divider">♡</div>

        <div className="occasion-list">
          {occasions.map((occasion) => (
            <span key={occasion}>
              {occasion}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Occasions;