import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Featured() {
	const [featuredIndex, setFeaturedIndex] = useState(0); // Index of featuredItems for currently displayed featured product
	const [featuredProducts, setFeaturedProducts] = useState([]); // Array of objects containing three featured products
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(response => response.json())
			.then(data => {
				//console.log(data);

				// Get three random unique products to use in featured section
				let featuredIndices = [];
				while (featuredIndices.length < 3) {
					const randomIndex = Math.floor(Math.random() * data.length);

					if (!featuredIndices.includes(randomIndex)) {
						featuredIndices.push(randomIndex);
					}
				}

				// Store corresponding product objects in an array
				let featuredArr = [];
				featuredIndices.forEach(index => {
					const product = data[index];

					// Shorten description to 150 character limit and add ellipsis at the end
					let description = product.description.length > 150 ? product.description.slice(0, 149) : product.description;
					product.description = description.concat("...");

					featuredArr.push(product);
				});

				setFeaturedProducts(featuredArr); // Add the three products to featuredProducts array
				setIsLoading(false);

				console.log(featuredArr);
			})
			.catch(error => console.error(error));
	}, []);

	function handlePrevClick() {
		if (featuredIndex === 0) {
			setFeaturedIndex(prev => featuredProducts.length - 1);
		} else {
			setFeaturedIndex(prev => prev - 1);
		}
	}

	function handleNextClick() {
		if (featuredIndex !== featuredProducts.length - 1) {
			setFeaturedIndex(prev => prev + 1);
		} else {
			setFeaturedIndex(0);
		}
	}

	return (
		<section
			className="w-full flex justify-center bg-top bg-no-repeat relative text-slate-300"
			style={{
				backgroundImage: featuredProducts.length > 0 && featuredProducts[featuredIndex] ? `url(${featuredProducts[featuredIndex].image})` : "none"
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>

			<div className="flex flex-col gap-10 justify-center items-center w-full px-3 py-10 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
				<div className="flex justify-center items-center">
					<svg onClick={handlePrevClick} xmlns="http://www.w3.org/2000/svg" className="z-10 h-6 w-6 shrink-0 mr-5 sm:mr-10 lg:mr-20 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
					{isLoading ? (
						<h1 className="relative z-10">Loading ...</h1>
					) : (
						<div className="flex flex-col justify-center items-start relative z-10">
							<p className="text-sm">Trending</p>
							<h1 className="text-2xl sm:text-3xl font-extrabold">{featuredProducts && featuredProducts[featuredIndex].title}</h1>
							<p className="py-3 text-sm text-slate-400">{featuredProducts && featuredProducts[featuredIndex].description}</p>
							<p className="pb-3 text-xl">{featuredProducts && `$${featuredProducts[featuredIndex].price.toFixed(2)}`}</p>
							<button className="px-5 py-2 text-slate-200 bg-slate-600 transition duration-350 hover:bg-slate-700 rounded-sm cursor-pointer">
								<Link to="categories">Shop Now</Link>
							</button>
						</div>
					)}
					<svg onClick={handleNextClick} xmlns="http://www.w3.org/2000/svg" className="z-10 h-6 w-6 shrink-0 ml-5 sm:mr-10 lg:ml-20 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</div>
				<div className="flex gap-2 z-10">
					<div className={`h-2 w-2 ${featuredIndex === 0 ? `bg-slate-300` : `bg-slate-400`} rounded-full`}></div>
					<div className={`h-2 w-2 ${featuredIndex === 1 ? `bg-slate-300` : `bg-slate-400`} rounded-full`}></div>
					<div className={`h-2 w-2 ${featuredIndex === 2 ? `bg-slate-300` : `bg-slate-400`} rounded-full`}></div>
				</div>
			</div>
		</section>
	);
}

export default Featured;
