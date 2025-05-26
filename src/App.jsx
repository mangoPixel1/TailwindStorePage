import { useState } from "react";
import { CartProvider } from "./CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Components
import Header from "../src/components/Header";
import Footer from "./components/Footer";

// Pages
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import CategoryPage from "./components/pages/CategoryPage";
import Search from "./components/pages/Search";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import Favorites from "./components/pages/Favorites";
import Cart from "./components/pages/Cart";
import ProductPage from "./components/pages/ProductPage";
import CartDrawerWrapper from "./components/CartDrawerWrapper";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <CartProvider>
        <CartDrawerWrapper />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:product" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;

/*
<Route path="/account" element={<Account />} />
				<Route path="/favorites" element={<Favorites />} />
*/
