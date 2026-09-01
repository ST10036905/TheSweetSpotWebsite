import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="page">

      {/* PAGE HEADER */}
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
          in mind? We are here to assist you.
        </p>

      </section>


      {/* CONTACT OPTIONS */}
      <section className="contact-grid">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/258845023340"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">

            {/* Phone icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                19.79 19.79 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                19.79 19.79 0 0 1-3.07-8.67
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                12.84 12.84 0 0 0 .7 2.81
                2 2 0 0 1-.45 2.11L8.09 9.91
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92z"
              />
            </svg>

          </div>

          <div>
            <h2>WhatsApp</h2>

            <p>
              +258 84 502 3340
            </p>

            <span>
              Message us →
            </span>
          </div>

        </a>


        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/thesweetspot_by_mayra"
          target="_blank"
          rel="noreferrer"
          className="contact-card teal"
        >

          <div className="contact-icon">

            {/* Instagram icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />

            </svg>

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


        {/* COLLECTION */}
        <div className="contact-card">

          <div className="contact-icon">

            {/* Location / Map Pin icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

              <circle
                cx="12"
                cy="10"
                r="2.5"
              />

            </svg>

          </div>

          <div>
            <h2>Collections</h2>

            <p>
              Cape Town, Central
            </p>

            <span>
              Monday – Saturday
            </span>
          </div>

        </div>


        {/* DELIVERY */}
        <div className="contact-card teal">

          <div className="contact-icon">

            {/* Delivery / Truck icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 6h11v11H3z" />

              <path d="M14 9h4l3 3v5h-7z" />

              <circle
                cx="7"
                cy="19"
                r="2"
              />

              <circle
                cx="18"
                cy="19"
                r="2"
              />

            </svg>

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


      {/* CTA */}
      <section className="contact-cta">

        <h2>Ready to order?</h2>

        <p>
          Let's create something beautiful together for your special occasion.
        </p>

        <Link
          to="/order"
          className="btn btn-primary"
        >
          Start your order now
        </Link>

      </section>

    </main>
  );
}

export default Contact;