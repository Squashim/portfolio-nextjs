import React from "react";
import Image from "next/image";
import cardDetails from "../public/assets/card_details.png";

import { BiArrowBack } from "react-icons/bi";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const template = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
				<Image
					src={cardDetails}
					alt='/'
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
				/>
				<div className='px-6 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-4'>Credit Card Details Form</h2>
					<h3 className='font-semibold text-primary'>HTML / SASS / CSS / JS</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-16 px-6'>
				<div className='col-span-4 '>
					<h2>O Projekcie</h2>
					<p className='py-6  first-letter:font-semibold'>
						Jest to jedno z nowszych wyzwań na stronie{" "}
						<a
							href='https://www.frontendmentor.io/'
							className='italic font-semibold text-primary'>
							Frontend Mentor
						</a>
						, który pomaga w ćwiczeniu umiejętności związanych z Front-Endem.
						Głównym zamysłem tej strony jest przekazywanie danych wpisanych
						przez użytkownika do formularza w czasie rzeczywistym na zdjęcie
						przedstawiające kartę kredytową, a także obsługa i wyświetlanie
						błędów popełnionych w formularzu. Użytkownicy powinni być w stanie
						zobaczyć optymalny układ strony w zależności od rozmiaru ekranu ich
						urządzenia, a także zobaczyć zmienny stan po najechaniu kursorem na
						interaktywne elementy strony.
					</p>
					<a
						href='https://squashim.github.io/details-card-form/'
						target='_blank'>
						<button className='shadow-lg dark:shadow-black shadow-black/20 ease duration-100 hover:scale-105 px-8 py-2 mt-4 dark:hover:bg-transparent hover:border-primary hover:bg-transparent hover:text-dark text-light border-dark bg-dark dark:hover:text-light tracking-wider md:mr-10 mr-5 dark:bg-light dark:text-dark font-bold uppercase rounded-md border-2'>
							Live
						</button>
					</a>
					<a
						href='https://github.com/Squashim/details-card-form'
						target='_blank'>
						<button className='shadow-lg dark:shadow-black shadow-black/20 ease duration-100 hover:scale-105 px-8 py-2 mt-4 dark:hover:bg-primary hover:border-primary hover:bg-primary dark:hover:text-dark text-light border-dark bg-dark  tracking-wider  md:mr-10 dark:bg-light dark:text-dark font-bold uppercase rounded-md border-2'>
							Code
						</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-black/20 dark:shadow-black rounded-xl p-4'>
					<div className='p-1 m-auto'>
						<p className='text-center font-bold pb-4'>Technologie</p>
						<div className='grid grid-cols-3 md:grid-cols-1 '>
							<p className='dark:text-light text-dark py-2 flex items-center uppercase gap-2'>
								<RiRadioButtonFill className='pr-1 text-primary' /> HTML
							</p>
							<p className='dark:text-light text-dark py-2 flex items-center uppercase gap-2'>
								<RiRadioButtonFill className='pr-1 text-primary' /> sass
							</p>
							<p className='dark:text-light text-dark py-2 flex items-center uppercase gap-2'>
								<RiRadioButtonFill className='pr-1 text-primary' /> css
							</p>
							<p className='dark:text-light text-dark py-2 flex items-center uppercase gap-2'>
								<RiRadioButtonFill className='pr-1 text-primary' /> JS
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<div className='flex items-center hover:text-primary'>
						<BiArrowBack />
						<p className=' cursor-pointer ml-2'> Wstecz</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default template;
