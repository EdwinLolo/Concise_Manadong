import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import OrderPage from "./Pages/OrderPage";
import GrabFoodOutlet from "./Pages/GrabFoodOutlet";
import GoFoodOutlet from "./Pages/GoFoodOutlet";
import ShopeeFoodOutlet from "./Pages/ShopeeFoodOutlet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/grabfood" element={<GrabFoodOutlet />} />
        <Route path="/gofood" element={<GoFoodOutlet />} />
        <Route path="/shopeefood" element={<ShopeeFoodOutlet />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
