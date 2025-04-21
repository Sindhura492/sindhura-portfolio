// postcss.config.js (ES Module Syntax)
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
	plugins: [
		tailwindcss(), // This is the correct usage
		autoprefixer(),
	],
};
