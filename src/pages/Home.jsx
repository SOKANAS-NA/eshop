/* eslint-disable react/prop-types */
import Nav from "../components/Navbar";
import Header from "../components/Header";
import "../pages/Home.css";
import Footer from "../components/Footer";
import About from "./About";
//HOME EST LA PAGE CREE PÄR DEFAUT QUI CONTIENT TOUT LE CONTENU ESSENITEL POUR L UTLISATEUR C EST LA OU LES CARTES SONT DISPOSEE AVEC LEUR VALEUR 
//PRODUCTS AVEC UN s EST UN PROPS QUI VA ETRE UTILSE DANS LA METHODE .MAP AFIN DE DISTRIBUER CHAQUE PRODUCT A SA CARTE ADEQUATE ET EST DONC UTLISE AFIN DE GENERER DYNAIQUEMENT L AFFICHAGE DES PRODUITS. IL N EST PAS MODIFIE DIRECTEMENT DANS HOME CAR APP.JSX GERE CELA

//addToCart un props qui est utilisé pour modifier le panier lorsque l'on clique sur "Add to your collection
const Home = ({ products, addToCart }) => { 
  return (
    <div>
      <Nav />
      <Header />
      <About></About>

      <h1 id="I" className="text-center text-4xl font-bold my-10">
        Lovely creations
      </h1>

      <div className="p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id} //L ID CORRESPOND A L ID DONNE DANS LE DATA.JSON
              className="product-card p-4 border-8 border-[brown] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center 
              bg-white/30 backdrop-blur-lg"
            >
              <div className="relative flex justify-center items-center mb-2">
                <img
                  src={product.image} //LIE A L IMAGE DONNE PAR DATA.JSON
                  alt={product.name}// IDEM NAME DONNE PAR DATA.JSON
                  className="w-[150px] h-[150px] object-cover rounded-t-lg"
                />
              </div>

              <div className="mt-2 px-2 text-center">
                <h3 id="name">{product.name}</h3>
                <p className="t">{product.price}€</p>
                <p className="t">Stock : {product.stock}</p>

                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}//QD LE STK EST EPUISE LE BTN EST DESACTIVE
                  className={`mt-2 px-3 py-1 rounded border-2 transition-colors duration-200 
                    ${
                      product.stock > 0
                        ? "bg-white text-black border-black hover:bg-blue-200 hover:text-brown"
                        : "bg-red-500 text-white border-red-500 cursor-not-allowed"
                    }`}
                >
                  {product.stock > 0 ? "Add to your collection" : "En rupture"} {/*CONDITION TERNAIRE SI C EST VRAI ALORS ON AJOUTE AU PANIER SINON RUPTURE DE STOK */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
