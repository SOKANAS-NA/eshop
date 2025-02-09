/* eslint-disable react/prop-types */
import '../components/Carte.css'
import Navbar from "../components/Navbar"
import Footer from './Footer';
import Header from './Header';

const CartPage = ({ cart, removeFromCart, balance }) => { //CART EST LE PANIER BALANCE EST LE SOLDE DE L UTILISATEUR Ce component permet l affichage dynamique du panier grace au parent app.JSX
    return (
      <>
      <Navbar></Navbar>
      <Header />
      <div className="min-h-screen flex items-center justify-center  from-blue-200 via-purple-200 to-pink-200" id="o"> {/* Fond avec dégradé */}
        <div className="p-6 flex flex-col items-center justify-center w-full max-w-lg bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">MY BASKET</h2>
          <p className="mb-6 text-lg text-gray-700">REMAINING BALANCE : <strong className="text-green-600">{balance}€</strong></p>
    
          {cart.length === 0 ? ( //PETIT BOOLEAN POUR MARQUER QUAND LE PANIER EST VIDE
            <p className="text-gray-500 text-center">Votre panier est vide</p>
          ) : (
            <div className="w-full">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-100 p-4 mb-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" /> {/*j ai optéé pour placer l image du produit en miniature dans le panier comme dans les vrais sites de shoppping*/}
                    <div>
                      <span className="font-semibold text-lg">{item.name}</span>
                      <p className="text-gray-600">{item.price}€</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Retirer
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
          <Footer></Footer>
      </>
    );
};

export default CartPage;
