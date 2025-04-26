export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Experience",
		href: "#experience",
	},
	{
		id: 4,
		name: "Projects",
		href: "#projects",
	},

	{
		id: 5,
		name: "Contact",
		href: "#contact",
	},
];

export const myProjects = [
	{
		title: "MIRA - AI Assisted Chatbot for Cybersecurity",
		desc: "MIRA is an AI-assisted cybersecurity chatbot that scans URLs, provides threat reports with CVE details, and integrates with ZAP for scanning and SonarQube for code analysis. It offers features like action cards, email agents for CVE updates, and the ability to generate and save vulnerability and chat summaries. The app also includes a tutorial, FAQ section, and a dashboard to track scan results. Additionally, MIRA uses OpenAI's API to enhance its functionality and provide intelligent responses.",
		subdesc:
			"The frontend is built using TypeScript and Tailwind CSS for a responsive and modern interface, while the backend utilizes Node.js with Bun for efficient performance. Zustand is used for state management, and Convex DB manages chat data.",

		href: "https://gitlab.hrz.tu-chemnitz.de/vsr/edu/planspiel/ws2425/group12-denkminds",
		texture: "/textures/project/mira.mp4",
		logo: "/assets/mira.png",
		logoStyle: {
			backgroundColor: "#000000",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "Typescript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Node.js",
				path: "/assets/node.svg",
			},
		],
	},
	{
		title: "Compass4Chemnitz - Map Application",
		desc: "This application helps Chemnitz residents find nearby educational institutions like Grundschule, Kindergarten, Jugendberufshilfe, and Schulsozialarbeit based on location. Users can view institutions on a map, access contact information, and favorite institutions. A cron job ensures real-time updates for accurate data.",
		subdesc:
			"Built with React and Vite for the frontend, and Django with Python for the backend, managing geographic and contact data.",
		href: "https://github.com/Sindhura492/Compass4Chemnitz",
		texture: "/textures/project/compass.mp4",
		logo: "/assets/destination.png",
		logoStyle: {
			backgroundColor: "#000000",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #000000",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "Python",
				path: "assets/python.png",
			},
			{
				id: 3,
				name: "Django",
				path: "/assets/django.svg",
			},
		],
	},
	{
		title: "Portfolio Website",
		desc: "The portfolio website showcases the user's background with a homepage featuring 3D animations, an about section, a contact section, and separate sections for experience and projects. The website highlights the user's skills and achievements in a dynamic and visually appealing way.",
		subdesc:
			"Built with React for the frontend, styled using Tailwind CSS, and enhanced with 3D animations using React Three Fiber.",
		href: "https://github.com/Sindhura492/sindhura-portfolio",
		texture: "/textures/project/portfolio.mp4",
		logo: "/assets/sindhura-logo.png",
		logoStyle: {
			backgroundColor: "#000000",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight3.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "React Three Fiber",
				path: "/assets/fiber.png",
			},
		],
	},
	{
		title: "denkMinds Website",
		desc: "The website for Denkminds showcases the company's mission, team, and key features of the application they provide. It also includes a milestones section and blog posts that narrate the journey of the company.",

		subdesc:
			"Developed using Next.js for the frontend, and styled with Tailwind CSS to ensure a responsive and sleek design.",

		href: "https://github.com/Uyadav207/denkMinds",
		texture: "/textures/project/denkminds.mp4",
		logo: "/assets/denkminds.png",
		logoStyle: {
			backgroundColor: "#000000",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "Next.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
		],
	},
	{
		title: "BPMN HR Dashboard",
		desc: "The BPMN dashboard for HRs is a chatbot that leverages OpenAI's API to assist HR professionals in creating BPMN diagrams for processes such as hiring, employee onboarding, termination, and leave management. It provides templates for ease of use, and users can modify, save, and organize the diagrams in folders.(In Progress)",
		subdesc:
			"Built using TypeScript and Tailwind CSS for the frontend, and Node.js for the backend, with OpenAI's API integrated into the chatbot for enhanced functionality.",

		texture: "/textures/project/bpmn.mp4",
		logo: "/assets/bpmn_logo.png",
		logoStyle: {
			backgroundColor: "#000000",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 3,
				name: "Node.js",
				path: "/assets/node.svg",
			},
		],
	},

	{
		title: "Breast Cancer Detection using ML Techniques",
		desc: "The breast cancer detection project uses machine learning to analyze X-ray and scan images for detecting tumors. The model classifies the tumor as either benign or malignant based on the uploaded images. The project provides a user-friendly interface for uploading images and receiving results.",
		subdesc:
			"Built with Django and Python for the backend to handle image processing and machine learning model integration, and Bootstrap for the frontend to ensure a responsive and intuitive user interface.",
		texture: "/textures/project/breast_cancer.mp4",
		logo: "/assets/spotlight5.png",
		logoStyle: {
			backgroundColor: "transparent",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "Javascript",
				path: "/assets/js.webp",
			},
			{
				id: 2,
				name: "Bootstrap",
				path: "assets/bootstrap.png",
			},

			{
				id: 3,
				name: "Python",
				path: "/assets/python.png",
			},
			{
				id: 4,
				name: "Django",
				path: "/assets/django.svg",
			},
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
				? [5, -5, 0]
				: isTablet
					? [5, -5, 0]
					: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
				? [5, 4, 0]
				: isTablet
					? [5, 4, 0]
					: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
				? [-10, 10, 0]
				: isTablet
					? [-12, 10, 0]
					: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
				? [-9, -10, -10]
				: isTablet
					? [-11, -7, -10]
					: [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Fraunhofer FOKUS , Berlin",
		pos: "Research Student",
		duration: "05/2024 - Present",
		title:
			"Contributed to knowledge graph development for generating handover action predictions and frontend development using Next.js. Participated in developing an XApp for cellular handover, focusing on enhancing network performance.",
		icon: "/assets/icon.webp",
		image: "/assets/waving.png",
	},
	{
		id: 2,
		name: "Rakuten, Bengaluru(India)",
		pos: "Associate Software Engineer",
		duration: "12/2022 - 07/2023",
		title:
			"Promoted to Associate Software Engineer, leading the development of a secure web app with ReactJS, Django, and PostgreSQL. Spearheaded a Ruby-to-Python migration and designed an HR Management Tool. Optimized media handling and document management.",
		icon: "/assets/rakuten.svg",
		image: "/assets/promotion.png",
	},
	{
		id: 3,
		name: "Rakuten, Bengaluru(India)",
		pos: "Technical Intern",
		duration: "03/2022 - 12/2022",
		title:
			"Contributed to 4 major agile projects, including an Employee Feedback Platform with Python, Flask, Plotly, and Dash, and a Role-Based Web App with Python, Django, and MySQL. Designed a dynamic Bootstrap website for an internal brand event, combining creativity with functionality.",
		icon: "/assets/rakuten.svg",
		image: "/assets/working.png",
	},
	{
		id: 4,
		name: "Acranton Technologies",
		pos: " Intern",
		duration: "04/2021 - 07/2021",
		title:
			"Explored major Python libraries like OpenCV, NumPy, Pandas, and Seaborn, and developed a project on an Image Recognition System.",
		icon: "/assets/acranton.png",
		image: "/assets/intern.png",
	},
];
