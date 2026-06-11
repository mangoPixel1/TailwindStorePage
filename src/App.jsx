import { lazy, Suspense } from "react";
import { CartProvider } from "./CartContext";
import { FavoritesProvider } from "./FavoritesContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Layout
import MainLayout from "./components/MainLayout";
import CartDrawerWrapper from "./components/CartDrawerWrapper";

// Pages (lazy-loaded so each route is a separate chunk)
const NotFound = lazy(() => import("./components/pages/NotFound"));
const Home = lazy(() => import("./components/pages/Home"));
const CategoryPage = lazy(() => import("./components/pages/CategoryPage"));
const Search = lazy(() => import("./components/pages/Search"));
const Login = lazy(() => import("./components/pages/Login"));
const Account = lazy(() => import("./components/pages/Account"));
const Favorites = lazy(() => import("./components/pages/Favorites"));
const Cart = lazy(() => import("./components/pages/Cart"));
const ProductPage = lazy(() => import("./components/pages/ProductPage"));
const CheckoutShipping = lazy(() => import("./components/pages/CheckoutShipping"));
const CheckoutPayment = lazy(() => import("./components/pages/CheckoutPayment"));
const OrderConfirmation = lazy(() => import("./components/pages/OrderConfirmation"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <FavoritesProvider>
      <CartProvider>
        <CartDrawerWrapper />
        <Suspense fallback={null}>
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
              <Route path="/order_confirmation" element={<OrderConfirmation />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/checkout/shipping" element={<CheckoutShipping />} />
            <Route path="/checkout/payment" element={<CheckoutPayment />} />
          </Routes>
        </Suspense>
      </CartProvider>
      </FavoritesProvider>
    </div>
  );
}

export default App;
