import React from "react";

const Main = () => {
	return (
		<div className='w-full h-screen text-center bg-white'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-wide text-black'>
						Lets build something together
					</p>
					<h1 className='py-4 text-[#1e1e1e]'>
						Hi, I'm <span className='text-[#f45b69]'>Konrad</span>
					</h1>
					<h2 className='text-[#1e1e1e] capitalize'>
						A <span className='text-[#028090]'>front-end</span> web developer
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Main;
