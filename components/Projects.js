import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase'>Projects</p>
				<h2 className='py-2'>What I've built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
					<ProjectItem />
				</div>
			</div>
		</div>
	);
};

export default Projects;
