import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

// Context
import { CartContext } from "../../CartContext";

function ProductPage() {
  let { product } = useParams(); // Extract product name
  const [productData, setProductData] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [showToastNotif, setShowToastNotif] = useState(false);
  const timeoutRef = useRef();

  const { addItem, toggleCart } = useContext(CartContext);

  // Fetch product data
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setProductData(data);
      });
  }, [product]);

  function handleAddToCart() {
    const itemObj = {
      data: {
        id: productData.id,
        title: productData.title,
        category: productData.category,
        description: productData.description,
        price: productData.price,
        image: productData.image,
      },
      quantity: parseInt(selectedQuantity),
    };

    addItem(itemObj);
    setSelectedQuantity(1);
    //toggleCart();

    setShowToastNotif(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Show toast notification for 3 seconds
    timeoutRef.current = setTimeout(() => {
      setShowToastNotif(false);
    }, 3000);
  }

  return (
    <>
      {showToastNotif && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-80 flex justify-between px-3 py-3 text-slate-700 bg-slate-300 border-2 border-slate-700">
          <div className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="#64748b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span>Added item to cart</span>
            <Link to="/cart">
              <span className="underline">View cart</span>
            </Link>
          </div>

          <div className="invisible">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="#64748b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
      <section className="flex justify-center bg-gray-50">
        {productData && (
          <div className="lg:max-w-7xl p-5 md:px-10">
            <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
              <div className="md:max-w-1/2">
                <div className="text-sm text-gray-500">
                  <span>
                    <Link to={`/`}>{`Home > `}</Link>
                  </span>
                  <span className="capitalize">
                    <Link
                      to={`/category/${productData.category}`}
                    >{`${productData.category} > `}</Link>
                  </span>
                  <span>{productData.title}</span>
                </div>
                <div className="aspect-square bg-white mt-5">
                  <img
                    src={productData.image}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="md:max-w-1/2 md:mt-10">
                <h1 className="mb-2 text-lg md:text-2xl font-semibold">
                  {productData.title}
                </h1>
                <div className="flex flex-col md:flex-row md:place-content-between md:items-center">
                  <div className="flex gap-2 items-center">
                    <p className="text-2xl">{`$${productData.price.toFixed(
                      2
                    )}`}</p>
                    <p className="text-gray-600">& shipping</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600">
                    {Array.from({ length: 5 }, (_, i) => {
                      const roundedRating =
                        Math.round(productData.rating.rate * 2) / 2;
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
                    <span className="ml-2">{`(${productData.rating.count})`}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 my-5">
                  {productData.description}
                </p>
                <div>
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(e.target.value)}
                    className="pl-5 py-1 mr-3 border border-gray-300 rounded-none"
                  />
                  <button
                    className="px-3 py-1 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer"
                    onClick={() => handleAddToCart()}
                  >
                    Add to Cart
                  </button>
                </div>
                <hr className="my-8 border-t border-slate-300" />
                <div className="flex justify-center md:justify-start text-center md:text-left">
                  <div>
                    <h3 className="mb-2">Secure Payment Methods</h3>
                    <div className="flex gap-4">
                      <div>
                        <img src="/icons/visa.svg" alt="Visa" className="h-8" />
                      </div>
                      <div>
                        <img
                          src="/icons/mastercard-alt.svg"
                          alt="MasterCard"
                          className="h-8"
                        />
                      </div>
                      <div>
                        <img
                          src="/icons/discover.svg"
                          alt="Discover"
                          className="h-8"
                        />
                      </div>
                      <div>
                        <img
                          src="/icons/american-express.svg"
                          alt="American Express"
                          className="h-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-8 border-t border-slate-300" />
            <div className="mb-15">
              <h3>{`Reviews (0)`}</h3>
              <p className="font-lighter text-gray-600">
                There are no reviews yet.
              </p>
            </div>
            <div className="p-5 border border-slate-300">
              <div className="mb-4 flex items-center">
                <span className="mr-3">Your rating:</span>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} color="#e4e5e9" />
                ))}
              </div>
              <div className="mb-4 flex flex-col">
                <span>Your review:</span>
                <textarea className="px-3 py-2 h-20 border border-gray-300" />
              </div>
              <div className="mb-4 flex flex-col md:flex-row md:gap-5">
                <div className="flex flex-col md:w-1/2">
                  <span>Name</span>
                  <input
                    type="text"
                    className="px-3 py-2 h-10 border border-gray-300"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <span>Email</span>
                  <input
                    type="text"
                    className="px-3 py-2 h-10 border border-gray-300"
                  />
                </div>
              </div>
              <button className="px-3 py-1 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ProductPage;

/*import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

// Context
import { CartContext } from "../../CartContext";

// Components
import CartDrawer from "../CartDrawer";

function ProductPage() {
  let { product } = useParams(); // Extract product name
  const [productData, setProductData] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [isMdOrLarger, setIsMdOrLarger] = useState(false);
  const { isCartOpen, addItem, toggleCart, closeCart } =
    useContext(CartContext);

  const cartRef = useRef();

  // Listen for clicks outside CartDrawer
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideCartClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideCartClick);
    };
  }, [isCartOpen]);

  // Detect window size to determine whether to show cart drawer for md breakpoint
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Fetch product data
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  }, [product]);

  function handleAddToCart() {
    const itemObj = {
      data: {
        id: productData.id,
        title: productData.title,
        category: productData.category,
        description: productData.description,
        price: productData.price,
        image: productData.image,
      },
      quantity: parseInt(selectedQuantity),
    };

    addItem(itemObj);
    setSelectedQuantity(1);
    toggleCart();
  }

  function handleOutsideCartClick(event) {
    if (
      isCartOpen &&
      cartRef.current &&
      !cartRef.current.contains(event.target)
    ) {
      closeCart();
    }
  }

  function handleWindowResize() {
    if (window.innerWidth >= 768) {
      setIsMdOrLarger(true);
    } else {
      setIsMdOrLarger(false);
    }
  }

  return (
    <section className="flex justify-center bg-gray-50">
      {isCartOpen && isMdOrLarger && (
        <div className="fixed inset-0 z-40">
          <div
            onClick={() => closeCart()}
            className="absolute inset-0 bg-black/30"
          ></div>

          <div
            className="absolute right-0 top-0 w-80 h-full bg-white shadow-lg z-50"
            ref={cartRef}
          >
            <CartDrawer />
          </div>
        </div>
      )}
      {productData && (
        <div className="lg:max-w-7xl p-5 md:px-10">
          <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
            <div className="md:max-w-1/2">
              <div className="text-sm text-gray-500">
                <span>
                  <Link to={`/`}>{`Home > `}</Link>
                </span>
                <span className="capitalize">
                  <Link
                    to={`/category/${productData.category}`}
                  >{`${productData.category} > `}</Link>
                </span>
                <span>{productData.title}</span>
              </div>
              <div className="aspect-square bg-white mt-5">
                <img
                  src={productData.image}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="md:max-w-1/2 md:mt-10">
              <h1 className="mb-2 text-lg md:text-2xl font-semibold">
                {productData.title}
              </h1>
              <div className="flex flex-col md:flex-row md:place-content-between md:items-center">
                <div className="flex gap-2 items-center">
                  <p className="text-2xl">{`$${productData.price.toFixed(
                    2
                  )}`}</p>
                  <p className="text-gray-600">& shipping</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600">
                  {Array.from({ length: 5 }, (_, i) => {
                    const roundedRating =
                      Math.round(productData.rating.rate * 2) / 2;
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
                  <span className="ml-2">{`(${productData.rating.count})`}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 my-5">
                {productData.description}
              </p>
              <div>
                <input
                  type="number"
                  min={1}
                  max={99}
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                  className="pl-5 py-1 mr-3 border border-gray-300 rounded-none"
                />
                <button
                  className="px-3 py-1 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer"
                  onClick={() => handleAddToCart()}
                >
                  Add to Cart
                </button>
              </div>
              <hr className="my-8 border-t border-slate-300" />
              <div className="flex justify-center md:justify-start text-center md:text-left">
                <div>
                  <h3 className="mb-2">Secure Payment Methods</h3>
                  <div className="flex gap-4">
                    <div>
                      <img src="/icons/visa.svg" alt="Visa" className="h-8" />
                    </div>
                    <div>
                      <img
                        src="/icons/mastercard-alt.svg"
                        alt="MasterCard"
                        className="h-8"
                      />
                    </div>
                    <div>
                      <img
                        src="/icons/discover.svg"
                        alt="Discover"
                        className="h-8"
                      />
                    </div>
                    <div>
                      <img
                        src="/icons/american-express.svg"
                        alt="American Express"
                        className="h-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-8 border-t border-slate-300" />
          <div className="mb-15">
            <h3>{`Reviews (0)`}</h3>
            <p className="font-lighter text-gray-600">
              There are no reviews yet.
            </p>
          </div>
          <div className="p-5 border border-slate-300">
            <div className="mb-4 flex items-center">
              <span className="mr-3">Your rating:</span>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} color="#e4e5e9" />
              ))}
            </div>
            <div className="mb-4 flex flex-col">
              <span>Your review:</span>
              <textarea className="px-3 py-2 h-20 border border-gray-300" />
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:gap-5">
              <div className="flex flex-col md:w-1/2">
                <span>Name</span>
                <input
                  type="text"
                  className="px-3 py-2 h-10 border border-gray-300"
                />
              </div>
              <div className="flex flex-col md:w-1/2">
                <span>Email</span>
                <input
                  type="text"
                  className="px-3 py-2 h-10 border border-gray-300"
                />
              </div>
            </div>
            <button className="px-3 py-1 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductPage;
*/
