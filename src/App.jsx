import { useState } from "react";
import Home from "./pages/Home";
import CartPage from "./components/CartePage";
import "../src/App.css";
import productData from "../src/data.json"; 

const App = () => {
  const [balance, setBalance] = useState(1000); // Solde initial
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("home"); // Gérer la navigation
  const [products, setProducts] = useState(productData); // Charger les produits depuis le fichier JSON

  // Ajouter un produit au panier
  const addToCart = (product) => {
    if (balance >= product.price && product.stock > 0) {
      setCart([...cart, product]);
      setBalance(balance - product.price);
      setProducts(products.map(p => 
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      ));
    }
  };

  // Retirer un produit du panier
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
    setBalance(balance + product.price);
    setProducts(products.map(p => 
      p.id === product.id ? { ...p, stock: p.stock + 1 } : p
    ));
  };

  return (
    <div className="p-4">
      {currentPage === "home" && <Home products={products} addToCart={addToCart} />}
      {currentPage === "cart" && <CartPage cart={cart} removeFromCart={removeFromCart} balance={balance} />}

      {/* Bouton de navigation entre les pages */}
      <button 
        onClick={() => setCurrentPage(currentPage === "home" ? "cart" : "home")}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        {currentPage === "home" ? "Voir Panier" : "Retour"}
      </button>
    </div>
  );
};

export default App; 