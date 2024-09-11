import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const setSearchTermProducts = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#2d3748",
        }}
      >
        Product List
      </h1>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          padding: "0 10px",
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={setSearchTermProducts}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "12px",
            border: "1px solid #d1d5db",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "10px",
              }}
            >
              {product.title}
            </h2>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
            <p style={{ color: "#4a5568", marginBottom: "8px" }}>
              {product.category}
            </p>
            <p
              style={{
                color: "#718096",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              {product.description}
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#2f855a",
                marginBottom: "10px",
              }}
            >
              Rs. {product.price}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#4a5568", fontSize: "14px" }}>
                Rating: {product.rating.rate} / 5
              </p>
              <p style={{ color: "#4a5568", fontSize: "14px" }}>
                Count: {product.rating.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
