import { useState } from "react";
import Home from "./pages/Home";
import CartPage from "./components/CartePage";
import "../src/App.css";
import productData from "../src/data.json";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import About from "./pages/About";


const App = () => {
  //GESTION DE LA DYNAMIQUE DES PAGES VIA USESTATE
  const [balance, setBalance] = useState(50000); // Solde initial de 1000€
  const [cart, setCart] = useState([]); // Panier vide au début
  const [currentPage, setCurrentPage] = useState("home"); //PAGE D ACCUEIL PAR DEFAUT
  const [products, setProducts] = useState(productData); // PRODUITS QUE J AI CREE EN FORME DE TABLEAU INCLUANT LES OBJECTS PROPRES POUR CHAQUE CARTE ( dans data.json)

  // Fonction pour ajouter un produit au panier: product est transmis au component enfant afin qu il soit affiche
  //J AI CREE L ANCRE POUR ACCEDER A CONTACT et a about us je voulais creer des pages a part avec le curentpage mais je me suis un peu perdue alors j ai preferer mettre des ancres
  <Navbar>
    <About></About>
    <Aboutus></Aboutus>
    
  </Navbar>
  const addToCart = (product) => {
    if (balance >= product.price && product.stock > 0) { //VERIFICATION QUE LE SOLDE DE L UTILISATEUR EST DISPONIBLE ET LE STOCK AUSSI
      setCart([...cart, product]); // Ajout du produit au panier
      setBalance(balance - product.price); // DIMINUTION DU MONTANT DU SOLDE EN FONCTION DU PRIX DU PRODUIT
      setProducts(products.map(p => 
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p 
      )); //METHODE .mAP (une boucle) AFIN DE DIMINUER LE STOCK DU PRODUIT. Si l'id du produit ajouté correspond, ALORS son stock diminue stock - 1. (.map parcourt chaque produit de la liste products), sinon on garde le produit inchangé
    }
  };

  // Fonction pour retirer un produit du panier
  const removeFromCart = (product) => {
    const index = cart.findIndex(item => item.id === product.id); // Trouver le premier élément correspondant
  
    if (index !== -1) { //LE -1 AFIN DE RETIRER SEULEMENT UN PRODUIT ET PAS TOUTS LES PRODUITS AVEC LE MEME ID
      const newCart = [...cart];
      newCart.splice(index, 1); // Supprimer seulement UN élément
  
      setCart(newCart);
      setBalance(balance + product.price); // Remboursement du prix du produit
      setProducts(products.map(p => 
        p.id === product.id ? { ...p, stock: p.stock + 1 } : p 
      )); // Remettre en stock un exemplaire du produit
    }
  };
  // On remet en stock ce qui a été retiré avec .map (si le produit retiré a été acheté)
  

  // Nombre total d'articles dans le panier
  const cartItemCount = cart.length;

  return (
    <div className="p-4">
      {currentPage === "home" && <Home products={products} addToCart={addToCart} />} {/* Lorsque App.js affiche Home, il passe products en prop*/}
      {currentPage === "cart" && <CartPage cart={cart} removeFromCart={removeFromCart} balance={balance} />} {/* Page panier */}

      {/* Bouton de navigation avec compteur du panier */}
      <button 
        onClick={() => setCurrentPage(currentPage === "home" ? "cart" : "home")} // Logique de changement de page
        className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:text-black transition"
      >
        {currentPage === "home" ? `see basket (${cartItemCount})` : "Retour"} {/* Affichage dynamique en fonction de la page actuelle */}
      </button> {/* cartItemCount est défini plus haut afin d'initialiser le nombre d'articles dans le panier// avec la condition ternaire : si on est dans la page panier, le bouton indique "Retour", sinon, dans la page d'accueil, il indique "see basket" pour afficher le panier. */}
    
    </div>
   
  );
};

export default App;
