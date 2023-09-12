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
					Afnan is a London-based full stack developer with experience in Web
					design, backend frameworks and UI design. I enjoy playing games,
					watching crime documentaries and drawing
				</p>
			</div>
		</div>
	);
};

export default Hero;
