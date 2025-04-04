/*import React, { useState, useEffect } from "react";
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

				console.log(names);

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
		<section className="px-5 pt-5 pb-20 lg:px-10">
			<h1 className="mb-5 font-bold text-2xl">Shop by category</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{categories &&
					categories.map((cat, index) => (
						<Link to={`category/${cat.name.toLowerCase()}`} key={index}>
							<div className="py-4 w-full h-40 flex flex-col justify-between items-center text-center rounded-sm bg-gray-50 drop-shadow-sm hover:drop-shadow-md transition duration-300" key={index}>
								<div>
									<img className="w-28 h-28 object-contain" src={cat.image} />
									<span>{cat.name}</span>
								</div>
							</div>
						</Link>
					))}
			</div>
		</section>
	);
}

export default Categories;
*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Categories() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

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
				setLoading(false);
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
			});
	}, []);

	// Helper function to render skeleton items
	const renderSkeletons = () => {
		// Create an array of skeleton items (assuming there will be around 6 categories)
		const skeletonCount = 6;
		return Array(skeletonCount)
			.fill(0)
			.map((_, index) => (
				<div className="py-4 w-full h-40 flex flex-col justify-between items-center text-center rounded-sm bg-gray-50 drop-shadow-sm" key={index}>
					<div>
						<Skeleton width={112} height={112} className="mb-2" baseColor="#f3f4f6" highlightColor="#e5e7eb" />
						<Skeleton width={80} baseColor="#f3f4f6" highlightColor="#e5e7eb" />
					</div>
				</div>
			));
	};

	return (
		<section className="px-5 pt-5 pb-20 lg:px-10">
			<h1 className="mb-5 font-bold text-2xl">Shop by category</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{loading
					? renderSkeletons()
					: categories.map((cat, index) => (
							<Link to={`category/${cat.name.toLowerCase()}`} key={index}>
								<div className="py-4 w-full h-40 flex flex-col justify-between items-center text-center rounded-sm bg-gray-50 drop-shadow-sm hover:drop-shadow-md transition duration-300" key={index}>
									<div>
										<img className="w-28 h-28 object-contain" src={cat.image} />
										<span>{cat.name}</span>
									</div>
								</div>
							</Link>
					  ))}
			</div>
		</section>
	);
}

export default Categories;
