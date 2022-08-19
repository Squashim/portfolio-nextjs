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
			keyframes: {},
			animation: {},
			backgroundImage: {
				mainImg: "url('/assets/background.jpg')",
				lightLogo: "url('/assets/logoLight.svg')",
				darkLogo: "url('/assets/logo.svg')",
			},
		},
	},
	plugins: [],
};
