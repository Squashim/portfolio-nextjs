/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			Segoe: ["Segoe UI", "sans-serif"],
		},
		extend: {
			colors: {
				black: "#000",
				dark: "#121212",
				light: "#fefefe",
				primary: "#eb5e28",
				lightGray: "#ccc5b9",
				darkGray: "#403d39",
				transparent: "transparent",
			},
			keyframes: {
				down: {
					"0%": { transform: "translate3d(0,-100%,0)", opacity: "0" },
					"30%": { transform: "translate3d(0,-50%,0)", opacity: "0.5" },
					"100%": { transform: "none", opacity: "1" },
				},
			},
			animation: {
				arrDown: "down 1.5s linear infinite",
			},
			backgroundImage: {
				mainImg: "url('/assets/background.jpg')",
				lightLogo: "url('/assets/logoLight.svg')",
				darkLogo: "url('/assets/logo.svg')",
			},
		},
	},
	plugins: [],
};
