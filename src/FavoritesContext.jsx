import { createContext, useContext, useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

const FavoritesContext = createContext();

function getStoredFavorites() {
  const stored = localStorage.getItem("favoritesData");
  return stored ? JSON.parse(stored) : [];
}

function FavoritesToast({ message }) {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-80 flex justify-between px-3 py-3 text-slate-700 bg-slate-300 border-2 border-slate-700 z-50">
      <div className="flex justify-center items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ef4444"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span>{message}</span>
        <Link to="/favorites">
          <span className="underline">View favorites</span>
        </Link>
      </div>
      <div className="invisible">
        <svg width="24" height="24" viewBox="0 0 24 24" />
      </div>
    </div>
  );
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getStoredFavorites);
  const [toast, setToast] = useState({ show: false, message: "" });
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("favoritesData", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    return () => { if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current); };
  }, []);

  const showToast = useCallback((message) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ show: true, message });
    toastTimeoutRef.current = setTimeout(() => setToast({ show: false, message: "" }), 3000);
  }, []);

  const isFavorite = useCallback((id) => favorites.some((p) => p.id === id), [favorites]);

  const toggleFavorite = useCallback((product) => {
    const exists = favorites.some((p) => p.id === product.id);
    if (exists) {
      setFavorites((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
      showToast("Added to favorites");
    }
  }, [favorites, showToast]);

  const contextValue = useMemo(() => ({
    favorites,
    toggleFavorite,
    isFavorite,
    totalFavorites: favorites.length,
  }), [favorites, toggleFavorite, isFavorite]);

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
      {toast.show && <FavoritesToast message={toast.message} />}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}
