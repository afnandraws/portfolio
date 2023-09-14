import Image from "next/image";
import image from "../public/image.svg";
import styles from "./Hero.module.css";
import Projects from "./Projects";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.intro}>
				<h1>Afnan Khan</h1>
				<div className={styles.links}>
					<a target="__blank" href="https://www.linkedin.com/in/m-afnankhan/">
						linkedin
					</a>
					<a target="__blank" href="https://github.com/afnandraws/">
						github
					</a>
					<a target="__blank" href="https://www.instagram.com/afnandraws/">
						instagram
					</a>
				</div>
				<p>
					Hi, I'm Afnan, a passionate web developer with a background in Digital
					Media. Big fan of creating things, whether that be with code, a
					paintbrush or with a guitar.
				</p>
			</div>
		</div>
	);
};

export default Hero;
