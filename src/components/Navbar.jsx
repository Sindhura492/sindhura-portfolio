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
						<button
							type="button"
							href="/path-to-your-resume.pdf"
							download
							className="text-neutral-400 hover:text-white transition-colors ml-5 px-4 py-2 border border-neutral-400 rounded-lg hover:bg-neutral-700 flex items-center space-x-2 animate-bounce"
						>
							<span className="relative flex h-3 w-3">
								<span className="btn-ping" />
								<span className="btn-ping_dot absolute inset-0 bg-blue-500 rounded-full animate-ping" />
							</span>
							<span>Download My CV</span>
						</button>
					</nav>
				</div>
			</div>

			<div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
				<nav className="p-5">
					<NavItems onClick={closeMenu} />
					<button
						type="button"
						href="/path-to-your-resume.pdf"
						download
						className="text-neutral-400 hover:text-white transition-colors ml-5 mt-7 px-4 py-2 border border-neutral-400 rounded-lg hover:bg-neutral-700 flex items-center space-x-2 animate-bounce"
					>
						<span className="relative flex h-3 w-3">
							<span className="btn-ping" />
							<span className="btn-ping_dot absolute inset-0 bg-blue-500 rounded-full animate-ping" />
						</span>
						<span>Download My CV</span>
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
