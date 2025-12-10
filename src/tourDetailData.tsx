// MAIN IMAGES
import colomboMain1 from './assets/colombo/main-1.jpg';
import colomboMain2 from './assets/colombo/main-2.jpg';

// TRANSPORTATION
import colomboTransport1 from './assets/colombo/transport-1.jpg';
import colomboTransport2 from './assets/colombo/transport-2.jpg';

// LODGING / HOTELS
import colomboLodging1 from './assets/colombo/lodging-1.jpg';
import colomboLodging2 from './assets/colombo/lodging-2.jpg';

// MONUMENTS
import colomboMonument1 from './assets/colombo/monument-1.jpg';
import colomboMonument2 from './assets/colombo/monument-2.jpg';

// ATTRACTIONS
import colomboAttraction1 from './assets/colombo/attraction-1.jpg';
import colomboAttraction2 from './assets/colombo/attraction-2.jpg';

// FOOD
import colomboFood1 from './assets/colombo/food-1.jpg';
import colomboFood2 from './assets/colombo/food-2.jpg';

// WORKS
import colomboWork1 from './assets/colombo/work-1.jpg';
import colomboWork2 from './assets/colombo/work-2.jpg';

// PEOPLE
import colomboPerson1 from './assets/colombo/person-1.jpg';

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

	main: string[]; // ⭐ MAIN IMAGES ARRAY

	attractions: MediaItem[];
	hotels: MediaItem[];
	food: MediaItem[];
	monuments: MediaItem[];
	transportation: MediaItem[];
	works: MediaItem[];

	peopleWithImages: Person[];
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
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat voluptatem esse omnis distinctio tempore aspernatur eos mollitia veritatis!',

		attractions: [
			{ title: 'Colombo Town, Sri Lanka', image: colomboAttraction1 },
			{ title: 'Harbor Viewpoint', image: colomboAttraction2 },
		],

		hotels: [
			{ title: 'Grand Oriental Hotel', image: colomboLodging1 },
			{ title: 'Local Inn Near Harbor', image: colomboLodging2 },
		],

		food: [
			{ title: 'Local Ceylonese Meals', image: colomboFood1 },
			{ title: 'Street Snacks', image: colomboFood2 },
		],

		monuments: [
			{ title: 'City Landmarks & Harbor View', image: colomboMonument1 },
			{ title: 'Old Colombo Lighthouse', image: colomboMonument2 },
		],

		transportation: [
			{ title: 'French Ship Djemnah', image: colomboTransport1 },
			{ title: 'Local Carriage & Walking Routes', image: colomboTransport2 },
		],

		works: [
			{ title: 'City Sketches', image: colomboWork1 },
			{ title: 'Travel Notes & Observations', image: colomboWork2 },
		],

		peopleWithImages: [{ image: colomboPerson1, name: 'Local Friends', role: 'Guides' }],
	},
];

export default tourDetails;
