import React, { useEffect } from "react";

// Components
import Featured from "../Featured";
import Categories from "../Categories";

function Home() {
	const perks = [
		{
			id: 1,
			title: "Free Shipping",
			text: "Orders over $50"
		},
		{
			id: 2,
			title: "Easy Returns",
			text: "30 days after purchase"
		},
		{
			id: 3,
			title: "24/7 Support",
			text: "Customer support"
		}
	];

	return (
		<>
			<section className="flex justify-center align-middle px-5 py-20 sm:px-10 md:px-40 md:py-50 lg:h-screen bg-gray-500">
				<div className="flex flex-col gap-5 text-center text-slate-100 w-full md:w-lg">
					<p className="tracking-wider text-lg">WELCOME TO FAKE STORE</p>
					<h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Nothing's Real. Except Your Desire To Shop</h1>
					<button className="px-5 py-3 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">Treat Yo Self Anyway</button>
				</div>
			</section>
			<section className="w-full bg-slate-100">
				<div className="py-30 mx-10 gap-5 flex flex-col justify-center items-center sm:flex-row sm:gap-10">
					{perks.map(perk => (
						<div key={perk.id} className="bg-slate-50 w-50 h-20 flex flex-col justify-center items-center border-2 border-solid border-indigo-900 text-center p-4">
							<h3 className="font-semibold">{perk.title}</h3>
							<span className="text-sm">{perk.text}</span>
						</div>
					))}
				</div>
			</section>
			<Featured />
			<Categories />
		</>
	);
}

export default Home;

/*
Inspiration: https://websitedemos.net/generic-ecommerce-02/?customize=template
Sections to add:
	More perks with icons: secure payment, excellent service
	Trending products
	Categories with larger images and not bg/border
	Small about section with sales stats (103k products sold, 98% customer satisfaction)
	Trending products
	Customer feedback, include quote icon and customer profile pic
*/
