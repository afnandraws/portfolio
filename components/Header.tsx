"use client";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
	const [darkMode, setdarkMode] = useState(false);

	const darkModeHandler = () => {
		setdarkMode(!darkMode);
	};

	return (
		<header className={styles.header}>
			<div className={styles.buttongroup}>
				<button>Resume</button>
			</div>
		</header>
	);
};

export default Header;
