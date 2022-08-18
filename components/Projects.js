import React from "react";

const Projects = () => {
	return (
		<div className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase'>Projects</p>
				<h2 className='py-2'>What I've built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='relative flex items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-black to-white'></div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
