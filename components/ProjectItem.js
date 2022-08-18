import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/property.jpg";

const ProjectItem = () => {
	return (
		<div className='relative flex items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-black to-white'>
			<Image
				src={propertyImg}
				alt='/'
				className='rounded-xl group-hover:opacity-10'
			/>
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl text-white tracking-wider text-center'>
					Template
				</h3>
				<p className='pb-4 pt-2 text-white text-center'>React JS</p>
				<Link href='/'>
					<p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
						More
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
