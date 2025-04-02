import React from "react";

function Login() {
	return (
		<div className="mt-20 w-full flex justify-center items-center">
			<div className="w-80 md:w-96 flex flex-col justify-items-start">
				<h1 className="mb-10 text-center text-slate-800 text-2xl font-bold tracking-tight">Sign in to your account</h1>
				<div>
					<form action="#">
						<div>
							<label htmlFor="email" className="text-sm font-medium">
								Email address
							</label>
							<div className="mt-2">
								<input type="email" name="email" id="email" placeholder="example@example.com" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6" />
							</div>
						</div>
						<div className="mt-5">
							<label htmlFor="password" className="text-sm font-medium">
								Password
							</label>
							<div className="mt-2">
								<input type="password" name="password" id="password" placeholder="password" autoComplete="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6" />
							</div>
						</div>
						<button className="w-full mt-5 bg-slate-500 hover:bg-slate-600 transition duration-300 text-slate-50 py-2 rounded-md cursor-pointer">Sign In</button>
						<p className="mt-5 text-slate-500 text-center tracking-tight">
							Don't have an account? <button className="text-slate-600 hover:text-indigo-800 transition duration-300 font-medium cursor-pointer">Sign up</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
