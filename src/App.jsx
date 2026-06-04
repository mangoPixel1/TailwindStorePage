import { CartProvider } from "./CartContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Layout
import MainLayout from "./components/MainLayout";
import CartDrawerWrapper from "./components/CartDrawerWrapper";

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
import CheckoutShipping from "./components/pages/CheckoutShipping";
import CheckoutPayment from "./components/pages/CheckoutPayment";
import OrderConfirmation from "./components/pages/OrderConfirmation";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <CartDrawerWrapper />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:product" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/checkout/shipping" element={<CheckoutShipping />} />
          <Route path="/checkout/payment" element={<CheckoutPayment />} />
          <Route path="/order_confirmation" element={<OrderConfirmation />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
