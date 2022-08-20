import React from "react";

const Footer = () => {
	return (
		<div className='w-full bg-darkGray h-[60px] flex mx-auto items-center justify-center'>
			<div className=' bg-darkLogo bg-contain dark:bg-lightLogo bg-no-repeat bg-center w-[60px] h-[60px]'></div>
			<p className='ml-4 uppercase text-[10px] tracking-widest'>
				&#xA9; 2022 Konrad Piekarz - Wszelkie prawa zastrzeżone
			</p>
		</div>
	);
};

export default Footer;
