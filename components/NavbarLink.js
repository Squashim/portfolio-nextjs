import React from "react";
import Link from "next/link";
import { useScrollPosition } from "../hooks/useScrollPosition";

const NavbarLink = ({ name, site, from, to }) => {
	const scrollPosition = useScrollPosition();
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<Link href={`/#${site}`}>
			<li
				className={classNames(
					scrollPosition >= from && scrollPosition <= to
						? `ease-in duration-100 border-b-4 px-2 text-sm  h-full py-[28px] ml-2 lg:ml-6 text-primary border-b-primary`
						: `ease-in duration-100  hover:border-b-4 hover:border-b-dark dark:hover:border-b-light px-2 text-sm h-full py-[28px] ml-2 lg:ml-6`
				)}>
				{name}
			</li>
		</Link>
	);
};

export default NavbarLink;
