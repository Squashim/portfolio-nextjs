import React from "react";
import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { BsChevronUp } from "react-icons/bs";
import { SiGithub, SiFrontendmentor, SiLinkedin } from "react-icons/si";

const Contact = () => {
	return (
		<div id='contact' className='w-full '>
			<div className='max-w-[1240px] m-auto px-6 py-16 w-full flex flex-col items-center justify-center relative'>
				<p className='text-xl tracking-widest uppercase text-primary pt-16'>
					Kontakt
				</p>
				<div className='max-w-[550px] mx-auto text-center'>
					<h2 className='py-4 border-b-2 border-b-primary'>
						Zapraszam do kontaktu
					</h2>

					<div className='flex w-full items-center py-6 justify-center flex-col my-12'>
						<h3 className='text-4xl font-semibold'>Napisz do mnie na:</h3>
						<div className=' py-4 hover:text-primary hover:scale-110 ease duration-100'>
							<a href='mailto:konrad18v1@wp.pl' className='flex gap-2'>
								<GrMail size={30} />
								<p className='text-xl font-semibold'>konrad18v1@wp.pl</p>
							</a>
						</div>
					</div>

					<div className='flex flex-col my-12 '>
						<h3 className='text-center text-4xl font-semibold border-t-2 pt-4 border-t-primary'>
							Znajdź mnie na:
						</h3>
						<div className='flex items-center justify-center py-6'>
							<a
								href='https://www.frontendmentor.io/profile/Squashim'
								target='_blank'
								className='mx-auto pt-6 text-center hover:text-primary hover:scale-110 ease duration-100'>
								<SiFrontendmentor size={40} className='mx-auto' />
							</a>
							<a
								href='https://github.com/Squashim'
								target='_blank'
								className='mx-auto pt-6 text-center hover:text-primary hover:scale-110 ease duration-100'>
								<SiGithub size={40} className='mx-auto' />
							</a>
							<a
								href='https://www.linkedin.com/in/konrad-piekarz-9a6428244/'
								target='_blank'
								className='mx-auto pt-6 text-center hover:text-primary hover:scale-110 ease duration-100'>
								<SiLinkedin size={40} className='mx-auto' />
							</a>
						</div>
					</div>
				</div>

				<div className='text-primary p-3 mb-4 right-2 shadow-lg dark:shadow-black shadow-black/20 absolute bottom-2 bg-lightGray dark:bg-darkGray rounded-full hover:scale-110 ease duration-100  cursor-pointer'>
					<Link href='/'>
						<BsChevronUp className='cursor-pointer' size={30} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
