import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product; // Get selected product

  return (
    <div className="container mt-5">
      <h2 className="text-center">Cart</h2>
      {product ? (
        <div className="card mx-auto text-center" style={{ width: "400px" }}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <p className="card-text"><strong>Specifications:</strong> {product.details}</p>
            <button className="btn btn-primary m-2" onClick={() => navigate("/products")}>Back to Products</button>
            <button className="btn btn-success m-2" onClick={() => navigate("/payment", { state: { product } })}>
              Proceed to Payment
            </button>
            <button className="btn btn-danger m-2" onClick={() => navigate("/")}>Logout</button>
          </div>
        </div>
      ) : (
        <p className="text-center">No products in cart.</p>
      )}
    </div>
  );
};

export default CartPage;
