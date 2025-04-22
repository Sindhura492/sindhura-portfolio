import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../elements/Cube.jsx";
import Rings from "../elements/Rings.jsx";
import ReactLogo from "../elements/ReactLogo.jsx";
import HomeCamera from "../elements/HomeCamera.jsx";
import Target from "../elements/Target.jsx";
import CanvasLoader from "../elements/Loading.jsx";
import { calculateSizes } from "../constants/index.js";
import { WorkingRoom } from "../elements/WorkingRoom.jsx";
import Button from "../elements/Button.jsx";

const Home = () => {
	// Use media queries to determine screen size
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, I am Sindhura <span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Products. Brands. Built Right.
				</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						{/* To hide controller */}
						<Leva hidden />
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HomeCamera>
							<WorkingRoom
								scale={sizes.deskScale}
								position={sizes.deskPosition}
								rotation={[0.1, -Math.PI, 0]}
							/>
						</HomeCamera>
						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Rings position={sizes.ringPosition} />
							<Cube position={sizes.cubePosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
			<div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
				<a href="#about" className="w-fit">
					<Button
						name="Wanna know about me?"
						isBeam
						containerClass="sm:w-fit w-full sm:min-w-96"
					/>
				</a>
			</div>
		</section>
	);
};

export default Home;
