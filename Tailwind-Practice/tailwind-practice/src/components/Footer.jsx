import React, { useEffect } from "react";

function Footer() {
	return (
		<footer className="flex justify-center align-middle mt-auto py-8 bg-slate-300 text-slate-500">
			<span>
				© 2025 Fake Store. All rights reserved. |{" "}
				<a className="no-underline transition duration-350 hover:underline hover:text-indigo-500" href="#">
					Privacy Policy
				</a>{" "}
				|{" "}
				<a className="no-underline transition duration-350 hover:underline hover:text-indigo-500" href="#">
					Terms of Service
				</a>{" "}
				|{" "}
				<a className="no-underline transition duration-350 hover:underline hover:text-indigo-500" href="#">
					Contact Us
				</a>
			</span>
		</footer>
	);
}

export default Footer;
