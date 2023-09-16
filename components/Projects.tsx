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
									return <div key={Math.random()}>{tag}</div>;
								})}
							</div>
							<h1>{project.name}</h1>
							<p>{project.description}</p>
							<div>
								<p>
									{project.websitelink && (
										<span>
											Here's the live{" "}
											<Link href={project.websitelink}>website</Link>
											! <br />
										</span>
									)}
									{project.sourcecode &&
										(project.websitelink ? (
											<span>
												Or would you like to see the{" "}
												<Link href={project.sourcecode}>source code</Link>?
											</span>
										) : (
											<span>
												Here's the{" "}
												<Link target="__blank" href={project.sourcecode}>
													source code
												</Link>
												!
											</span>
										))}
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
