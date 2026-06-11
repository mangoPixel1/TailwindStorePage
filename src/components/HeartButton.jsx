import { useFavorites } from "../FavoritesContext";

function HeartButton({ product, className = "" }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(product.id);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  }

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer transition-transform hover:scale-110 ${className}`}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={favorited ? "#ef4444" : "none"}
        stroke={favorited ? "#ef4444" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

export default HeartButton;
