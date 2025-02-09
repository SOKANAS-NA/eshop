import "../pages/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Section "about" avec texte et image */}
      <div className="about">
        {/* Texte à gauche */}
        <div className="about-text">
          <h3>Élégance et Savoir-Faire : L&lsquo;Excellence d&lsquo;une Maison de Sacs de Luxe</h3>
          <p>
            Depuis sa création, notre maison incarne l’excellence et le raffinement
            dans l’univers du sac de luxe. Chaque pièce est une œuvre d’art, façonnée avec passion
            par nos artisans aux gestes précis et hérités d’un savoir-faire d’exception.
          </p>
          <p>
            Nous sélectionnons avec soin les cuirs les plus précieux, provenant des meilleures
            tanneries du monde, pour offrir des sacs à la souplesse inégalée et aux finitions irréprochables.
            Chaque couture, chaque détail est pensé pour sublimer la matière et assurer une élégance intemporelle.
          </p>
        </div>

        {/* Image à droite */}
        <div className="about-image">
          <img src="src/image/tailleur-creatif-travaillant-atelier_23-2148970728.jpg" alt="Sac de luxe" />
        </div>
      </div>
    </div>
  );
};

export default About;
