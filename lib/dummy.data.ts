import { convertDateString, transformMonthArrayNumberToString } from "./utils";

const location = {
	city: "Somewhere in Heaven",
	province: "Olympus the Home of the Gods",
	zipCode: "12345",
};

const DUMMY_EVENTS = [
	{
		id: "e1",
		title: "Programming for everyone",
		subtitle:
			"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
		description:
			"This event is perfect for beginners who have little to no experience in coding. We will cover the essential concepts, introduce you to programming languages, and provide hands-on exercises to solidify your understanding. By the end of this session, you'll have a solid foundation and the confidence to continue your coding journey.",
		location: {
			city: "Somewhere in Heaven",
			province: "Olympus the Home of the Gods",
			zipCode: "12345",
		},
		date: "2024-05-12",
		image: "/images/event001.jpg",
		isFeatured: false,
	},
	{
		id: "e2",
		title: "Networking for introverts",
		subtitle:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		description:
			"This event is tailored for introverts who find traditional networking events overwhelming. We will provide strategies and techniques that make networking more approachable, helping you build meaningful connections in a comfortable environment. Whether you're looking to advance your career or simply expand your social circle, this event will equip you with the tools you need to succeed.",
		location: {
			city: "City of Lights",
			province: "Antarctic Monkeys Province",
			zipCode: "99887",
		},
		date: "2024-05-30",
		image: "/images/event002.jpg",
		isFeatured: true,
	},
	{
		id: "e3",
		title: "Networking for extroverts",
		subtitle:
			"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
		description:
			"While extroverts are natural networkers, this event focuses on helping you refine your networking approach. You'll learn how to channel your energy more effectively, make deeper connections, and avoid the pitfalls of over-networking. This session is designed to help you optimize your social interactions, whether at professional events or social gatherings.",
		location: {
			city: "Never Sleep City",
			province: "The Why, What, and Where Province",
			zipCode: "33447",
		},
		date: "2024-04-10",
		image: "/images/event003.jpg",
		isFeatured: true,
	},
	{
		id: "e4",
		title: "Advanced JavaScript",
		subtitle:
			"Take your JavaScript skills to the next level with this advanced workshop. Learn the latest features and best practices in the industry.",
		description:
			"This event is designed for developers who have a solid foundation in JavaScript and want to deepen their knowledge. We will explore advanced concepts, including closures, async/await, and modern JavaScript patterns, to help you write more efficient and maintainable code.",
		location: {
			city: "Tech Valley",
			province: "Innovation Hub Province",
			zipCode: "45678",
		},
		date: "2023-11-20",
		image: "/images/event004.jpg",
		isFeatured: false,
	},
	{
		id: "e5",
		title: "AI in Healthcare",
		subtitle:
			"Discover the impact of artificial intelligence on the healthcare industry. Learn about the latest AI-driven technologies that are transforming patient care.",
		description:
			"This event will cover the latest advancements in AI within the healthcare sector. From predictive analytics to AI-driven diagnostics, you'll gain insights into how these technologies are being applied to improve patient outcomes and streamline healthcare processes.",
		location: {
			city: "Med City",
			province: "HealthTech Province",
			zipCode: "54321",
		},
		date: "2024-03-15",
		image: "/images/event005.jpg",
		isFeatured: true,
	},
	{
		id: "e6",
		title: "Sustainable Living",
		subtitle:
			"Join us for a discussion on sustainable living practices that can help reduce your carbon footprint and create a more eco-friendly lifestyle.",
		description:
			"This event will explore practical steps you can take to live a more sustainable life. Topics include reducing waste, choosing sustainable products, and understanding the environmental impact of your daily choices. You'll leave with actionable tips to make a positive difference.",
		location: {
			city: "Green Town",
			province: "Eco Friendly Province",
			zipCode: "67890",
		},
		date: "2023-12-05",
		image: "/images/event006.jpg",
		isFeatured: false,
	},
	{
		id: "e7",
		title: "Cryptocurrency Basics",
		subtitle:
			"An introductory event for those who are new to the world of cryptocurrency. Learn the fundamentals and how to get started.",
		description:
			"This event is perfect for beginners who are curious about cryptocurrency. We will cover the basics of how cryptocurrencies work, how to buy and store them, and what you need to know to get started safely. You'll gain a solid understanding of the risks and opportunities in this emerging field.",
		location: {
			city: "Coin City",
			province: "Blockchain Valley Province",
			zipCode: "98765",
		},
		date: "2023-09-18",
		image: "/images/event007.jpg",
		isFeatured: false,
	},
	{
		id: "e8",
		title: "Startup Funding 101",
		subtitle:
			"Learn the essentials of raising capital for your startup. From pitching to investors to understanding different funding options, we've got you covered.",
		description:
			"This event is designed for entrepreneurs who are looking to raise capital for their startups. We will discuss the different types of funding available, how to prepare a winning pitch, and what investors are looking for in a startup. Whether you're in the early stages or looking to scale, this event will provide valuable insights.",
		location: {
			city: "Startup City",
			province: "Venture Capital Province",
			zipCode: "11223",
		},
		date: "2024-07-10",
		image: "/images/event008.jpg",
		isFeatured: true,
	},
];

export type EventType = (typeof DUMMY_EVENTS)[0];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getEventsYearsAndMonths() {
	const events = DUMMY_EVENTS;
	const dates = events.map((event) => {
		const year = new Date(event.date).getFullYear();
		const month = new Date(event.date).getMonth() + 1;
		return { year, month };
	});
	const yearsSet = new Set(dates.map((date) => date.year));
	const years = Array.from(yearsSet);

	const monthNums = dates.map((date) => date.month).sort((a, b) => a - b);
	const monthsArray = Array.from(new Set(monthNums));
	const months = transformMonthArrayNumberToString(monthsArray);
	return { years, months };
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id: string) {
	const event = DUMMY_EVENTS.find((event) => event.id === id);
	if (!event) return null;
	return event;
}
