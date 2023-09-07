import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.buttongroup}>
				<button>Resume</button>
				<button>Dark Mode</button>
			</div>
		</header>
	);
};

export default Header;
