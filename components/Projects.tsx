import Link from "next/link";
import styles from "./Projects.module.css";

const Projects = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.topbar}>
				<span>Projects</span>
				<span>Sort</span>
			</div>
			<div className={styles.board}>
				<div className={styles.project}>
					<div className={styles.tags}>
						<h3>React</h3>
						<h3>Redux Toolkit</h3>
						<h3>Non-Relational Database</h3>
						<h3>Next</h3>
						<h3>Node</h3>
						<h3>Express</h3>
					</div>
					<h1>Interesting Facts</h1>
					<p>
						This is a full stack application which presents random interesting
						facts to the users. Users are able to log in and save posts so that
						they can see them in a glance in a "Saved Posts" page. <br />
						<Link href="/about">Learn more</Link>
					</p>
					<div>
						<p>
							Here's the live{" "}
							<Link href={"https://www.google.com"}>website</Link>
							! <br />
							Or would you like to see the{" "}
							<Link href={"https://www.google.com"}>source code</Link>?
						</p>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.tags}>
						<h3>React</h3>
						<h3>Redux Toolkit</h3>
						<h3>Next</h3>
						<h3>IndexedDB</h3>
					</div>
					<h1>Todo List App</h1>
					<p>
						This is a simple application to record the tasks that an individual
						has to carry out. It allows them to tag them appropriately, as well
						as add subtasks and dates to the subtasks. In order to store this
						information without including any kind of backend, I utilised
						IndexedDB, to store relational data in local storage. <br />
						<Link href="/about">Learn more</Link>
					</p>
					<div>
						<p>
							Here's the live{" "}
							<Link href={"https://www.google.com"}>website</Link>
							! <br />
							Or would you like to see the{" "}
							<Link href={"https://www.google.com"}>source code</Link>?
						</p>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.tags}>
						<h3>React</h3>
						<h3>Next</h3>
						<h3>Node</h3>
						<h3>Websockets</h3>
						<h3>IndexedDB</h3>
					</div>
					<h1>Chat App</h1>
					<p>
						This is a simple application to record the tasks that an individual
						has to carry out. It allows them to tag them appropriately, as well
						as add subtasks and dates to the subtasks. In order to store this
						information without including any kind of backend, I utilised
						IndexedDB, to store relational data in local storage. <br />
						<Link href="/about">Learn more</Link>
					</p>
					<div>
						<p>
							Here's the live{" "}
							<Link href={"https://www.google.com"}>website</Link>
							! <br />
							Or would you like to see the{" "}
							<Link href={"https://www.google.com"}>source code</Link>?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
