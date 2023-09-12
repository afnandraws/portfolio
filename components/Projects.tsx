/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "./Projects.module.css";
import { projects } from "./ProjectData";
import { ReactNode } from "react";

interface Project {
	name: string;
	tags: string[];
	description: string;
	websitelink: string;
	sourcecode: string;
}

const Projects = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.topbar}>
				<span>Projects</span>
			</div>
			<div className={styles.board}>
				{projects.map((project: Project): ReactNode => {
					return (
						<div key={Math.random()} className={styles.project}>
							<div className={styles.tags}>
								{project.tags.map((tag: string) => {
									return <h3 key={Math.random()}>{tag}</h3>;
								})}
							</div>
							<h1>{project.name}</h1>
							<p>{project.description}</p>
							<div>
								<p>
									Here's the live{" "}
									<Link href={project.websitelink}>website</Link>
									! <br />
									Or would you like to see the{" "}
									<Link href={project.sourcecode}>source code</Link>?
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
