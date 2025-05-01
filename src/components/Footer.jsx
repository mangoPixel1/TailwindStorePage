import React, { useEffect } from "react";

function Footer() {
	return (
		<footer className="flex justify-center align-middle text-center mt-auto py-8 bg-slate-300 text-slate-500">
			<div>
				<span className="text-center">© 2025 Fake Store. All rights reserved.</span>
				<div>
					<a className="no-underline transition duration-350 hover:underline hover:text-indigo-500" href="#">
						<span>Privacy Policy</span>
					</a>{" "}
					|{" "}
					<a className="no-underline transition duration-350 hover:underline hover:text-indigo-500" href="#">
						<span>Terms of Service</span>
					</a>{" "}
					|{" "}
					<a className="no-underline transition duration-350 hover:underline hover:text-indigo-500" href="#">
						<span>Contact Us</span>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
