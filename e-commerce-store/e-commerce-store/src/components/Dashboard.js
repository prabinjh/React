import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate("/products"); // Navigate to Product Catalogue page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Welcome to Your Dashboard</h2>
      
      <div className="row mt-4">
        {/* User Stats */}
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Orders</h5>
            <p className="fs-4 text-primary">45</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Pending Orders</h5>
            <p className="fs-4 text-warning">5</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Total Spent</h5>
            <p className="fs-4 text-success">$2,340</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-5">
        <h4>Recent Activity</h4>
        <ul className="list-group">
          <li className="list-group-item">🛒 Purchased "Laptop" - $999</li>
          <li className="list-group-item">🎧 Added "Headphones" to cart</li>
          <li className="list-group-item">📱 Purchased "Smartphone" - $799</li>
        </ul>
      </div>

      {/* View Products Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleViewProducts}>
          View Products
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
