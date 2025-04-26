import React, { useState } from "react";
import { workExperiences } from "../constants";

const Experience = () => {
	// Set the default image to the first experience's image
	const [imgName, setImgName] = useState(workExperiences[0].image);

	return (
		<section className="c-space my-20" id="experience">
			<div className="w-full text-white-600">
				<h3 className="head-text">My Work Experience</h3>
				<div className="work-container">
					<div className="work-canvas">
						{/* Display the image based on the selected experience */}
						<img
							src={imgName}
							alt="work-experience"
							className="w-full h-auto object-contain"
						/>
					</div>
					<div className="work-content">
						<div className="sm:py-10 py-5 sm:px-5 px-2.5">
							{workExperiences.map((item, index) => (
								<div
									key={index}
									onClick={() => setImgName(item.image)} // Set the image on click
									onPointerOver={() => setImgName(item.image)} // Set the image on hover
									onPointerOut={() => setImgName(workExperiences[0].image)} // Reset image on hover out
									className="work-content_container group cursor-pointer"
								>
									<div className="flex flex-col h-full justify-start items-center py-2">
										<div className="work-content_logo">
											<img className="w-full h-full" src={item.icon} alt="" />
										</div>

										<div className="work-content_bar" />
									</div>

									<div className="sm:p-5 px-2.5 py-5">
										<p className="font-bold text-white-800">{item.name}</p>
										<p className="text-sm mb-5">
											{item.pos} -- <span>{item.duration}</span>
										</p>
										<p className="group-hover:text-white transition-all ease-in-out duration-500">
											{item.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
