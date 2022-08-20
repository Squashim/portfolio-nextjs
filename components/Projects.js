import React from "react";
import ProjectItem from "./ProjectItem";
import shoesImg from "../public/assets/project_shoes.png";
import cardDetails from "../public/assets/card_details.png";
import tipCalculator from "../public/assets/tip_calculator.png";
import { SiGithub } from "react-icons/si";
import weatherImg from "../public/assets/weather_app.png";

const Projects = () => {
	return (
		<div id='projects' className='w-full dark:bg-darkGray bg-lightGray py-16'>
			<div className='max-w-[1240px] mx-auto px-6 pt-16'>
				<p className='text-xl tracking-widest uppercase text-primary'>
					Portfolio
				</p>
				<h2 className='py-4'>Moje projekty:</h2>
				<div className='grid md:grid-cols-2 gap-8 py-4'>
					<ProjectItem
						src={shoesImg}
						title='E-commerce Product Page'
						tech='HTML / SCSS / REACT'
						page={"e-commerce-shoes"}
					/>
					<ProjectItem
						src={weatherImg}
						title='Weather App'
						tech='NEXTJS / TAILWIND / REACT / API'
						page={"weather-app"}
					/>
					<ProjectItem
						src={cardDetails}
						title='Card Details Form Page'
						tech='HTML / JS / SASS / CSS'
						page={"credit-card-details"}
					/>
					<ProjectItem
						src={tipCalculator}
						title='Tip Calculator'
						tech='HTML / JS / SASS / CSS'
						page={"tip-calculator"}
					/>
				</div>
				<div className='text-center py-6  mx-auto flex flex-col px-2'>
					<h3>Więcej na: </h3>

					<a
						href='https://github.com/Squashim'
						target='_blank'
						className='mx-auto pt-6 text-center hover:scale-110 ease duration-100'>
						<SiGithub size={40} className='mx-auto' />
						<p className='text-primary font-sm font-semibold pt-2'>
							.../github.com/Squashim
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
