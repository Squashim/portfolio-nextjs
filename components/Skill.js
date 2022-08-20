import React from "react";
import Image from "next/image";

const Skill = ({ icon, name }) => {
	return (
		<div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-200 bg-[#efefef] dark:bg-black/20 dark:shadow-black hover:text-primary'>
			<div className='grid grid-cols-2 gap-4 justify-center items-center'>
				<div className='m-auto '>{icon}</div>
				<div className='flex flex-col items-center justify-center'>
					<h3 className='font-semibold uppercase italic text-md'>{name}</h3>
				</div>
			</div>
		</div>
	);
};

export default Skill;
