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
			<section className="mb-10 px-6 py-16 bg-slate-300">
				<div className="flex flex-col justify-center items-center max-w-6xl mx-auto gap-10 lg:gap-25 md:flex-row">
					<div className="flex justify-center max-w-xl md:max-w-1/2">
						<div>
							<img src="checkout.jpg" alt="customer receiving purchase" />
						</div>
					</div>

					<div className="flex flex-col justify-center">
						<h1 className="mb-5 text-slate-900 text-3xl lg:text-4xl font-semibold">Your One-Stop Shop for Style & Innovation.</h1>
						<p className="text-sm lg:text-base text-slate-800 leading-5">At Fake Store, we bring together fashion and tech to elevate your everyday. Whether you’re upgrading your wardrobe, finding the perfect accessory, or leveling up your gadgets, our curated collection has something for everyone.</p>
						<hr className="my-8 border-t border-slate-400" />
						<div className="mb-3">
							<h2 className="text-2xl mb-2 font-semibold">98%</h2>
							<h3 className="text-sm text-slate-800">Customer Satisfaction</h3>
						</div>
						<div>
							<h2 className="text-2xl mb-2 font-semibold">85K</h2>
							<h3 className="text-sm text-slate-800">Products Delivered</h3>
						</div>
					</div>
				</div>
			</section>
			<Categories />
			<section className="bg-slate-300">
				<div className="grid grid-cols-1 gap-10">
					<div>
						<h1 className="mb-2 font-semibold text-3xl">What Our Customers Say</h1>
						<p className="text-sm text-slate-800 leading-5">Discover the reasons why people loves us and become your go-to partner.</p>
					</div>
					<div className="bg-slate-50">
						<h3>Finally, a store that understands me.</h3>
						<p>No products, no shipping, no stress. It's like retail therapy, without the retail. Or the therapy.</p>
						<div>
							<img src="profile-pic-1" />
							<span>John Doe</span>
						</div>
					</div>
					<div className="bg-slate-50">
						<h3>Bought everything. Literally nothing arrived.</h3>
						<p>Zero regrets. My style has never been so conceptually on point.</p>
						<div>
							<img src="#" />
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="bg-slate-50">
						<h3>Their jewelry? Fake. Just like this store.</h3>
						<p>And yet... I feel emotionally richer. Would pretend-shop again!</p>
						<div>
							<img src="#" />
							<span>John Doe</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;

// Nothing's Real. Except Your Desire To Shop

/*
Featured component idea: trending products carousel with three random products to display

Inspiration: https://websitedemos.net/generic-ecommerce-02/?customize=template
Sections to add:
	DONE: More perks with icons: secure payment, excellent service
	DONE: Trending products
	DONE: Categories with larger images and not bg/border
	DONE: Small about section with sales stats (103k products sold, 98% customer satisfaction)
	Customer feedback, include quote icon and customer profile pic
	"Shop now" call to action hero at bottom of page above footer
*/
