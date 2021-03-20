import React, { useState, useEffect } from "react";
import "./HeroElement.scss";
import { Link as RouterLink } from "react-router-dom";
import { Link, animatedScroll as scroll } from "react-scroll";

export default function HeroElement() {
	const [active, setactive] = useState(true);
	useEffect(() => {
		const interval = setInterval(() => {
			setactive(!active);
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	}, [active]);

	return (
		<section className="hero flex flex-ai-c" id="hero">
			<div className="hero-container flex flex-jc-sb">
				<div className="hero-container-info">
					<h3>
						<span></span>Hello there
					</h3>
					<h1>I am Sujan Bal</h1>
					<h1 className="info">
						I am a{" "}
						<span className={active ? "info" : "none"}>Coding Enthusiast</span>{" "}
						<span className={!active ? "info" : "none"}>Web Developer</span>
					</h1>
				</div>
				<div className="hero-container-button">
					<Link spy={true} smooth={true} offset={-80} duration={500} to="about">
						Hire Me
					</Link>
					<a
						href="https://drive.google.com/file/d/1Agr3zZ9mO-eTmZiPjfdcvPpKrOTWjIbC/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
}
