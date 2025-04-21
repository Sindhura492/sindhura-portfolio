import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import CanvasLoader from "../elements/Loading.jsx";
import { calculateSizes } from "../constants/index.js";
import WorkingRoom from "../elements/WorkingRoom.jsx";

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
				<p className="home_tag text-gray_gradient">
					Products. Brands. Built Right.
				</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />

						<WorkingRoom
							scale={sizes.deskScale}
							position={sizes.deskPosition}
							rotation={[0.1, -Math.PI, 0]}
						/>

						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Home;
