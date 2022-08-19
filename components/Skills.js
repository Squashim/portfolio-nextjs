import React from "react";
import Skill from "./Skill";
import {
	SiNextdotjs,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiGithub,
	SiSass,
} from "react-icons/si";

const Skills = () => {
	return (
		<div id='skills' className='w-full lg:h-screen p-2'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase'>Skills</p>
				<h2 className='py-4'>What I can do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<Skill name='HTML' src='html.png' />
					<Skill name='CSS' src='css.png' />
					<Skill name='JavaScript' src='javascript.png' />
					<Skill name='REACT' src='react.png' />
					<Skill name='Tailwind' src='tailwind.png' />
					<Skill name='Github' src='github1.png' />
					<Skill name='NextJS' src='nextjs.png' />
				</div>
			</div>
		</div>
	);
};

export default Skills;
