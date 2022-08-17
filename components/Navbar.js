import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => setNav(!nav);
	return (
		<div className='fixed w-full h-20 shadow-xl z-10 bg-[#fcfcfc] '>
			<div className='flex justify-between items-center w-full h-full px-4 md:px-6 2xl:px-16'>
				<Image src='/../assets/logo.svg' width={80} height={80} alt='logo' />
				<div className='mr-auto ml-3 border-l-2 h-[40%] flex items-center border-[#f45b69]/70'>
					<p className=' uppercase text-xs font-bold px-2'>Konrad Piekarz</p>
				</div>
				<div>
					<ul className='hidden md:flex uppercase'>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>Home</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>About</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>Projects</li>
						</Link>
						<Link href='/'>
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
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Contact</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
