import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<button>Projects</button>
				<button>Experience</button>
				<button>About</button>
				<button>Socials</button>
			</div>
		</footer>
	);
};

export default Footer;
