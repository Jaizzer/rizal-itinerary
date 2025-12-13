// --- COLOMBO IMPORTS ---
// MAIN IMAGES
import colomboMain1 from './assets/colombo/main-1.jpg';
import colomboMain2 from './assets/colombo/main-2.jpg';

// TRANSPORTATION
import colomboTransport1 from './assets/colombo/transport-1.jpg';
import colomboTransport2 from './assets/colombo/transport-2.jpg';

// LODGING / HOTELS
import colomboLodging1 from './assets/colombo/lodging-1.jpg';
import colomboLodging2 from './assets/colombo/lodging-2.jpg';

// ATTRACTIONS
import colomboAttraction1 from './assets/colombo/attraction-1.jpg';
import colomboAttraction2 from './assets/colombo/attraction-2.jpg';
import colomboAttraction3 from './assets/colombo/attraction-3.jpg';
import colomboAttraction4 from './assets/colombo/attraction-4.jpg';
import colomboAttraction5 from './assets/colombo/attraction-5.jpg';

// FOOD
import colomboFood1 from './assets/colombo/food-1.jpg';
import colomboFood2 from './assets/colombo/food-2.jpg';
import colomboFood3 from './assets/colombo/food-3.jpg';
import colomboFood4 from './assets/colombo/food-4.jpg';
import colomboFood5 from './assets/colombo/food-5.jpg';

// WORKS
import colomboWork1 from './assets/colombo/work-1.jpg';

// --- SINGAPORE IMPORTS (NEW) ---
// MAIN IMAGES
import singaporeMain1 from './assets/singapore/main-1.jpg';
import singaporeMain2 from './assets/singapore/main-2.jpg';
import singaporeMain3 from './assets/singapore/main-3.jpg';

// TRANSPORTATION
import singaporeTransport1 from './assets/singapore/transport-1.jpg';
import singaporeTransport2 from './assets/singapore/transport-2.jpg';
import singaporeTransport3 from './assets/singapore/transport-3.jpg';

// ATTRACTIONS
import singaporeAttraction1 from './assets/singapore/attraction-1.jpg';
import singaporeAttraction2 from './assets/singapore/attraction-2.jpg';
import singaporeAttraction3 from './assets/singapore/attraction-3.jpg';

// FOOD
import singaporeFood1 from './assets/singapore/food-1.jpg';
import singaporeFood2 from './assets/singapore/food-2.jpg';
import singaporeFood3 from './assets/singapore/food-3.jpg';

// WORKS
import singaporeWork1 from './assets/singapore/work-1.jpg';
import singaporeWork2 from './assets/singapore/work-2.jpg';

// MONUMENTS
import singaporeMonument1 from './assets/singapore/monument-1.jpg';

import singaporePerson1 from './assets/singapore/person-1.jpg';
// --- END OF IMPORTS ---

// --- BARCELONA IMPORTS (NEW) ---
// MAIN IMAGES
import barcelonaMain1 from './assets/barcelona/main-1.jpg';
import barcelonaMain2 from './assets/barcelona/main-2.jpg';

// TRANSPORTATION
import barcelonaTransport2 from './assets/barcelona/transport-2.jpg';

// LODGING / HOTELS
import barcelonaLodging1 from './assets/barcelona/lodging-1.jpg';
import barcelonaLodging2 from './assets/barcelona/lodging-2.jpg';
import barcelonaLodging3 from './assets/barcelona/lodging-3.jpg';

// ATTRACTIONS
import barcelonaAttraction1 from './assets/barcelona/attraction-1.jpg';
import barcelonaAttraction2 from './assets/barcelona/attraction-2.jpg';
import barcelonaAttraction3 from './assets/barcelona/attraction-3.jpg';

// FOOD
import barcelonaFood1 from './assets/barcelona/food-1.jpg';
import barcelonaFood2 from './assets/barcelona/food-2.jpg';
import barcelonaFood3 from './assets/barcelona/food-3.jpg';

// WORKS
import barcelonaWork1 from './assets/barcelona/work-1.jpg';

// PEOPLE
import barcelonaPerson1 from './assets/barcelona/person-1.jpg';

export interface MediaItem {
	title: string;
	image: string;
}

export interface Person {
	image: string;
	name: string;
	role?: string;
}

export interface TourDetail {
	id: string;
	name: string;
	duration: string;
	price: string;
	location: string;
	description: string;

	// MAIN IMAGE SLIDER (always required)
	main: string[];

	// OPTIONAL CONTENT SECTIONS
	attractions?: MediaItem[];
	hotels?: MediaItem[];
	food?: MediaItem[];
	monuments?: MediaItem[];
	transportation?: MediaItem[];
	works?: MediaItem[];

	// PEOPLE
	peopleWithImages?: Person[];
	womenWithImages?: Person[];
}

const tourDetails: TourDetail[] = [
	{
		id: 'singapore',
		name: 'Singapore',
		duration: '2 days',
		price: '₱800',
		location: 'Singapore, Straits Settlements',

		main: [singaporeMain1, singaporeMain2, singaporeMain3],

		description:
			'Singapore was the first foreign stop on Jose Rizal’s secret journey to Europe in May 1882. Arriving from Manila aboard the Spanish steamer Salvadora, he spent two days transferring ships and observing the vibrant British colonial city. He recorded his observations on its buildings and its multi-ethnic populace before transferring to the French mail ship Djemnah to continue his voyage.',

		attractions: [
			{ title: 'The Esplanade', image: singaporeAttraction1 },
			{ title: 'Gardens By The Bar', image: singaporeAttraction2 },
			{ title: 'Marina Bay Sands', image: singaporeAttraction3 },
		],

		food: [
			{ title: 'Hainanese Chicken Rice (Early Form)', image: singaporeFood1 },
			{ title: 'Laksa', image: singaporeFood2 },
			{ title: 'Curry Puffs', image: singaporeFood3 },
		],

		transportation: [
			{ title: 'Spanish Steamer Salvadora (Arrival)', image: singaporeTransport1 },
			{ title: 'French Mail Ship Djemnah (Departure)', image: singaporeTransport2 },
			{ title: 'Rickshaws', image: singaporeTransport3 },
		],

		monuments: [{ title: 'Asian Civilization Museum', image: singaporeMonument1 }],

		works: [
			{ title: 'Rizal wrote a letter to his parents from Singapore.', image: singaporeWork1 },
			{ title: 'Observation of the City’s Commerce', image: singaporeWork2 },
		],
		peopleWithImages: [
			{
				image: singaporePerson1,
				name: 'Donato Lecha',
				role: 'Ship Captain',
			},
		],
	},
	{
		id: 'colombo',
		name: 'Colombo, Sri Lanka',
		duration: '1 day',
		price: '₱1,200',
		location: 'Colombo, Sri Lanka',

		main: [colomboMain1, colomboMain2],

		description:
			'Colombo was a critical early stop in May 1882 during the national hero Jose Rizal’s first voyage to Europe. His presence here was integral to his secret mission to further his medical studies and prepare for the Philippine reform movement. He used the stopover on the steamship Djemnah to refine his language skills and observe diverse colonial cultures before sailing toward the Suez Canal.',

		attractions: [
			{ title: 'Colombo Town', image: colomboAttraction1 },
			{ title: 'Harbor Viewpoint', image: colomboAttraction2 },
			{ title: 'Galle Face Green', image: colomboAttraction3 },
			{ title: 'Gangaramaya Temple', image: colomboAttraction4 },
			{ title: 'Independence Memorial Hall', image: colomboAttraction5 },
		],
		hotels: [
			{ title: 'Grand Oriental Hotel', image: colomboLodging1 },
			{ title: 'Grand Oriental Hotel', image: colomboLodging2 },
		],

		food: [
			{ title: 'Kottu Roti', image: colomboFood1 },
			{ title: 'Fish Ambul Thiyal', image: colomboFood2 },
			{ title: 'Hoppers (Appa)', image: colomboFood3 },
			{ title: 'Lamprais', image: colomboFood4 },
			{ title: 'Polos (Green Jackfruit Curry)', image: colomboFood5 },
		],

		transportation: [
			{ title: 'French Ship Djemnah', image: colomboTransport1 },
			{ title: 'French Ship Djemnah', image: colomboTransport2 },
		],

		works: [{ title: 'Rizal practiced and improved his French.', image: colomboWork1 }],
	},
	{
		id: 'barcelona',
		name: 'Barcelona, Spain',
		duration: '6 months', // Initial stay before moving to Madrid
		price: '₱3,000', // Example price
		location: 'Barcelona, Catalonia, Spain',

		main: [barcelonaMain1, barcelonaMain2],

		description:
			'Barcelona was the gateway to Europe for Jose Rizal, where he first set foot on Spanish soil in June 1882. Initially expressing disappointment, he quickly grew to appreciate the city’s atmosphere of freedom and its people’s hospitality. This period marked the true start of his mission, where he began his European studies, connected with Filipino expatriates, and published his first nationalistic essay, "El Amor Patrio."',

		attractions: [
			{ title: 'Las Ramblas', image: barcelonaAttraction1 },
			{ title: 'Plaza de Cataluña', image: barcelonaAttraction2 },
			{ title: 'Gothic Quarter (Barri Gòtic)', image: barcelonaAttraction3 },
		],

		hotels: [
			{ title: 'Fonda De España', image: barcelonaLodging1 },
			{ title: 'Fonda De España', image: barcelonaLodging2 },
			{ title: 'Fonda De España', image: barcelonaLodging3 },
		],

		food: [
			{ title: 'Paella', image: barcelonaFood1 },
			{ title: 'Tapas and Cava', image: barcelonaFood2 },
			{ title: 'Crema Catalana', image: barcelonaFood3 },
		],

		transportation: [{ title: 'Horse-drawn Carriages', image: barcelonaTransport2 }],

		works: [
			{ title: 'El Amor Patrio (First published essay in Spain)', image: barcelonaWork1 },
		],

		peopleWithImages: [
			{
				image: barcelonaPerson1,
				name: 'Eusebio Corominas',
				role: 'Friend & Newspaper Publisher', // Publisher of Diariong Tagalog
			},
		],
	},
];

export default tourDetails;
