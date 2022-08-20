import React from "react";
import ProjectItem from "./ProjectItem";
import shoesImg from "../public/assets/project_shoes.png";

const Projects = () => {
	return (
		<div id='projects' className='w-full dark:bg-darkGray bg-lightGray py-16'>
			<div className='max-w-[1240px] mx-auto px-6 py-16'>
				<p className='text-xl tracking-widest uppercase text-primary'>
					Portfolio
				</p>
				<h2 className='py-4'>Moje projekty:</h2>
				<div className='grid md:grid-cols-2 gap-8 py-4'>
					<ProjectItem
						src={shoesImg}
						title='E-commerce Product Page'
						tech='HTML SCSS REACT'
						page={"e-commerce-shoes"}
					/>
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
				</div>
			</div>
		</div>
	);
};

export default Projects;
