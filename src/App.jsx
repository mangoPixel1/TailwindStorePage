import { useState, useEffect } from "react";
import { CartProvider } from "./CartContext";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
import CheckoutPage from "./components/pages/CheckoutPage";

function App() {
  const location = useLocation();
  const noLayoutPaths = ["/checkout"];

  const isNoLayout = noLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen ">
      <CartProvider>
        <CartDrawerWrapper />
        {!isNoLayout && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:product" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isNoLayout && <Footer />}
      </CartProvider>
    </div>
  );
}

export default App;
