import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("white");
	const [logoLight, setLogoLight] = useState(false);
	const [navComponentsColor, setNavComponentsColor] = useState("black");

	const router = useRouter();

	const handleNav = () => setNav(!nav);

	useEffect(() => {
		if (router.asPath === "/template") {
			setNavBg("transparent");
			setNavComponentsColor("white");
			setLogoLight(true);
		} else {
			setNavBg("white");
			setNavComponentsColor("black");
			setLogoLight(false);
		}
	}, [router]);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else setShadow(false);
		};
		window.addEventListener("scroll", handleShadow);
	}, []);
	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[11]"
					: "fixed w-full h-20 z-[11]"
			}>
			<div className='flex justify-between items-center w-full h-full px-4 md:px-6 2xl:px-16'>
				{logoLight ? (
					<Image
						src='/../assets/logoLight.svg'
						width={80}
						height={80}
						alt='logo'
					/>
				) : (
					<Image src='/../assets/logo.svg' width={80} height={80} alt='logo' />
				)}

				<div
					style={{ borderLeftColor: `${navComponentsColor}` }}
					className='mr-auto ml-3 border-l-2 h-[40%] flex items-center'>
					<p
						style={{ color: `${navComponentsColor}` }}
						className=' uppercase text-xs font-bold px-2'>
						Konrad Piekarz
					</p>
				</div>
				<div>
					<ul
						style={{ color: `${navComponentsColor}` }}
						className='hidden md:flex uppercase'>
						<Link href='/#home'>
							<li className='ml-10 text-sm hover:border-b'>Home</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm hover:border-b'>About</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm hover:border-b'>Skills</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm hover:border-b'>Projects</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm hover:border-b'>Contact</li>
						</Link>
					</ul>
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[80%] sm:w-[60%] h-screen bg-white px-10 py-5 ease-in duration-500"
							: "fixed left-[-100%] top-0  px-10 py-5 h-screen ease-in duration-500"
					}>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Image
								src='/../assets/logo.svg'
								width={80}
								height={80}
								alt='logo'
							/>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4'>Let's build something!</p>
						</div>
					</div>

					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/#home'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
