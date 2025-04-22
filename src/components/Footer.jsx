const Footer = () => {
	return (
		<footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col justify-center items-center gap-5">
			<p className="head-text mt-7 animate-bounce">Let's Connect!</p>

			<div className="flex gap-3 justify-center">
				<div className="social-icon">
					<img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
				</div>
				<div className="social-icon">
					<img
						src="/assets/twitter.svg"
						alt="linkedin"
						className="w-1/2 h-1/2"
					/>
				</div>
				<div className="social-icon">
					<img
						src="/assets/instagram.svg"
						alt="instagram"
						className="w-1/2 h-1/2"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
