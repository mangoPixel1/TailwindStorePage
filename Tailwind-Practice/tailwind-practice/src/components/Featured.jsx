import { useState, useEffect } from "react";

function Featured() {
	const [products, setProducts] = useState([]);
	const [featuredProduct, setFeaturedProduct] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setProducts(data);

				// Get a random product to use in featured section
				const featuredIndex = Math.floor(Math.random() * data.length);
				const featuredProduct = data[featuredIndex];

				// Shorten description to 150 character limit
				let description = featuredProduct.description.length > 150 ? featuredProduct.description.slice(0, 149) : featuredProduct.description;
				featuredProduct.description = description.concat("...");

				setFeaturedProduct(featuredProduct);
				setIsLoading(false);
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<section
			className="w-full p-24 lg:px-60 bg-top bg-no-repeat relative text-slate-300"
			style={{
				backgroundImage: `url(${featuredProduct && featuredProduct.image})`
			}}
		>
			{/* Darken overlay */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{isLoading ? (
				<h1>Loading ...</h1>
			) : (
				<div className="flex flex-col justify-center items-start relative z-10">
					<h1 className="text-3xl  font-extrabold">{featuredProduct && featuredProduct.title}</h1>
					<p className="py-3 text-sm text-slate-400">{featuredProduct && featuredProduct.description}</p>
					<button className="px-5 py-2 text-slate-200 bg-slate-600 transition duration-350 hover:bg-slate-700 rounded-sm cursor-pointer">Shop Now</button>
				</div>
			)}
		</section>
	);
}

export default Featured;
