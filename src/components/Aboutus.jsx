
import "../components/Aboutus.css"
const Aboutus = () => {
  return (
    <div id="Contactt">
     <section className="cont" id="contact">
     <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d80625.17780420494!2d4.233040034915775!3d50.839743032007114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHERMES!5e0!3m2!1sfr!2sbe!4v1739102252480!5m2!1sfr!2sbe"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  width="600"
  height="450"
/>

  <div className="contact">
    <div className="contact-section">
      
      <h1>Maison Nassiri</h1>
      <p>
        <strong>Adresse :</strong>
        <br />
        Bd de Waterloo 50,
        <br />
        1000 Bruxelles
        

      </p>
      <p>
        <strong>Phone number:</strong>
        <br />
        <a href="tel:+32470675141">0470/67.51.41</a>
      </p>
      <p>
        <strong>Email :</strong>
        <br />
        <a href="mailto:info@molengeek.com">info@maisonNassiri.com</a>
      </p>
    </div>
  </div>
</section> 
    </div>
  )
}

export default Aboutus
