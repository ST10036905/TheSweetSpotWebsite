function HowItWorks() {
  return (
    <section className="how-section">

      <div className="section-heading">
        <h2>How ordering works</h2>
        <div className="heart-divider">♡</div>
      </div>

      <div className="how-grid">

        <article className="info-card rose-card">

          <div className="info-icon">
            ♡
          </div>

          <div>
            <h3>Your cake</h3>

            <ul>
              <li>No two cakes are ever identical.</li>
              <li>Each cake is a work of art, made by hand.</li>
              <li>Inspiration pictures are used as a guide.</li>
            </ul>
          </div>

        </article>

        <article className="info-card teal-card">

          <div className="info-icon">
            ♡
          </div>

          <div>
            <h3>Collections</h3>

            <ul>
              <li>Open Monday – Saturday.</li>
              <li>Orders collected at the agreed time.</li>
              <li>Delivery available at an extra cost.</li>
            </ul>
          </div>

        </article>

      </div>

    </section>
  );
}

export default HowItWorks;