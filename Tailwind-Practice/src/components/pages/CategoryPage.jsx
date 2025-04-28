import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Category() {
  let { category } = useParams(); // Extract category name
  const [categoryImage, setCategoryImage] = useState(); // Background image for header
  const [products, setProducts] = useState([]); // Sets products for the current category

  //console.log("Category from useParams:", category); // Debugging log

  const getCategoryImage = (cat) => {
    // display hero bg-image based on category
    switch (cat) {
      case "men's clothing":
        return "mens-category-bg.webp";
      case "jewelery":
        return "jewelry-category-bg.jpeg";
      case "electronics":
        return "electronics-category-bg.jpeg";
      case "women's clothing":
        return "womens-category-bg.jpeg";
      default:
        return "";
    }
  };

  useEffect(() => {
    setCategoryImage(getCategoryImage(category));
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error(error));

    setCategoryImage(getCategoryImage(category));
  }, [category]); // Re-fetch if category changes

  return (
    <>
      <section
        style={{ backgroundImage: `url(/${categoryImage})` }}
        className="relative py-25 sm:py-30 lg:py-35 bg-center bg-cover bg-no-repeat"
      >
        <h1 className="z-20 relative text-center text-slate-200 font-bold text-3xl sm:text-4xl lg:text-5xl capitalize">
          {category}
        </h1>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </section>
      <section className="flex justify-center px-5 py-5 bg-gray-50 text-gray-600">
        <div className="flex flex-col justify-center lg:max-w-6xl">
          <p className="mb-5">{`Showing all ${products.length} results`}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div key={product.id}>
                <div className="mb-5 aspect-square bg-white">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>

                <div className="flex flex-col">
                  <Link to={`/product/${product.id}`}>
                    <span className="font-medium text-sm">{product.title}</span>
                  </Link>
                  <span className="font-semibold text-md text-indigo-950">{`$${product.price.toFixed(
                    2
                  )}`}</span>
                  <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600">
                    {Array.from({ length: 5 }, (_, i) => {
                      const roundedRating =
                        Math.round(product.rating.rate * 2) / 2;
                      const starNumber = i + 1;
                      if (roundedRating >= starNumber) {
                        return <FaStar key={i} color="#ffc107" />; // yellow star
                      }
                      if (roundedRating + 0.5 >= starNumber) {
                        return <FaRegStarHalfStroke key={i} color="#ffc107" />; // half star
                      } else {
                        return <FaStar key={i} color="#e4e5e9" />;
                      }
                    })}
                    <span className="ml-2">{`(${product.rating.count})`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
