function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <p className="footer-title">
            Sweet moments begin here.
          </p>

        </div>

        <div className="footer-links">

          <a
            href="https://wa.me/258845023340"
            target="_blank"
            rel="noreferrer"
          >
            +258 84 502 3340
          </a>

          <a
            href="https://instagram.com/thesweetspot_by_mayra"
            target="_blank"
            rel="noreferrer"
          >
            @thesweetspot_by_mayra
          </a>

          <span>
            Cape Town, Western Cape
          </span>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} The Sweet Spot - Developed by Mayra Selemane.
        </p>

      </div>

    </footer>
  );
}

export default Footer;