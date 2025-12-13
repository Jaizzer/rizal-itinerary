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
import colomboFood3 from './assets/colombo/food-3.jpg'; // New
import colomboFood4 from './assets/colombo/food-4.jpg'; // New
import colomboFood5 from './assets/colombo/food-5.jpg'; // New

// WORKS
import colomboWork1 from './assets/colombo/work-1.jpg';

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
];

export default tourDetails;
