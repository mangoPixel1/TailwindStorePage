import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Category() {
	let { category } = useParams(); // Extract category name
	const [products, setProducts] = useState([]);

	console.log("Category from useParams:", category); // Debugging log

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${category}`)
			.then(response => response.json())
			.then(data => {
				setProducts(data);
			})
			.catch(error => console.error(error));
	}, [category]); // Re-fetch if category changes

	return (
		<div>
			<h1 className="text-slate-900 text-3xl font-semibold capitalize">{category}</h1>
			<ul>
				{products.map(product => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
}

export default Category;
