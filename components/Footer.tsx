"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { SelectionContext } from "@/context/selection.context";

const Footer = () => {
	const { state, dispatch } = useContext(SelectionContext);
	const [isOpen, setIsOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // empty deps array to run once

	function selectionHandler(event: React.MouseEvent<HTMLElement>) {
		console.log(event.currentTarget.id);
		dispatch({ type: event.currentTarget.id });
	}

	function toggleOpen() {
		setIsOpen((prev) => !prev);
	}

	return (
		<footer className={styles.footer}>
			{width < 769 && (
				<button className={styles.toggle} onClick={toggleOpen}>
					{isOpen ? "Menu" : "Menu"}
				</button>
			)}
			<div className={isOpen ? styles.open : ""}>
				{" "}
				<button
					className={
						state.page === "Projects" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="Projects">
					Projects
				</button>
				<button
					className={
						state.page === "Experience" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="Experience">
					Experience
				</button>
				<button
					className={
						state.page === "About" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="About">
					About
				</button>
				<button
					className={
						state.page === "Socials" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="Socials">
					Socials
				</button>
			</div>
		</footer>
	);

	return (
		<footer className={styles.footer}>
			<div>
				<button
					className={
						state.page === "Projects" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="Projects">
					Projects
				</button>
				<button
					className={
						state.page === "Experience" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="Experience">
					Experience
				</button>
				<button
					className={
						state.page === "About" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="About">
					About
				</button>
				<button
					className={
						state.page === "Socials" ? styles.selected : styles.unselected
					}
					onClick={selectionHandler}
					id="Socials">
					Socials
				</button>
			</div>
		</footer>
	);
};

export default Footer;
