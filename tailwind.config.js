/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		colors: {
			black: "#000",
			dark: "#252422",
			light: "#fefefe",
			primary: "#eb5e28",
			lightGray: "#ccc5b9",
			darkGray: "#403d39",
			transparent: "transparent",
		},
		fontFamily: {
			Segoe: ["Segoe UI", "sans-serif"],
		},
		extend: {
			keyframes: {},
			animation: {},
			backgroundImage: {
				mainImg: "url('/assets/background.jpg')",
			},
		},
	},
	plugins: [],
};
