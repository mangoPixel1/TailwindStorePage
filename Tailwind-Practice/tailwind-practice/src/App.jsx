import { useState } from "react";
import "./App.css";

// Components
import Header from "../src/components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
