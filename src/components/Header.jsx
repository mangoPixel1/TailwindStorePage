import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [categories, setCategories] = useState([]);
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

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

  useEffect(() => {
    console.log(`menu expanded: ${menuIsExpanded}`);
  }, [menuIsExpanded]);

  const toggleMenu = () => {
    setMenuIsExpanded((prev) => !prev);
  };

  return (
    <header className="px-5 md:px-10 py-5 flex justify-center bg-slate-500 text-white">
      <div className="flex items-center justify-between w-full lg:max-w-7xl">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl min-[600px]:text-3xl font-bold">
              <Link to="/">Fake Store</Link>
            </h1>

            <nav className="hidden min-[800px]:block">
              <ul className="flex gap-4">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-slate-200"
                  >
                    <Link to={`category/${cat.toLowerCase()}`}>{cat}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button
            className="min-[800px]:hidden cursor-pointer"
            onClick={toggleMenu}
          >
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
          </button>
        </div>

        <div className="hidden min-[800px]:flex items-center gap-6 ml-auto">
          <span className="cursor-pointer hover:text-slate-200 text-sm">
            <Link to="login">Login</Link>
          </span>
          <span className="cursor-pointer hover:text-slate-200 text-sm">
            <Link to="cart">Cart</Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

/*
return (
    <header className="flex justify-between items-baseline flex-col gap-y-4 lg:flex-row bg-slate-500 p-6 text-slate-100">
      <div className="flex items-center">
        <h1 className="text-slate-200 text-2xl font-bold mr-10">
          <Link to="/">Fake Store</Link>
        </h1>
        <nav>
          <ul className="flex flex-wrap space-x-5">
            {categories.map((cat, index) => (
              <li key={index} className="cursor-pointer hover:text-slate-200">
                <Link to={`category/${cat.toLowerCase()}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <span className="cursor-pointer hover:text-slate-200">
          <Link to="search">Search</Link>
        </span>
        <span className="cursor-pointer hover:text-slate-200">
          <Link to="login">Login</Link>
        </span>
        <span className="cursor-pointer hover:text-slate-200">
          <Link to="cart">Cart</Link>
        </span>
      </div>
    </header>
  );
*/
