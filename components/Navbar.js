import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("rgba(0, 0, 0, 0.7)");
	const [logoLight, setLogoLight] = useState(true);
	const [navComponentsColor, setNavComponentsColor] = useState("#fefefe");

	const router = useRouter();

	const handleNav = () => setNav(!nav);

	useEffect(() => {
		if (router.asPath === "/template") {
			setNavBg("transparent");
			setNavComponentsColor("#fefefe");
			setLogoLight(true);
		} else {
			setNavBg("rgba(0, 0, 0, 0.7)");
		}
	}, [router]);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
				setNavBg("#fefefe");
				setLogoLight(false);
				setNavComponentsColor("#252422");
			} else {
				setShadow(false);
				setNavBg("rgba(0, 0, 0, 0.7)");
				setLogoLight(true);
				setNavComponentsColor("#fefefe");
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[11] ease-linear duration-100 "
					: "fixed w-full h-20 z-[11] ease-linear duration-100"
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

				<div className='mr-auto ml-3 border-l-2 h-[40%] flex items-center border-l-primary'>
					<p
						style={{ color: `${navComponentsColor}` }}
						className=' uppercase text-xs font-semibold px-4'>
						Konrad Piekarz
					</p>
				</div>
				<div className='h-full flex'>
					<ul
						style={{ color: `${navComponentsColor}` }}
						className='hidden md:flex uppercase my-auto mb-[4px]'>
						<NavbarLink name={"Home"} site={"home"} from={0} to={950} />
						<NavbarLink name={"About"} site={"about"} from={960} to={1900} />
						<NavbarLink name={"Skills"} site={"skills"} from={1910} to={2800} />
						<NavbarLink name={"Projects"} site={"home"} from={2810} to={3700} />
						<NavbarLink
							name={"Contact"}
							site={"contact"}
							from={3700}
							to={4257}
						/>
					</ul>
					<div onClick={handleNav} className='md:hidden'>
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
