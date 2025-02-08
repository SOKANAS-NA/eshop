import "../components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook" />
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin" />
        </a>
      </div>
     
      <p>© 2025 MaisonNassiri. All rights reserved.</p>
    </div>
  );
};

export default Footer;
