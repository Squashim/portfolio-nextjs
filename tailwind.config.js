/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			dark: "#252422",
			white: "#fffcf2",
			primary: "#eb5e28",
			lightGray: "#ccc5b9",
			darkGray: "#403d39",
		},
	},
	plugins: [],
};
