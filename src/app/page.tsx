"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import { useContext } from "react";
import { SelectionContext } from "@/context/selection.context";

export default function Home() {
	const { state, dispatch } = useContext(SelectionContext);

	return (
		<main className={styles.main}>
			<div className={styles.body}>
				<Hero />
				{state.page === "Projects" && <Projects />}
				{state.page === "Experience" && <Experience />}
			</div>
		</main>
	);
}
