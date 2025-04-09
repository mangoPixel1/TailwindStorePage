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

					// Shorten description to 150 character limit
					let description = product.description.length > 150 ? product.description.slice(0, 149) : product.description;
					product.description = description.concat("...");

					featuredArr.push(product);
				});

				setFeaturedProducts(featuredArr); // Add the three productst to featured items array
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
					<div className="h-2 w-2 bg-slate-400 rounded-full"></div>
					<div className="h-2 w-2 bg-slate-300 rounded-full"></div>
					<div className="h-2 w-2 bg-slate-300 rounded-full"></div>
				</div>
			</div>
		</section>
	);
}

export default Featured;

/*

*/

/*
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Featured() {
	const [products, setProducts] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(response => response.json())
			.then(data => {
				setProducts(data);

				// Get three random products to feature
				const selectedIndexes = [];
				const selected = [];

				// Select three unique random products
				while (selectedIndexes.length < 3 && selectedIndexes.length < data.length) {
					const randomIndex = Math.floor(Math.random() * data.length);
					if (!selectedIndexes.includes(randomIndex)) {
						selectedIndexes.push(randomIndex);
						const product = { ...data[randomIndex] };

						// Shorten description to 150 character limit
						let description = product.description.length > 150 ? product.description.slice(0, 149) : product.description;

						product.description = description.concat("...");
						selected.push(product);
					}
				}

				setFeaturedProducts(selected);
				setIsLoading(false);
			})
			.catch(error => {
				console.error("Error fetching products:", error);
				setIsLoading(false);
			});
	}, []);

	const changeProduct = newIndex => {
		// Set transitioning state to trigger fade effect
		setIsTransitioning(true);

		// Change product after a short delay for the fade out
		setTimeout(() => {
			setCurrentIndex(newIndex);
			// Allow a moment for the new content to render before fading back in
			setTimeout(() => {
				setIsTransitioning(false);
			}, 50);
		}, 200);
	};

	const nextProduct = () => {
		const newIndex = currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1;
		changeProduct(newIndex);
	};

	const prevProduct = () => {
		const newIndex = currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1;
		changeProduct(newIndex);
	};

	// Current featured product
	const currentProduct = featuredProducts[currentIndex];

	return (
		<section
			className="w-full flex justify-center bg-top bg-no-repeat bg-contain relative text-slate-300"
			style={{
				backgroundImage: `url(${currentProduct && currentProduct.image})`,
				backgroundSize: "auto 100%",
				backgroundPosition: "center"
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>

			<div className="w-full px-5 py-10 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
				{isLoading ? (
					<h1 className="relative z-10">Loading ...</h1>
				) : (
					<div className="flex flex-col justify-center items-start relative z-10 min-h-[300px]">
						<div className={`w-full transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
							<p className="text-sm">Trending</p>

							<h1 className="text-2xl sm:text-3xl font-extrabold">{currentProduct && currentProduct.title}</h1>
							<p className="py-3 text-sm text-slate-400">{currentProduct && currentProduct.description}</p>

							<p className="text-xl font-bold text-slate-200 mb-4">${currentProduct && currentProduct.price.toFixed(2)}</p>

							<button className="px-5 py-2 text-slate-200 bg-slate-600 transition duration-350 hover:bg-slate-700 rounded-sm cursor-pointer">View Details</button>
						</div>

						<div className="flex justify-between w-full mt-8">
							<button onClick={prevProduct} className="p-2 bg-slate-800 bg-opacity-50 rounded-full text-slate-200 hover:bg-opacity-70 transition-all" aria-label="Previous product">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							<button onClick={nextProduct} className="p-2 bg-slate-800 bg-opacity-50 rounded-full text-slate-200 hover:bg-opacity-70 transition-all" aria-label="Next product">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</button>
						</div>

						<div className="flex justify-center space-x-2 w-full mt-4">
							{featuredProducts.map((_, index) => (
								<button key={index} onClick={() => changeProduct(index)} className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-slate-100" : "bg-slate-500"}`} aria-label={`Go to product ${index + 1}`} />
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Featured;
*/

/*
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
*/
