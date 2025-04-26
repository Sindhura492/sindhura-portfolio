import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {} }) => (
	<ul className="nav-ul">
		{navLinks.map((item) => (
			<li key={item.id} className="nav-li">
				<a href={item.href} className="nav-li_a" onClick={onClick}>
					{item.name}
				</a>
			</li>
		))}
	</ul>
);

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto c-space">
					<a
						href="/"
						className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
					>
						Sindhura
					</a>

					<button
						type="button"
						onClick={toggleMenu}
						className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
						aria-label="Toggle menu"
					>
						<img
							src={`/assets/${isOpen ? "close.svg" : "menu.svg"}`}
							alt="toggle"
							className="w-6 h-6"
						/>
					</button>

					<nav className="sm:flex hidden">
						<NavItems />
					</nav>
				</div>
			</div>

			<div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
				<nav className="p-5">
					<NavItems onClick={closeMenu} />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;

// import React from "react";
// import { useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { workExperiences } from "../constants";
// import CanvasLoader from "../elements/Loading.jsx";
// import Developer from "../elements/Developer.jsx";

// const Experience = () => {
// 	const [imgName, setImgName] = useState("promotion");

// 	return (
// 		<section className="c-space my-20" id="work">
// 			<div className="w-full text-white-600">
// 				<h3 className="head-text">My Work Experience</h3>
// 				<div className="work-container">
// 					{workExperiences.map((item, index) => (
// 						// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
// 						<div className="work-canvas">
// 							<img
// 								src={item.image}
// 								alt="grid-3"
// 								className="w-full sm:h-[266px] h-fit object-contain"
// 							/>
// 						</div>
// 					))}
// 					<div className="work-content">
// 						<div className="sm:py-10 py-5 sm:px-5 px-2.5">
// 							{workExperiences.map((item, index) => (
// 								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
// 								<div
// 									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
// 									key={index}
// 									onClick={() => setImgName(item.image.toLowerCase())}
// 									onPointerOver={() => setImgName(item.image.toLowerCase())}
// 									onPointerOut={() => setImgName("promotion")}
// 									className="work-content_container group"
// 								>
// 									<div className="flex flex-col h-full justify-start items-center py-2">
// 										<div className="work-content_logo">
// 											<img className="w-full h-full" src={item.icon} alt="" />
// 										</div>

// 										<div className="work-content_bar" />
// 									</div>

// 									<div className="sm:p-5 px-2.5 py-5">
// 										<p className="font-bold text-white-800">{item.name}</p>
// 										<p className="text-sm mb-5">
// 											{item.pos} -- <span>{item.duration}</span>
// 										</p>
// 										<p className="group-hover:text-white transition-all ease-in-out duration-500">
// 											{item.title}
// 										</p>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Experience;
