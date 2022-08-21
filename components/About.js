import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-auto px-6 flex items-center py-16 dark:bg-darkGray bg-lightGray'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-12'>
				<div className='col-span-2'>
					<p className='text-xl tracking-widest uppercase text-primary'>
						O mnie
					</p>
					<h2 className='py-4'>Kilka słów o mnie</h2>
					<h3 className='text-primary font-medium mt-2'>Ogólne:</h3>
					<p className='text-lg font-normal'>
						Cześć! Mam na imię Konrad. Obecnie zajmuję się tworzeniem stron
						internetowych w oparciu o najnowsze technologie. Póki co wykonuję je
						na własny użytek, gdyż sprawia mi to dużą przyjemność i jestem w
						stanie wiele się z nich nauczyć. Z każdym kolejnym projektem staram
						się coraz bardziej rozwijać, poprzez tworzenie bardziej
						zaawansowanych witryn. Aktualnie poszukuje stażu, aby zdobyć
						jakiekolwiek doświadczenie zawodowe.
					</p>
					<h3 className='text-primary font-medium mt-2'>Personalne:</h3>
					<div className='text-lg'>
						<p className='py-1'>
							<span className='font-semibold'>Data urodzenia:</span>{" "}
							18.10.2002r.
						</p>
						<p className='py-1'>
							<span className='font-semibold'>Miejsce zamieszkania:</span>{" "}
							Kraśnik
						</p>
						<p className='py-1'>
							<span className='font-semibold'>Email:</span> konrad18v1@p.pl
						</p>
					</div>
					<h3 className='text-primary font-medium mt-2'>Wykształcenie:</h3>
					<div className='text-lg mb-6'>
						<div className='mt-2'>
							<p className='text-sm font-light '>10.2022-?</p>
							<h3 className='font-medium'>
								Wykształcenie: <span className='text-primary'>Wyższe</span>
							</h3>
							<p className='mt-2'>
								Rozpoczęcie studiów inżynierskich na Politechnice Lubelskiej,
								kierunek informatyka.
							</p>
						</div>
						<div className='mt-4'>
							<p className='text-sm font-light '>09.2018-05.2022</p>
							<h3 className='font-medium'>
								Wykształcenie: <span className='text-primary'>Średnie</span>
							</h3>
							<p className='mt-2'>
								Ukończenie nauki w Technikum nr.1 w Kraśniku na profilu
								informatycznym.
							</p>
						</div>
					</div>

					<Link href='/#projects'>
						<button className='w-full sm:w-auto shadow-lg dark:shadow-black shadow-black/20 ease duration-100 hover:scale-105 px-8 py-2 mt-4 dark:hover:bg-transparent hover:border-primary hover:bg-transparent hover:text-dark text-light border-dark bg-dark dark:hover:text-light tracking-wider md:mr-10 mr-5 dark:bg-light dark:text-dark font-bold uppercase rounded-md border-2'>
							Sprawdź moje projekty!
						</button>
					</Link>

					<Link href='/#contact'>
						<button className='w-full sm:w-auto shadow-lg dark:shadow-black shadow-black/20 ease duration-100 hover:scale-105 px-8 py-2 mt-4 dark:hover:bg-primary hover:border-primary hover:bg-primary dark:hover:text-dark text-light border-dark bg-dark  tracking-wider  md:mr-10 dark:bg-light dark:text-dark font-bold uppercase rounded-md border-2'>
							Kontakt!
						</button>
					</Link>
				</div>
				<div className='md:max-h-[600px] md:my-auto my-6 w-full  h-auto m-auto shadow-xl dark:hover:bg-primary hover:bg-primary bg-darkGray dark:bg-dark shadow-black/20 dark:shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<img className='rounded-xl' src='/assets/picture.png' alt='picture' />
				</div>
			</div>
		</div>
	);
};

export default About;
