import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link, animatedScroll as scroll } from "react-scroll";
import "./NavbarElement.scss";

export default function NavbarElement() {
	const [openHam, setopenHam] = useState(false);
	const closeMenu = () => {
		setopenHam(false);
	};
	useEffect(() => {
		const body = document.querySelector("body");
		const sidebar = document.querySelector(".sidebar");
		if (sidebar.classList.contains("open")) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflowY = "scroll";
		}
	}, [openHam]);
	return (
		<header>
			<nav className="navbar flex flex-jc-sb flex-ai-c">
				<h1 className="navbar-logo">SB</h1>
				<ul className="navbar-links">
					<li className="navbar-links-item">
						<Link
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
							to="hero"
						>
							Home
						</Link>
					</li>
					<li className="navbar-links-item">
						<Link
							spy={true}
							smooth={true}
							offset={-75}
							duration={500}
							to="about"
						>
							About
						</Link>
					</li>
					<li className="navbar-links-item">
						<Link
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							to="projects"
						>
							Projects
						</Link>
					</li>
					<li className="navbar-links-item">
						<Link
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							to="contact"
						>
							Contact
						</Link>
					</li>
				</ul>
				<div
					className={
						openHam ? "navbar-hamburgermenu open" : "navbar-hamburgermenu"
					}
					onClick={() => setopenHam(!openHam)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={openHam ? "sidebar open" : "sidebar"}>
					<ul className="mobile-menu">
						<li className="mobile-menu-item">
							<Link
								spy={true}
								smooth={true}
								offset={-80}
								duration={500}
								to="hero"
								onClick={closeMenu}
							>
								Home
							</Link>
						</li>
						<li className="mobile-menu-item">
							<Link
								spy={true}
								smooth={true}
								offset={-75}
								duration={500}
								to="about"
								onClick={closeMenu}
							>
								About
							</Link>
						</li>
						<li className="mobile-menu-item">
							<Link
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								to="projects"
								onClick={closeMenu}
							>
								Projects
							</Link>
						</li>
						<li className="mobile-menu-item">
							<Link
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								to="contact"
								onClick={closeMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
