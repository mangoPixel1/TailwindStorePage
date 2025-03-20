import React, { useState, useEffect } from "react";

function Categories() {
	const [categories, setCategories] = useState([]);

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

				setCategories(names);
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<div className="mx-10">
			<h1 className="font-bold text-2xl">Shop by category</h1>
			<p>text</p>
		</div>
	);
}

export default Categories;

// use circular images for categories
