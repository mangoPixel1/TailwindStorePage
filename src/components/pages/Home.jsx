import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
      alt: "Shipping icon",
    },
    {
      id: 2,
      title: "Easy Returns",
      text: "30 days after purchase",
      icon: "/icons/return-icon.png",
      alt: "Return icon",
    },
    {
      id: 3,
      title: "Secure Payment",
      text: "Encrypted checkout",
      icon: "/icons/payment-icon.png",
      alt: "Payment icon",
    },
    {
      id: 4,
      title: "24/7 Support",
      text: "Ready to help",
      icon: "/icons/support-icon.png",
      alt: "Support icon",
    },
  ];

  const testimonials = [
    {
      id: 1,
      title: "Finally, a store that understands me.",
      body: "No products, no shipping, no stress. It's like retail therapy, without the retail. Or the therapy.",
      user: "John Doe",
      image: "profile-pic-1.jpg",
    },
    {
      id: 2,
      title: "Bought everything. Literally nothing arrived.",
      body: "Zero regrets. My style has never been so conceptually on point.",
      user: "Jane Doe",
      image: "profile-pic-2.jpg",
    },
    {
      id: 3,
      title: "Their jewelry? Fake. Just like this store.",
      body: "And yet... I feel emotionally richer. Would pretend-shop again!",
      user: "Jack Doe",
      image: "profile-pic-3.jpg",
    },
  ];

  return (
    <>
      <section
        className="flex justify-center align-middle relative px-5 py-20 sm:px-10 md:px-40 md:py-50 lg:h-screen bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1513521712264-512ceb91a940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="flex flex-col gap-5 relative z-10 text-center text-slate-100 w-full md:w-lg">
          <p className="tracking-wider text-lg">WELCOME TO FAKE STORE</p>
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Nothing's Real. Except Your Desire To Shop
          </h1>
          <Link to={`/category/men's clothing`}>
            <button className="px-5 py-3 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">
              Treat Yo Self Anyway
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
      <section className="flex justify-center items-center w-full bg-slate-100">
        <div className="px-5 py-20 max-w-7xl grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-10">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="flex flex-col gap-4 justify-start items-center text-center px-6 py-0"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full p-3">
                <img src={perk.icon} alt={perk.alt} width="45" height="45" />
              </div>
              <div>
                <h3 className="font-medium text-md sm:text-lg">{perk.title}</h3>
                <span className="text-xs sm:text-sm text-slate-600">
                  {perk.text}
                </span>
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
            <h1 className="mb-5 text-slate-900 text-3xl lg:text-4xl font-semibold">
              Your One-Stop Shop for Style & Innovation.
            </h1>
            <p className="text-sm lg:text-base text-slate-800 leading-5">
              At Fake Store, we bring together fashion and tech to elevate your
              everyday. Whether you’re upgrading your wardrobe, finding the
              perfect accessory, or leveling up your gadgets, our curated
              collection has something for everyone.
            </p>
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
      <section className="flex justify-center items-center py-18 bg-slate-300">
        <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 lg:max-w-5xl gap-10">
          <div className="flex flex-col gap-10 sm:gap-20">
            <div>
              <h1 className="mb-2 font-semibold text-3xl">
                What Our Customers Say
              </h1>
              <p className="text-sm font-light text-slate-800 leading-5">
                See why people are raving about us
              </p>
            </div>
            <div className="p-5 lg:p-10 rounded-lg bg-slate-50">
              <img
                className="pb-5"
                src="/icons/quote-icon.png"
                alt="Quote icon"
                width={35}
                height={35}
              />
              <h3 className="text-xl text-slate-800 font-medium mb-3">
                Finally, a store that understands me.
              </h3>
              <p className="text-md text-slate-700 font-light">
                No products, no shipping, no stress. It's like retail therapy,
                without the retail. Or the therapy.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="rounded-full"
                  width={60}
                  height={60}
                  src="profile-pic-1.jpg"
                  alt="Customer Photo"
                />
                <span className="text-md text-slate-700 font-light">
                  John Doe
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="p-5 lg:p-10 rounded-lg bg-slate-50">
              <img
                className="pb-5"
                src="/icons/quote-icon.png"
                alt="Quote icon"
                width={35}
                height={35}
              />
              <h3 className="text-xl text-slate-800 font-medium mb-3">
                Bought everything. Literally nothing arrived.
              </h3>
              <p className="text-md text-slate-700 font-light">
                Zero regrets. My style has never been so conceptually on point.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="rounded-full"
                  width={60}
                  height={60}
                  src="profile-pic-2.jpg"
                  alt="Customer Photo"
                />
                <span className="text-md text-slate-700 font-light">
                  Jane Doe
                </span>
              </div>
            </div>
            <div className="p-5 lg:p-10 rounded-lg bg-slate-50">
              <img
                className="pb-5"
                src="/icons/quote-icon.png"
                alt="Quote icon"
                width={35}
                height={35}
              />
              <h3 className="text-xl text-slate-800 font-medium mb-3">
                Their jewelry? Fake. Just like this store.
              </h3>
              <p className="text-md text-slate-700 font-light">
                And yet... I feel emotionally richer. Would pretend-shop again!
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  className="rounded-full"
                  width={60}
                  height={60}
                  src="profile-pic-3.jpg"
                  alt="Customer Photo"
                />
                <span className="text-md text-slate-700 font-light">
                  Jack Doe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative p-20 text-slate-200 bg-[url(/call-to-action-bottom.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="z-20 flex flex-col gap-5 text-center relative">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Ready to Find Your Perfect Style or Tech?
          </h1>
          <h2 className="text-sm lg:text-base font-light">
            Browse our online store or visit us in person to discover the latest
            in fashion, electronics, and fine jewelry.
          </h2>
          <Link to={`/category/men's clothing`}>
            <button className="px-5 py-3 self-center rounded-sm text-slate-100 bg-slate-600 transition duration-350 hover:bg-slate-700 cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </section>
    </>
  );
}

export default Home;

/*
Inspiration: https://websitedemos.net/generic-ecommerce-02/?customize=template

Sections to add:
	DONE: More perks with icons: secure payment, excellent service
	DONE: Trending products
	DONE: Categories with larger images and not bg/border
	DONE: Small about section with sales stats (103k products sold, 98% customer satisfaction)
	DONE: Tesimonials, include quote icon and customer profile pic
	DONE: "Shop now" call to action hero at bottom of page above footer
*/
