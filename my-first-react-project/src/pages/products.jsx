import axios from "axios";
import { useState, useEffect } from "react";
import "../index.css";  // Ensure that your global CSS file is imported

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 object-cover mx-auto"
            />
            <p className="text-gray-700">{product.category}</p>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-bold">Rs. {product.price}</p>
            <p className="text-sm">Rating: {product.rating.rate} / 5</p>
            <p className="text-sm">Count: {product.rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
