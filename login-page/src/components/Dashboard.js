import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
