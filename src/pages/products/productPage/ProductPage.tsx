import { Link } from "react-router-dom";
import Header from "../../../components/homeComponent/Header";
import { featuredProducts } from "../../../components/constants/products/products";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="featured-products-section py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 mt-6">Products Page</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="product bg-white p-5 rounded-lg shadow-lg"
              >
                <div
                  className="product-image mb-5 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "25em",
                    borderRadius: "15px",
                  }}
                >
                  <div className="badge bg-[#d8edf1d3] text-xl p-2 font-bold">
                    $ {product.price}
                  </div>
                </div>
                <h3 className="text-3xl font-semibold mb-3">{product.name}</h3>
                <p className="mb-5">{product.description}</p>

                <Link
                  to={`/product/${product.id}`}
                  className="btn bg-[#cccccc] text-[#06768d] hover:bg-[#519faf] hover:text-[#010c0e] text-xl font-medium"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
