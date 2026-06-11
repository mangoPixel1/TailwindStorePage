import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../FavoritesContext";
import HeartButton from "../HeartButton";
import StarRating from "../StarRating";

function GridViewIcon({ active }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="6" height="6" rx="1" fill={active ? "white" : "#6b7280"} />
      <rect x="11" y="1" width="6" height="6" rx="1" fill={active ? "white" : "#6b7280"} />
      <rect x="1" y="11" width="6" height="6" rx="1" fill={active ? "white" : "#6b7280"} />
      <rect x="11" y="11" width="6" height="6" rx="1" fill={active ? "white" : "#6b7280"} />
    </svg>
  );
}

function ListViewIcon({ active }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="2" width="16" height="3" rx="1" fill={active ? "white" : "#6b7280"} />
      <rect x="1" y="7.5" width="16" height="3" rx="1" fill={active ? "white" : "#6b7280"} />
      <rect x="1" y="13" width="16" height="3" rx="1" fill={active ? "white" : "#6b7280"} />
    </svg>
  );
}

function Favorites() {
  const { favorites, totalFavorites } = useFavorites();
  const [viewMode, setViewMode] = useState("grid");

  if (totalFavorites === 0) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 bg-gray-50 min-h-[65vh] px-5">
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-700">No favorites yet</h2>
        <p className="text-gray-500 text-sm">Browse our products and heart the ones you love.</p>
        <Link
          to="/"
          className="mt-2 px-5 py-2 rounded-sm text-slate-100 bg-slate-600 hover:bg-slate-700 transition duration-300"
        >
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="flex justify-center px-5 py-8 bg-gray-50 text-gray-600 min-h-screen">
      <div className="flex flex-col w-full lg:max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            My Favorites{" "}
            <span className="text-base font-normal text-gray-500">
              ({totalFavorites} {totalFavorites === 1 ? "item" : "items"})
            </span>
          </h1>
          <div className="flex gap-1">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded cursor-pointer transition duration-200 ${
                viewMode === "list"
                  ? "bg-slate-600 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
              aria-label="List view"
            >
              <ListViewIcon active={viewMode === "list"} />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded cursor-pointer transition duration-200 ${
                viewMode === "grid"
                  ? "bg-slate-600 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
              aria-label="Grid view"
            >
              <GridViewIcon active={viewMode === "grid"} />
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {favorites.map((product) => (
              <div key={product.id}>
                <div className="mb-3 aspect-square bg-white relative">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  <div className="absolute top-2 right-2">
                    <HeartButton
                      product={product}
                      className="bg-white rounded-full p-1.5 shadow-sm text-gray-400"
                    />
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <span className="font-medium text-sm hover:underline">{product.title}</span>
                </Link>
                <p className="font-semibold text-indigo-950">{`$${product.price.toFixed(2)}`}</p>
                {product.rating && (
                  <StarRating rate={product.rating.rate} count={product.rating.count} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 bg-white p-4 shadow-sm rounded-sm"
              >
                <Link to={`/product/${product.id}`} className="shrink-0">
                  <div className="w-20 h-20">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium text-sm text-gray-800 line-clamp-2 hover:underline">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-400 capitalize mt-1">{product.category}</p>
                  <p className="font-semibold text-indigo-950 mt-1">{`$${product.price.toFixed(2)}`}</p>
                </div>
                <HeartButton product={product} className="shrink-0 text-red-500" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;
