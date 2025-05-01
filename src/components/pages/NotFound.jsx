import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="mt-10 flex flex-col justify-center items-center gap-10">
			<h1 className="text-4xl font-semibold">Page not found</h1>
			<Link to="/">
				<p className="px-5 py-3 text-sm rounded-sm bg-slate-500 hover:bg-slate-600 transition duration-300 text-slate-50">Continue Shopping</p>
			</Link>
		</div>
	);
}

export default NotFound;
