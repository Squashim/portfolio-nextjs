import React from "react";

const Contact = () => {
	return (
		<div className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='text-xl tracking-widest uppercase'>Contact</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div>
								<img
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src='/assets/contact.jpg'
									alt=''
								/>
							</div>
							<div>
								<h2 className='py-2'>Name</h2>
								<p>Front-end Developer</p>
								<p className='py-4'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Architecto, placeat?
								</p>
							</div>
							<div>
								<p className='pt-8 uppercase'>Connect with me</p>
								{/* ICONS*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;