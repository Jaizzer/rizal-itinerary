import homePageImage2 from './assets/rizal_binan.jpg';
import homePageImage1 from './assets/rizal_calamba.jpg';
import homePageImage3 from './assets/rizal_manila.jpg';

export interface Person {
	image: string;
	name: string;
	role?: string;
}

export interface TourDetail {
	attractions: string;
	attractionsImage: string;
	duration: string;
	food: string;
	foodImage: string;
	hotels: string;
	hotelsImage: string;
	id: string;
	image: string;
	location: string;
	monuments: string;
	monumentsImage: string;
	name: string;
	peopleWithImages: Person[];
	price: string;
	transportation: string;
	transportationImage: string;
	womenWithImages?: Person[];
	works: string;
	worksImage: string;
}

const tourDetails: TourDetail[] = [
	{
		attractions: 'Calamba Shrine, Laguna Lake',
		attractionsImage: homePageImage1,
		duration: '3 hours',
		food: 'Local Filipino meals',
		foodImage: homePageImage1,
		hotels: 'Stayed at home / nearby lodgings',
		hotelsImage: homePageImage1,
		id: 'calamba',
		image: homePageImage1,
		location: 'Calamba, Philippines',
		monuments: 'Rizal Shrine Monument',
		monumentsImage: homePageImage1,
		name: 'Rizal Birthplace Visit',
		peopleWithImages: [
			{ image: homePageImage1, name: 'Paciano Rizal', role: 'Brother' },
			{ image: homePageImage1, name: 'Teodora Rizal', role: 'Mother' },
		],
		price: '₱900',
		transportation: 'Walks, Carromata',
		transportationImage: homePageImage1,
		womenWithImages: [{ image: homePageImage1, name: 'Leonor Rivera' }],
		works: 'Early writings, sketches',
		worksImage: homePageImage1,
	},
	{
		attractions: 'Biñan School, historical sites',
		attractionsImage: homePageImage2,
		duration: '2 hours',
		food: 'Local meals',
		foodImage: homePageImage2,
		hotels: 'Local lodgings',
		hotelsImage: homePageImage2,
		id: 'binan',
		image: homePageImage2,
		location: 'Biñan, Philippines',
		monuments: 'School Monument',
		monumentsImage: homePageImage2,
		name: 'Schooling in Biñan',
		peopleWithImages: [{ image: homePageImage2, name: 'Teacher A', role: 'Mentor' }],
		price: '₱800',
		transportation: 'Walks, Car',
		transportationImage: homePageImage2,
		works: 'Student writings',
		worksImage: homePageImage2,
	},
	{
		attractions: 'Ateneo Campus',
		attractionsImage: homePageImage3,
		duration: '2 hours',
		food: 'Canteen meals',
		foodImage: homePageImage3,
		hotels: 'Local boarding houses',
		hotelsImage: homePageImage3,
		id: 'manila',
		image: homePageImage3,
		location: 'Manila, Philippines',
		monuments: 'Ateneo Historical Marker',
		monumentsImage: homePageImage3,
		name: 'Ateneo de Manila Education',
		peopleWithImages: [{ image: homePageImage3, name: 'Classmate A' }],
		price: '₱1,000',
		transportation: 'Car, Walks',
		transportationImage: homePageImage3,
		works: 'School writings, essays',
		worksImage: homePageImage3,
	},
];

export default tourDetails;
