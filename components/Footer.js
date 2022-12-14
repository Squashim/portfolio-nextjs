import React from "react";

const Footer = () => {
	return (
		<footer className='w-full bg-lightGray dark:bg-darkGray h-[60px] flex mx-auto items-center justify-center text-center'>
			<div className=' bg-darkLogo bg-contain dark:bg-lightLogo bg-no-repeat bg-center w-[60px] h-[60px]'></div>
			<p className='sm:ml-4 uppercase text-[10px] tracking-widest'>
				&#xA9; 2022 Konrad Piekarz - Wszelkie prawa zastrzeżone
			</p>
		</footer>
	);
};

export default Footer;
