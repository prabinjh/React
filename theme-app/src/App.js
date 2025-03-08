import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; // ✅ Update path

const About = React.lazy(() => import("./components/About")); // ✅ Update path
const Contact = React.lazy(() => import("./components/Contact")); // ✅ Update path

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/contact">Contact</Link>
  </nav>
);

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
