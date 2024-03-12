"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
	const [darkMode, setdarkMode] = useState(false);

	const darkModeHandler = () => {
		setdarkMode(!darkMode);
	};

	return (
		<header className={styles.header}>
			<div className={styles.buttongroup}>
				<Link download="Afnan's Resume" href="/Afnan's Resume.docx">
					<button>Resume</button>
				</Link>
				<Link download="Design Portfolio" href="/design.pdf">
					<button>Design Portfolio</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
