import React, { useEffect } from "react";

// Components
import Featured from "./Featured";

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
				<div className="py-10 md:flex md:flex-row md:justify-center md:align-middle md:gap-10">
					{perks.map(perk => (
						<div key={perk.id} className="inline-block px-10 py-2 border-2 border-solid border-indigo-900">
							<h3 className="font-semibold">{perk.title}</h3>
							<span className="text-sm">{perk.text}</span>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default Home;

// MAKE DIVS RESPONSIVE!!!!!
