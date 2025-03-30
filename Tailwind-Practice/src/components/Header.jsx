import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
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
		<header className="flex justify-between items-baseline flex-col gap-y-4 lg:flex-row bg-slate-500 p-6 text-slate-100">
			<div className="flex items-center">
				<h1 className="text-slate-200 text-2xl font-bold mr-10">
					<Link to="/">Fake Store</Link>
				</h1>
				<nav>
					<ul className="flex  flex-wrap space-x-5">
						{categories.map((cat, index) => (
							<li key={index} className="cursor-pointer hover:text-slate-200">
								{cat}
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className="flex items-center space-x-3">
				<span className="cursor-pointer hover:text-slate-200">
					<Link to="search">Search</Link>
				</span>
				<span className="cursor-pointer hover:text-slate-200">
					<Link to="login">Sign in</Link>
				</span>
				<span className="cursor-pointer hover:text-slate-200">
					<Link to="cart">Cart</Link>
				</span>
			</div>
		</header>
	);
}

export default Header;

/*
<span className="cursor-pointer hover:text-slate-200">
					<Link to="account">Account</Link>
				</span>
				<span className="cursor-pointer hover:text-slate-200">
					<Link to="favorites">Favorites</Link>
				</span>
*/
