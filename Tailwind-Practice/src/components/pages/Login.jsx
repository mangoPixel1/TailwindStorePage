import React from "react";

function Login() {
	return (
		<div>
			<h1>Sign in to your account</h1>
			<div>
				<form action="#">
					<div>
						<label htmlFor="email">Email address</label>
						<div className="mt-2">
							<input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
