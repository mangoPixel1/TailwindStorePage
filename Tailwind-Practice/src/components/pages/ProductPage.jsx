import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductPage() {
  let { product } = useParams(); // Extract product name
  const [productData, setProductData] = useState();

  console.log("Product from useParams:", product); // Debugging log

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  }, [product]);

  return (
    <section className="flex justify-center bg-gray-50">
      {productData && (
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row lg:max-w-7xl p-5">
          <div className="md:max-w-1/2">
            <span className="text-sm text-gray-500">{`Home > ${productData.category} > ${productData.title}`}</span>
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
            <div className="flex gap-2 items-center">
              <p className="text-2xl">{`$${productData.price.toFixed(2)}`}</p>
              <p className="text-gray-600">& shipping</p>
            </div>
            <p className="text-sm text-gray-600 my-5">
              {productData.description}
            </p>
            <div>
              <input
                type="number"
                min={1}
                max={99}
                defaultValue={1}
                className="pl-5 py-1 mr-3 border border-gray-300 rounded-none"
              />
              <button className="px-3 py-1 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">
                Add to Cart
              </button>
            </div>
            <hr className="my-8 border-t border-slate-300" />
            <h3>Secure Payment Methods</h3>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductPage;
