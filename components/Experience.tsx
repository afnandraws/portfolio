/* eslint-disable react/no-unescaped-entities */
import { ReactNode, useState } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
	const [current, setCurrent] = useState("0");

	const experience = ["Content Guru", "Graphic Design", "DNA Royal Holloway"];

	function selectionHandler(event: React.MouseEvent<HTMLElement>) {
		console.log(event.currentTarget.id);
		setCurrent(event.currentTarget.id);
	}

	return (
		<div className={styles.experience}>
			<div className={styles.topbar}>
				<span>Experience</span>
			</div>
			<div className={styles.content}>
				<div className={styles.list}>
					{experience.map((job: string, index): ReactNode => {
						return (
							<div
								onClick={selectionHandler}
								id={`${index}`}
								key={index}
								className={current === `${index}` ? styles.selected : ""}>
								{job}
							</div>
						);
					})}
				</div>
				<div className={styles.description}>
					<div>
						<span>Nov 2022 - Present</span>
						<span>Bracknell, England</span>
					</div>
					<h2>Content Guru</h2>
					<h3>Support Engineer</h3>
					<p>
						Worked in a large CCaaS provider to provide 1st line support to
						companies around the world for proprietary software, analysing
						technical issues and providing solutions. <br />
						<br />- Working alongside Application and Project Management to
						ensure that customers get appropriate support for issues faced when
						using the software.
						<br />- Use of SQL & Postgres in order to troubleshoot problems with
						calls and various other database issues.
						<br />- Maintaining customers relationships, mainly within the
						Public Sector, including NHS, police and councils, diagnosing and
						resolving their issues
						<br />- Rotations in Operations departments, deploying upgrades and
						installations, using Nginx and Docker.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
