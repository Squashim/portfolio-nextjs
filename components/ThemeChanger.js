import React from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeChanger = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className='my-auto flex justify-center items-center ml-2 lg:ml-6'>
			<button
				onClick={() => setTheme("light")}
				className='hidden dark:block mb-[3px] hover:scale-110 ease-linear duration-200'>
				<MdLightMode size={25} />
			</button>
			<button
				onClick={() => setTheme("dark")}
				className='dark:hidden block mb-[3px] hover:scale-110 ease-linear duration-200'>
				<MdDarkMode size={25} />
			</button>
		</div>
	);
};

export default ThemeChanger;
