import React from "react";

const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-screen p-2 flex items-center py-16 dark:bg-darkGray bg-lightGray'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='text-xl tracking-widest uppercase'>About</p>
					<h2 className='py-4'>Who I am</h2>
					<p className='py-2 '>Lorem ipsum dolor sit amet.</p>
					<p className='py-2 '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
						laborum culpa. Provident exercitationem quaerat tempore animi modi
						necessitatibus, aut ad.
					</p>
					<p className='py-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						in dignissimos nisi, error quos amet modi maxime enim eum officiis,
						odit architecto, hic laudantium quisquam.
					</p>
					<p className='py-2 cursor-pointer underline'>
						Check out my latest projects!
					</p>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<img className='rounded-xl' src='/assets/about.jpg' alt='laptop' />
				</div>
			</div>
		</div>
	);
};

export default About;
