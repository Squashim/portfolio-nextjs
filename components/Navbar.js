import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarLink from "./NavbarLink";
import ThemeChanger from "./ThemeChanger";
import { SiGithub, SiFrontendmentor, SiLinkedin } from "react-icons/si";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => setNav(!nav);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<nav
			className={
				shadow
					? " dark:bg-dark bg-light fixed w-full h-20 shadow-black/20 shadow-2xl dark:shadow-black z-[11] ease-linear duration-100 "
					: "dark:text-light dark:bg-dark text-dark bg-light fixed w-full h-20 z-[11] ease-linear duration-100"
			}>
			<div className='flex justify-between items-center w-full h-full px-4 md:px-4 2xl:px-16'>
				<Link href='/'>
					<div className='cursor-pointer bg-darkLogo bg-contain dark:bg-lightLogo bg-no-repeat bg-center min-h-[80px] min-w-[80px]'></div>
				</Link>
				<div className='mr-auto ml-3 border-l-2 h-[40%] flex items-center border-l-primary'>
					<p className='  uppercase text-xs font-semibold px-4'>
						Konrad Piekarz
					</p>
				</div>
				<div className='h-full flex'>
					<ul className='hidden md:flex uppercase my-auto mb-[4px] dark:text-light text-dark'>
						<NavbarLink name={"Home"} site={"home"} from={0} to={830} />
						<NavbarLink name={"O mnie"} site={"about"} from={835} to={1735} />
						<NavbarLink
							name={"Technologie"}
							site={"skills"}
							from={1740}
							to={2635}
						/>
						<NavbarLink
							name={"Portfolio"}
							site={"projects"}
							from={2640}
							to={4275}
						/>
						<NavbarLink
							name={"Kontakt"}
							site={"contact"}
							from={4280}
							to={4400}
						/>
						<ThemeChanger />
					</ul>
					<div onClick={handleNav} className='md:hidden my-auto'>
						<AiOutlineMenu
							size={25}
							className='text-primary hover:rotate-90 cursor-pointer ease-linear duration-100'
						/>
					</div>
				</div>
			</div>

			{/* Mobile navbar */}
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 " : ""
				}>
				<div
					className={
						nav
							? `fixed left-0 top-0 w-[80%] sm:w-[60%] h-screen dark:bg-dark bg-light px-10 py-5 ease-in duration-500 `
							: "fixed left-[-100%] top-0  px-10 py-5 h-screen ease-in duration-500"
					}>
					<div>
						<div className='flex w-full items-center justify-between'>
							<div className=' bg-darkLogo bg-contain dark:bg-lightLogo bg-no-repeat bg-center min-h-[80px] min-w-[80px]'></div>
							<div
								onClick={handleNav}
								className='rounded-full  p-3 cursor-pointer'>
								<AiOutlineClose
									size={25}
									className='text-primary ease-linear duration-300 hover:rotate-180 hover:scale-110'
								/>
							</div>
						</div>
					</div>

					<div className='py-4 flex flex-col border-t-2 border-b-2 dark:border-light border-dark'>
						<ul className='uppercase'>
							<Link href='/#home'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									O mnie
								</li>
							</Link>
							<Link href='/#skills'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Technologie
								</li>
							</Link>
							<Link href='/#projects'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Portfolio
								</li>
							</Link>
							<Link href='/#contact'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Kontakt
								</li>
							</Link>
						</ul>
					</div>

					<div className='flex justify-end min-h-[80px] mr-3'>
						<ThemeChanger />
					</div>

					<div className='flex flex-col'>
						<h3 className='text-center font-semibold text-lg'>
							Znajdź mnie na
						</h3>
						<div className='flex items-center justify-center'>
							<a
								href='https://www.frontendmentor.io/profile/Squashim'
								target='_blank'
								className='mx-auto pt-6 text-center hover:text-primary hover:scale-110 ease duration-100'>
								<SiFrontendmentor size={30} className='mx-auto' />
							</a>
							<a
								href='https://github.com/Squashim'
								target='_blank'
								className='mx-auto pt-6 text-center hover:text-primary hover:scale-110 ease duration-100'>
								<SiGithub size={30} className='mx-auto' />
							</a>
							<a
								href='https://www.linkedin.com/in/konrad-piekarz-9a6428244/'
								target='_blank'
								className='mx-auto pt-6 text-center hover:text-primary hover:scale-110 ease duration-100'>
								<SiLinkedin size={30} className='mx-auto' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
