export const projects = [
	{
		name: "Interesting App",
		tags: [
			"React",
			"Redux Toolkit",
			"Express",
			"Non-Relational Database",
			"Next",
			"Node",
		],
		description: `Users are presented with random facts fetched from the database, which they can save upon logging in. The login functionality allows users to securely store and access their favorite facts. MongoDB stores user data and a repository of facts. React/Next.js handles the frontend, delivering a seamless user experience with interactive fact display and retrieval. This engaging app offers users an enjoyable way to discover intriguing facts.`,
		websitelink: "https://interesting-nine.vercel.app",
		sourcecode: "https://github.com/afnandraws/interesting",
	},
	{
		name: "Todo List App",
		tags: ["React", "Redux Toolkit", "Next", "IndexedDB"],
		description: `This is a simple application to record the tasks that an individual
    has to carry out. It allows them to tag them appropriately, as well
    as add subtasks and dates to the subtasks. In order to store this
    information without including any kind of backend, I utilised
    IndexedDB, to store relational data in local storage.`,
		websitelink: "https://hammerhead-app-gfroz.ondigitalocean.app",
		sourcecode: "https://github.com/afnandraws/todolist/",
	},
	{
		name: "Chat App",
		tags: ["React", "Websockets", "Node", "Next", "IndexedDB"],
		description: `This is an application I created to allow friends to talk via a chat. Multiple people are able to join rooms together and after a disconnect, you are able to rejoin and it populates the chat with previous messages.`,
		websitelink: "",
		sourcecode: "",
	},
	{
		name: "Datepicker Component",
		tags: ["HTML", "CSS", "JS", "React"],
		description:
			"This was a datepicker component I made because I felt like I could improve the styling and maintain the functionality of the default HTML datepicker component.",
		websitelink: "",
		sourcecode: "https://github.com/afnandraws/calendar",
	},
	{
		name: "This Website!",
		tags: ["React", "Next", "Typescript"],
		description:
			"This is a static site, coded in React, hosted on DigitalOcean. With this I wanted to focus on front end design and ensuring that the website had a responsive design.",
		websitelink: "",
		sourcecode: "https://github.com/afnandraws/portfolio",
	},
];
