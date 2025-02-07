/* eslint-disable react/prop-types */
import Nav from "../components/Navbar";
import Header from "../components/Header";
import "../pages/Home.css";

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <Nav />
      <Header />

      <h1 id="I" className="text-center text-4xl font-bold my-10">My creation</h1>

      <div className="p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card border-2 border-burlywood p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="relative flex justify-center items-center mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[150px] h-[150px] object-cover rounded-t-lg"
                />
              </div>

              <div className="mt-2 px-2 text-center">
                <h3 id="name">{product.name}</h3>
                <p className="t">{product.price}€</p>
                <p className="t">Stock : {product.stock}</p>

                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className={`mt-2 px-3 py-1 rounded border-2 transition-colors duration-200 
                    ${product.stock > 0 
                      ? 'bg-white text-black border-burlywood hover:bg-blue-200 hover:text-brown' 
                      : 'bg-red-500 text-white border-red-500 cursor-not-allowed'}`}
                >
                  {product.stock > 0 ? "Ajouter au panier" : "En rupture"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
