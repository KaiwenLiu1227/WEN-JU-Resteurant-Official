import React from "react";
import HomePage from "./pages/HomePage";
import FoodContextProvider from "./context/FoodContext";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <FoodContextProvider>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </FoodContextProvider>
  );
}
