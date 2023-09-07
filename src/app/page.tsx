import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.body}>
				<Hero />
				<Projects />
				{/* <Experience /> */}
			</div>
		</main>
	);
}
