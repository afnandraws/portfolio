/* eslint-disable react/no-unescaped-entities */
import { ReactNode, useState } from "react";
import styles from "./Experience.module.css";
import { ExperienceData } from "./ExperienceData";

interface Experience {
	employer: string;
	timespan: string;
	location: string;
	role: string;
	description: any;
}

const store = ExperienceData.map((experience: Experience, index): ReactNode => {
	return (
		<div key={index} className={styles.description}>
			<div>
				<span>{experience.timespan}</span>
				<span>{experience.location}</span>
			</div>
			<h2>{experience.employer}</h2>
			<h3>{experience.role}</h3>
			{experience.description}
		</div>
	);
});

const Experience = () => {
	const [current, setCurrent] = useState(0);

	const experience = ["Content Guru", "Graphic Design", "DNA Royal Holloway"];

	function selectionHandler(event: React.MouseEvent<HTMLElement>) {
		console.log(event.currentTarget.id);
		const temp = +event.currentTarget.id;
		setCurrent(temp);
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
								className={current === index ? styles.selected : ""}>
								{job}
							</div>
						);
					})}
				</div>
				{store[current]}
			</div>
		</div>
	);
};

export default Experience;
