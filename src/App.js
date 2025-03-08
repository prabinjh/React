import React, { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

const itemList = ["Apple", "Banana", "Cherry", "Grapes", "Mango", "Orange", "Pineapple"];

const App = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");

  const filteredItems = itemList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <h1>Theme & Search Filter</h1>
      
      <button 
        className={darkMode ? "dark" : "light"} 
        onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>

      <input
        type="text"
        placeholder="🔍 Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="list-container">
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
