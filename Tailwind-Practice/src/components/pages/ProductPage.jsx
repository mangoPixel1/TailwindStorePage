import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductPage() {
  let { product } = useParams(); // Extract product name
  const [productData, setProductData] = useState();

  console.log("Product from useParams:", product); // Debugging log

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  }, [product]);

  return (
    <div>
      {productData && (
        <div>
          <h1>{`This is the product page for ${productData.title}`}</h1>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
