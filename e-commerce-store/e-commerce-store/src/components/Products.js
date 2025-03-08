import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductCatalogue.css";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { 
      id: 1, 
      name: "Laptop", 
      price: "$999", 
      image: "/images/laptop.jpg", 
      details: "Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch Display"
    },
    { 
      id: 2, 
      name: "Headphones", 
      price: "$199", 
      image: "/images/headphones.jpg", 
      details: "Wireless, Noise Cancellation, 20 Hours Battery Life"
    },
    { 
      id: 3, 
      name: "Smartwatch", 
      price: "$799", 
      image: "/images/smartwatch1.jpg", 
      details: "AMOLED Display, Heart Rate Monitor, GPS, Waterproof"
    },
    { 
      id: 4, 
      name: "Smartphone", 
      price: "$799", 
      image: "/images/phone.jpg", 
      details: "6.5-inch OLED, 128GB Storage, 50MP Camera, 5G"
    },
    { 
      id: 5, 
      name: "Tablet", 
      price: "$799", 
      image: "/images/tablet.jpg", 
      details: "10.1-inch Display, 64GB Storage, Quad Speakers"
    },
    { 
      id: 6, 
      name: "Camera", 
      price: "$799", 
      image: "/images/camera.jpg", 
      details: "24MP DSLR, 4K Video, WiFi & Bluetooth"
    },
  ];

  const handleAddToCart = (product) => {
    navigate("/cart", { state: { product } }); // Pass product details to Cart Page
  };

  const handleLogout = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center">Product Catalogue</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <div className="row mt-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <p className="card-text"><strong>Specs:</strong> {product.details}</p>
                <button className="btn btn-success" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
