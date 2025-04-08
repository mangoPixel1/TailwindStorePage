import React, { useEffect } from "react";

// Components
import Featured from "../Featured";
import Categories from "../Categories";

function Home() {
	const perks = [
		{
			id: 1,
			title: "Free Shipping",
			text: "Orders over $50",
			icon: "/icons/shipping-icon.png",
			alt: "Shipping icon"
		},
		{
			id: 2,
			title: "Easy Returns",
			text: "30 days after purchase",
			icon: "/icons/return-icon.png",
			alt: "Return icon"
		},
		{
			id: 3,
			title: "Secure Payment",
			text: "Encrypted checkout",
			icon: "/icons/payment-icon.png",
			alt: "Payment icon"
		},
		{
			id: 4,
			title: "24/7 Support",
			text: "Ready to help",
			icon: "/icons/support-icon.png",
			alt: "Support icon"
		}
	];

	return (
		<>
			<section className="flex justify-center align-middle relative px-5 py-20 sm:px-10 md:px-40 md:py-50 lg:h-screen bg-center bg-no-repeat" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513521712264-512ceb91a940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
				<div className="flex flex-col gap-5 relative z-10 text-center text-slate-100 w-full md:w-lg">
					<p className="tracking-wider text-lg">WELCOME TO FAKE STORE</p>
					<h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">Nothing's Real. Except Your Desire To Shop</h1>
					<button className="px-5 py-3 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">Treat Yo Self Anyway</button>
				</div>
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</section>
			<section className="flex justify-center items-center w-full bg-slate-100">
				<div className="px-5 py-20 max-w-7xl grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-10">
					{perks.map(perk => (
						<div key={perk.id} className="flex flex-col gap-4 justify-start items-center text-center px-6 py-0">
							<div className="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full p-3">
								<img src={perk.icon} alt={perk.alt} width="45" height="45" />
							</div>
							<div>
								<h3 className="font-medium text-md sm:text-lg">{perk.title}</h3>
								<span className="text-xs sm:text-sm text-slate-600">{perk.text}</span>
							</div>
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

// Nothing's Real. Except Your Desire To Shop

/*
Featured component idea: trending products carousel with three random products to display

Inspiration: https://websitedemos.net/generic-ecommerce-02/?customize=template
Sections to add:
	More perks with icons: secure payment, excellent service
	Trending products
	Categories with larger images and not bg/border
	Small about section with sales stats (103k products sold, 98% customer satisfaction)
	Trending products
	Customer feedback, include quote icon and customer profile pic
*/
