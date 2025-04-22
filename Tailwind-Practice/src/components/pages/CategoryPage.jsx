import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Category() {
	let { category } = useParams(); // Extract category name
	const [categoryImage, setCategoryImage] = useState(); // Background image for header
	const [products, setProducts] = useState([]); // Sets products for the current category

	console.log("Category from useParams:", category); // Debugging log

	const getCategoryImage = (cat) => {
		// display hero bg-image based on category
		switch(cat) {
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
	}

	useEffect(() => {
		setCategoryImage(getCategoryImage(category));
	}, []);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${category}`)
			.then(response => response.json())
			.then(data => {
				setProducts(data);
				console.log(data)
			})
			.catch(error => console.error(error));

			setCategoryImage(getCategoryImage(category));
	}, [category]); // Re-fetch if category changes

	return (
		<>
			<section style={{ backgroundImage: `url(/${categoryImage})` }} className="relative py-25 sm:py-30 lg:py-35 bg-center bg-cover bg-no-repeat">
				<h1 className="z-20 relative text-center text-slate-200 font-bold text-3xl sm:text-4xl lg:text-5xl capitalize">{category}</h1>
				<div className="absolute inset-0 bg-black opacity-60 z-10"></div>
			</section>
			<section className="px-5 py-8 text-gray-600">
				<p>{`Showing all ${products.length} results`}</p>
				<div className="flex justify-center items-center">
					<div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-6xl">
						{products.map(product => (
							<div key={product.id} className="flex flex-col place-content-between">
								<img src={product.image} />
								<div>
									<p>{product.title}</p>
									<p>{`$${product.price}`}</p>
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
