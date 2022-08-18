import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Main = () => {
	return (
		<div className='w-full h-screen text-center bg-white'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-wide text-black'>
						Lets build something together
					</p>
					<h1 className='py-4 text-[#1e1e1e]'>
						Hi, I'm <span className='text-black'>Konrad</span>
					</h1>
					<h2 className='text-[#1e1e1e] capitalize'>
						A front-end web developer
					</h2>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
						sunt officiis ipsa veritatis nam pariatur quasi explicabo enim
						adipisci itaque, qui, illo dolores corrupti esse magnam repellendus
						minus fugiat officia!
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
