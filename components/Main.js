import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Main = () => {
	const scrollPosition = useScrollPosition();

	return (
		<div id='home' className='w-full h-screen text-center relative'>
			<div className='bg-mainImg absolute w-full h-full bg-cover z-[-2] filter blur-[2px]'></div>
			<div className='bg-black/60 absolute w-full h-full z-[-1] '></div>

			<div className='max-w-[1240px] w-full h-full  mx-auto p-2 flex justify-center items-center flex-col'>
				<div className='flex flex-col'>
					<h1 className='py-4 text-light uppercase tracking-wide'>
						front<span className='text-primary uppercase'>-end</span>
						<br />
						<span className='text-primary uppercase'>web-</span>developer
					</h1>
					<h2 className='text-light text-sm uppercase tracking-wider font-semibold italic'>
						konrad piekarz
					</h2>
				</div>
				{scrollPosition > 1000 ? (
					""
				) : (
					<div className='text-primary absolute bottom-6 animate-arrDown'>
						<Link href='/#about'>
							<BsChevronDown className='cursor-pointer' size={25} />
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;
