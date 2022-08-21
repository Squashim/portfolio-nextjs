import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
		AOS.refresh();
	}, []);
	return (
		<div id='skills' className='w-full lg:h-screen px-6 py-16 '>
			<div
				data-aos='fade-right'
				className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-primary'>
					Technologie
				</p>
				<h2 className='py-4'>Korzystam z:</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-6'>
					<Skill name='HTML' icon={<SiHtml5 size={50} />} />
					<Skill name='CSS' icon={<SiCss3 size={50} />} />
					<Skill name='JavaScript' icon={<SiJavascript size={50} />} />
					<Skill name='Github' icon={<SiGithub size={50} />} />
					<Skill name='Sass' icon={<SiSass size={50} />} />
					<Skill name='Tailwind' icon={<SiTailwindcss size={50} />} />
					<Skill name='REACT' icon={<SiReact size={50} />} />
					<Skill name='NextJS' icon={<SiNextdotjs size={50} />} />
				</div>
			</div>
		</div>
	);
};

export default Skills;
