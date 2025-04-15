import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
	const [categories, setCategories] = useState([]); // objects with the properties: name, image

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

				//console.log(names);

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

				//console.log(categoryData);

				setCategories(categoryData);
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<section className="px-8 py-15 lg:px-10">
			<h1 className="text-slate-800 mb-15 lg:mb-10 font-semibold text-3xl lg:text-4xl text-center">Shop by Category</h1>
			<div className="grid grid-cols-1 gap-14 md:grid-cols-4 md:gap-10">
				{categories &&
					categories.map((cat, index) => (
						<Link to={`category/${cat.name.toLowerCase()}`} key={index}>
							<div className="flex flex-col items-center gap-5 px-5 py-0 lg:py-12" key={index}>
								<img className="w-full max-w-72 max-h-72 md:max-w-48 md:max-h-48 object-contain" src={cat.image} />
								<span className="text-slate-700 text-lg font-medium">{cat.name}</span>
							</div>
						</Link>
					))}
			</div>
		</section>
	);
}

export default Categories;
