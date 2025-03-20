import React, { useEffect } from "react";

// Components
import Featured from "./Featured";
import Categories from "./Categories";

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
			<Featured />
			<section className="w-full">
				<div className="py-10 mx-10 gap-5 flex flex-col justify-center items-center sm:flex-row sm:gap-10">
					{perks.map(perk => (
						<div key={perk.id} className="w-50 h-20 flex flex-col justify-center items-center border-2 border-solid border-indigo-900 text-center p-4">
							<h3 className="font-semibold">{perk.title}</h3>
							<span className="text-sm">{perk.text}</span>
						</div>
					))}
				</div>
			</section>
			<Categories />
		</>
	);
}

export default Home;
