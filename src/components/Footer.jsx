const Footer = () => {
	return (
		<footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col justify-center items-center gap-5">
			<p className="head-text mt-7 animate-bounce">Let's Connect!</p>

			<div className="flex justify-center items-center gap-6">
				<div className="social-icon">
					<a
						href="https://github.com/Sindhura492"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/assets/github.svg" alt="github" className="w-10 h-10" />
					</a>
				</div>
				<div className="social-icon">
					<a
						href="https://www.linkedin.com/in/sindhura-s-9a55731b4/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/assets/linkedin.svg"
							alt="linkedin"
							className="w-10 h-10"
						/>
					</a>
				</div>
				<div className="social-icon">
					<a
						href="https://www.instagram.com/sindhura_s_"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/assets/instagram.svg"
							alt="instagram"
							className="w-10 h-10"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
