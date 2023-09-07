import Image from "next/image";
import image from "../public/image.svg";
import styles from "./Hero.module.css";
import Projects from "./Projects";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.intro}>
				<h1>Afnan Khan</h1>
				<p>
					Afnan is a London-based self taught developer with experience in Web
					design, backend frameworks and UI design. <br /> I enjoy playing
					games, watching crime documentaries and drawing
				</p>
			</div>
		</div>
	);
};

export default Hero;
