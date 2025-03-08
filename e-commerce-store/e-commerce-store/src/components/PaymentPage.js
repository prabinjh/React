import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product; // Get product details

  return (
    <div className="payment-container">
      <h2 className="payment-card">Payment Page</h2>
      {product ? (
        <div className="card mx-auto text-center" style={{ width: "400px" }}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <p className="card-text"><strong>Specifications:</strong> {product.details}</p>
            <button className="payment-btn btn-primary" onClick={() => alert("Payment Successful!")}>Pay Now</button>
            <button className="payment-btn btn-primary" onClick={() => navigate("/products")}>Cancel</button>
          </div>
        </div>
      ) : (
        <p className="text-center">No product selected for payment.</p>
      )}
    </div>
  );
};

export default PaymentPage;
