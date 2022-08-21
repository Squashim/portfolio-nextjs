import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const MainContainer = () => {
	return (
		<main>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
};

export default MainContainer;
