import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Main = () => {
	return (
		<div id='home' className='w-full h-screen text-center relative'>
			<div className='bg-mainImg absolute w-full h-full bg-cover z-[-2] filter blur-[2px]'></div>
			<div className='bg-black/60 absolute w-full h-full z-[-1] '></div>

			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<h1 className='py-4 text-light uppercase tracking-wide'>
						front<span className='text-primary uppercase'>-end</span>
						<br />
						<span className='text-primary uppercase'>web-</span>developer
					</h1>
					<h2 className='text-light text-sm uppercase tracking-wider font-semibold italic'>
						konrad piekarz
					</h2>
					{/*<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer ease-in duration-300 hover:scale-105'>
							<FaLinkedinIn />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer ease-in duration-300 hover:scale-105'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer ease-in duration-300 hover:scale-105'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer ease-in duration-300 hover:scale-105'>
							<BsFillPersonLinesFill />
						</div>
					</div>*/}
				</div>
			</div>
		</div>
	);
};

export default Main;
