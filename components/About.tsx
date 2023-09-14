/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.topbar}>
				<span>About</span>
			</div>
			<div className={styles.content}>
				<div>
					<h1>My Story</h1>
					<span>
						Ever since I was young, I've been captivated by the endless
						possibilities that the digital world offers. From creating digital
						art to exploring immersive game environments and dissecting the
						storytelling magic of movies, I've always been drawn to the creative
						and technical aspects of these mediums.
					</span>
				</div>
				<div>
					<h1>Why Web Development</h1>
					<span>
						My journey into web development was a natural progression of those
						interests. I realized that the web is a canvas where I can blend my
						creative instincts with my technical skills. It's a space where I
						can craft engaging and user-friendly experiences, just like the art,
						games, and movies that have inspired me throughout my life.
					</span>
				</div>
				<div>
					<h1>My Approach</h1>
					<span>
						As a digital artist turned web developer paired with my knowledge of
						UI design, I bring a unique perspective to every project I
						undertake. I believe in the power of strong design and
						functionality. I'm dedicated to delivering solutions that resonate
						with users and clients alike.
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
