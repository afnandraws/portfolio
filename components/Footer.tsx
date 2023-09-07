"use client";

import { useContext, useEffect } from "react";
import styles from "./Footer.module.css";
import { SelectionContext } from "@/context/selection.context";

const Footer = () => {
	const { state, dispatch } = useContext(SelectionContext);

	const selectionHandler = (event: React.MouseEvent<HTMLElement>) => {
		console.log(event.currentTarget.id);
		dispatch({ type: event.currentTarget.id });
	};

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
