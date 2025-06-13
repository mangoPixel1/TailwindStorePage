import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Header() {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const { toggleCart, getTotalQuantity } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Extract all categories from products list, avoid duplicate names
        let categoryNames = [];
        data.forEach((item) => {
          if (!categoryNames.includes(item.category)) {
            categoryNames.push(item.category);
          }
        });

        // Capitalize first letter of each category
        const names = categoryNames.map((name) => {
          return name.charAt(0).toUpperCase() + name.slice(1);
        });

        setCategories(names);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="px-5 md:px-10 py-5 flex justify-center bg-slate-500 text-white">
        <div className="flex items-center justify-between w-full lg:max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-10">
              <h1
                className="text-2xl min-[600px]:text-3xl font-bold"
                onClick={closeMenu}
              >
                <Link to="/">Fake Store</Link>
              </h1>

              <nav className="hidden min-[830px]:block">
                <ul className="flex gap-4">
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      className="capitalize cursor-pointer hover:text-slate-200"
                    >
                      <Link to={`category/${cat.toLowerCase()}`}>{cat}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <button
              className="min-[830px]:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4"
                    y1="4"
                    x2="16"
                    y2="16"
                    stroke="#d3d3d3"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="4"
                    x2="4"
                    y2="16"
                    stroke="#d3d3d3"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100" height="10" rx="8" fill="#d3d3d3" />
                  <rect y="30" width="100" height="10" rx="8" fill="#d3d3d3" />
                  <rect y="60" width="100" height="10" rx="8" fill="#d3d3d3" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden min-[830px]:flex items-center gap-6 ml-auto">
            <span className="cursor-pointer hover:text-slate-200 text-sm">
              <Link to="login">Login</Link>
            </span>
            <span
              className="cursor-pointer hover:text-slate-200 text-sm whitespace-nowrap"
              onClick={() => toggleCart()}
            >
              {`Cart (${getTotalQuantity()})`}
            </span>
          </div>
        </div>
      </header>
      {menuOpen && (
        <nav className="px-10 bg-gray-200 min-[830px]:hidden">
          <ul className="py-3 flex flex-col gap-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="py-3 text-center capitalize cursor-pointer text-gray-800 hover:text-gray-700"
                onClick={closeMenu}
              >
                <Link to={`category/${cat.toLowerCase()}`}>{cat}</Link>
              </li>
            ))}
          </ul>
          <hr className="mb-4 border-t border-slate-300" />
          <div className="pb-4 flex flex-col justify-center items-center gap-3">
            <span
              className="cursor-pointer text-gray-800 hover:text-gray-700"
              onClick={closeMenu}
            >
              <Link to="login">Login</Link>
            </span>
            <span
              className="cursor-pointer text-gray-800 hover:text-gray-700"
              onClick={closeMenu}
            >
              <Link to="cart">{`Cart (${getTotalQuantity()})`}</Link>
            </span>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
