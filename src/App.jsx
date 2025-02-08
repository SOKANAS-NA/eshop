import { useState } from "react";
import Home from "./pages/Home";
import CartPage from "./components/CartePage";
import "../src/App.css";
import productData from "../src/data.json";

const App = () => {
  //GESTION DE LA DYNAMIQUE DES PAGES VIA USESTATE
  const [balance, setBalance] = useState(10000); // Solde initial de 1000€
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");//PAGE D ACCUEIL PAR DEFAUT
  const [products, setProducts] = useState(productData);//PRODUITS QUE J AI CREE EN FORME DE TABLEAU INCLUANT LES OBJECTS PROPRES POUR CHAQUE CARTE

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    if (balance >= product.price && product.stock > 0) { //VERIFICATION QUE LE SOLDE DE L UTILISATEUR  EST DISPONIBLE ET LE STOCK AUSSI
      setCart([...cart, product]);
      setBalance(balance - product.price);//DIMINU LE MONTANT DU SOLDE EN FONCTION DU PRIX DU PRODUIT
      setProducts(products.map(p => 
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p 
      )); //METHODE .mAP AFIN DE DIMINUER LE PRODUITE DU STOK
    }
  };

  // Fonction pour retirer un produit du panier
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
    setBalance(balance + product.price);
    setProducts(products.map(p => 
      p.id === product.id ? { ...p, stock: p.stock + 1 } : p
    ));
  };

  // Nombre total d'articles dans le panier
  const cartItemCount = cart.length;

  return (
    <div className="p-4">
      {currentPage === "home" && <Home products={products} addToCart={addToCart} />}
      {currentPage === "cart" && <CartPage cart={cart} removeFromCart={removeFromCart} balance={balance} />}

      {/* Bouton de navigation avec compteur du panier */}
      <button 
        onClick={() => setCurrentPage(currentPage === "home" ? "cart" : "home")}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        {currentPage === "home" ? `Voir Panier (${cartItemCount})` : "Retour"}
      </button>
    </div>
  );
};

export default App;
