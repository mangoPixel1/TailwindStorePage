import React, { useState, useEffect } from "react";

function Categories() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				// Extract all categories from products list, avoid duplicate names
				let categoryNames = [];
				data.forEach(item => {
					if (!categoryNames.includes(item.category)) {
						categoryNames.push(item.category);
					}
				});

				// Capitalize first letter of each category
				const names = categoryNames.map(name => {
					return name.charAt(0).toUpperCase() + name.slice(1);
				});

				console.log(names);

				// Ask AI for more efficient approach
				// Loop through products and find first matching product for each category
				let categoryData = [];
				categoryNames.forEach(name => {
					const product = data.find(product => product.category === name);
					const newCategoryEntry = {
						name: name.charAt(0).toUpperCase() + name.slice(1),
						image: product.image
					};
					categoryData.push(newCategoryEntry);
				});

				console.log(categoryData);

				setCategories(categoryData);
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<section className="px-15 pt-5 pb-20 sm:px-20 md:px-25 lg:px-30 xl:px-40 2xl:px-55">
			<h1 className="mb-5 font-bold text-2xl">Shop by category</h1>
			<div className="flex flex-wrap justify-center gap-5">
				{categories &&
					categories.map((cat, index) => (
						<div className="flex flex-col justify-between align-center text-center w-40 h-40 border-2 border-solid" key={index}>
							<img className="h-30" src={cat.image} />
							<span>{cat.name}</span>
						</div>
					))}
			</div>
		</section>
	);
}

export default Categories;

// use circular images for categories
// <img src={cat.image} />
// <span>{cat.name}</span>
