import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Home />
		</main>
	);
};

export default App;
