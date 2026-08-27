import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="page">

      <section className="page-header">

        <p className="eyebrow">
          THE SWEET SPOT
        </p>

        <h1>Get in touch</h1>

        <div className="heart-divider">
          ♡
        </div>

        <p>
          Questions about flavours, sizing or a design you have
          in mind? We'd love to hear from you.
        </p>

      </section>


      <section className="contact-grid">

        <a
          href="https://wa.me/258845023340"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            ☎
          </div>

          <div>
            <h2>WhatsApp</h2>

            <p>
              +258 845 023 340
            </p>

            <span>
              Message us →
            </span>
          </div>
        </a>


        <a
          href="https://instagram.com/thesweetspot_by_mayra"
          target="_blank"
          rel="noreferrer"
          className="contact-card teal"
        >
          <div className="contact-icon">
            ◎
          </div>

          <div>
            <h2>Instagram</h2>

            <p>
              @thesweetspot_by_mayra
            </p>

            <span>
              Follow us →
            </span>
          </div>
        </a>


        <div className="contact-card">

          <div className="contact-icon">
            ♧
          </div>

          <div>
            <h2>Collections</h2>

            <p>
              Cape Town CBD
            </p>

            <span>
              Monday – Saturday
            </span>
          </div>

        </div>


        <div className="contact-card teal">

          <div className="contact-icon">
            ♡
          </div>

          <div>
            <h2>Delivery</h2>

            <p>
              Cape Town
            </p>

            <span>
              Available at an extra cost
            </span>
          </div>

        </div>

      </section>


      <section className="contact-cta">

        <h2>Ready to order?</h2>

        <p>
          Let's create something beautiful for your special occasion.
        </p>

        <Link
          to="/order"
          className="btn btn-primary"
        >
          Start your order
        </Link>

      </section>

    </main>
  );
}

export default Contact;