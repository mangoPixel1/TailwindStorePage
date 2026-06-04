import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]); // objects with the properties: name, image

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        const seen = {};
        data.forEach((product) => {
          if (!seen[product.category]) {
            seen[product.category] = product.image;
          }
        });
        const categoryData = Object.entries(seen).map(([name, image]) => ({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          image,
        }));
        setCategories(categoryData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="px-8 py-15 lg:px-10">
      <h1 className="text-slate-800 mb-15 lg:mb-10 font-semibold text-3xl lg:text-4xl text-center">
        Shop by Category
      </h1>
      <div className="px-5 sm:px-0 grid grid-cols-1 gap-14 sm:grid-cols-4 md:gap-10 lg:max-w-3/4 lg:mx-auto">
        {!categories ? (
          <p>Loading...</p>
        ) : (
          categories.map((cat, index) => (
            <Link to={`category/${cat.name.toLowerCase()}`} key={index}>
              <div
                className="flex flex-col justify-between items-center gap-5 w-full h-full px-5 py-0 lg:py-12"
              >
                <div className="aspect-square w-full relative bg-white">
                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    src={cat.image}
                    alt={cat.name}
                  />
                </div>

                <span className="capitalize block text-slate-700 text-sm md:text-base font-medium">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default Categories;
