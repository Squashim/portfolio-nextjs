import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ src, title, tech, page }) => {
	return (
		<div className='relative flex items-center justify-center h-auto shadow-black/30 dark:shadow-black/50 shadow-xl bg-darkGray dark:bg-dark rounded-xl p-4 group '>
			<Image src={src} alt='/' className='rounded-xl group-hover:opacity-10' />
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl text-light tracking-wider text-center'>
					{title}
				</h3>
				<p className='pb-4 py-2 text-primary tracking-wider text-center'>
					{tech}
				</p>
				<Link href={`/${page}`}>
					<p className='text-center p-3 hover:bg-primary rounded-lg bg-light text-darkGray dark:text-dark font-bold text-lg cursor-pointer'>
						Więcej...
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
