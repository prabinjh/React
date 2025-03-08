import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; 
import "/Users/prabin/Desktop/React/my-app/theme-app/src/styles/styles.css" 

// Function to simulate delay
const delayImport = (importFunc, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), delay);
  });
};

// Lazy load components with a delay
const LazyAbout = lazy(() => delayImport(() => import("./components/About"), 1000));
const LazyContact = lazy(() => delayImport(() => import("./components/Contact"), 1000));

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

// Separate component to use theme context
const ThemedApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={theme}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <button onClick={toggleTheme}>Toggle Theme</button>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/contact" element={<LazyContact />} />
            <Route path="/" element={<h1>Welcome to the {theme} theme!</h1>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
