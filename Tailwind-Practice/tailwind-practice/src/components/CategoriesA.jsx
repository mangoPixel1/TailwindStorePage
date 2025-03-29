import React, { useState, useEffect } from "react";

function Categories() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://fakestoreapi.com/products`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				// Extract all categories from products list, avoid duplicate names
				const categoryNames = [...new Set(data.map(item => item.category))];

				// Create category data with the first product image for each category
				const categoryData = categoryNames.map(name => {
					const product = data.find(product => product.category === name);
					return {
						name: name.charAt(0).toUpperCase() + name.slice(1),
						image: product.image
					};
				});

				setCategories(categoryData);
				setLoading(false);
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
			});
	}, []);

	return (
		<section className="px-4 pt-5 pb-20 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
			<h1 className="mb-5 font-bold text-2xl">Shop by category</h1>

			{loading ? (
				<div className="flex justify-center">
					<p>Loading categories...</p>
				</div>
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{categories.map((cat, index) => (
						<div className="flex flex-col items-center bg-gray-100 rounded p-4 shadow transition-all duration-200 hover:shadow-lg" key={index}>
							<div className="w-full h-40 flex items-center justify-center mb-2 overflow-hidden">
								<div className="h-32 w-32 bg-white rounded-full flex items-center justify-center p-2 overflow-hidden">
									<img className="h-24 w-24 object-contain rounded-full" src={cat.image} alt={cat.name} />
								</div>
							</div>
							<span className="font-medium text-center">{cat.name}</span>
						</div>
					))}
				</div>
			)}
		</section>
	);
}

export default Categories;
