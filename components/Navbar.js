import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import NavbarLink from "./NavbarLink";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const [invertedComponentsColor, setInvertedComponentsColor] =
		useState("#252422");

	const router = useRouter();
	const handleNav = () => setNav(!nav);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
				setInvertedComponentsColor("#fefefe");
			} else {
				setShadow(false);
				setInvertedComponentsColor("#252422");
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? " dark:bg-dark bg-light fixed w-full h-20 shadow-black/20 shadow-2xl dark:shadow-black z-[11] ease-linear duration-100 "
					: "dark:text-light dark:bg-dark text-dark bg-light fixed w-full h-20 z-[11] ease-linear duration-100"
			}>
			<div className='flex justify-between items-center w-full h-full px-4 md:px-4 2xl:px-16'>
				<div className=' bg-darkLogo bg-contain dark:bg-lightLogo bg-no-repeat bg-center min-h-[80px] min-w-[80px]'></div>
				<div className='mr-auto ml-3 border-l-2 h-[40%] flex items-center border-l-primary'>
					<p className='  uppercase text-xs font-semibold px-4'>
						Konrad Piekarz
					</p>
				</div>
				<div className='h-full flex'>
					<ul className='hidden md:flex uppercase my-auto mb-[4px] dark:text-light text-dark'>
						<NavbarLink name={"Home"} site={"home"} from={0} to={950} />
						<NavbarLink name={"O mnie"} site={"about"} from={960} to={1750} />
						<NavbarLink
							name={"Technologie"}
							site={"skills"}
							from={1760}
							to={2550}
						/>
						<NavbarLink
							name={"Portfolio"}
							site={"projects"}
							from={2560}
							to={3250}
						/>
						<NavbarLink
							name={"Kontakt"}
							site={"contact"}
							from={3260}
							to={4300}
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
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li
									onClick={() => setNav(false)}
									className='py-4 px-2 text-sm border-l-8 border-l-transparent hover:border-l-primary ease-linear duration-100 hover:text-primary'>
									Contact
								</li>
							</Link>
						</ul>
					</div>

					<div className='flex justify-end min-h-[80px] mr-3'>
						<ThemeChanger />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
