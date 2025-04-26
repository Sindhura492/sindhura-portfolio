import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
