import homePageImage8 from './assets/rizal_barcelona.jpg';
import homePageImage12 from './assets/rizal_berlin.jpg';
import homePageImage16 from './assets/rizal_brussels.jpg';
import homePageImage7 from './assets/rizal_colombo.jpg';
import homePageImage14 from './assets/rizal_dresden.jpg';
import homePageImage11 from './assets/rizal_heidelberg.jpg';
import homePageImage17 from './assets/rizal_hongkong.jpg';
import homePageImage18 from './assets/rizal_japan.jpg';
import homePageImage13 from './assets/rizal_leipzig.jpg';
import homePageImage15 from './assets/rizal_london.jpg';
import homePageImage9 from './assets/rizal_madrid.jpg';
import homePageImage10 from './assets/rizal_paris.jpg';
import homePageImage6 from './assets/rizal_singapore.jpg';
import homePageImage19 from './assets/rizal_usa.jpg';

const tours = [
	{
		duration: '3.5 - 4 hours', // Flight from Manila
		id: 'singapore',
		image: homePageImage6,
		location: 'Singapore',
		name: 'Singapore Stopover',
		price: '₱1,200',
		rating: 4.8,
	},
	{
		duration: '4 hours', // Non-stop Flight from Singapore
		id: 'colombo',
		image: homePageImage7,
		location: 'Colombo, Ceylon',
		name: 'Colombo Stopover',
		price: '₱1,200',
		rating: 4.7,
	},
	{
		duration: '13 - 14 hours', // Total Flight Time from Colombo (with one stop)
		id: 'barcelona',
		image: homePageImage8,
		location: 'Barcelona, Spain',
		name: 'Barcelona Tour',
		price: '₱1,400',
		rating: 4.8,
	},
	{
		duration: '2.5 - 3 hours', // High-speed Train from Barcelona
		id: 'madrid',
		image: homePageImage9,
		location: 'Madrid, Spain',
		name: 'Studies in Madrid',
		price: '₱1,500',
		rating: 4.9,
	},
	{
		duration: '10 - 11 hours', // Train from Madrid (with one change)
		id: 'paris',
		image: homePageImage10,
		location: 'Paris, France',
		name: 'First Visit to Paris',
		price: '₱1,400',
		rating: 4.8,
	},
	{
		duration: '3.5 - 4 hours', // High-speed Train from Paris (with one change)
		id: 'heidelberg',
		image: homePageImage11,
		location: 'Heidelberg, Germany',
		name: 'Heidelberg Studies',
		price: '₱1,300',
		rating: 4.7,
	},
	{
		duration: '4.5 - 5 hours', // High-speed Train from Heidelberg
		id: 'berlin',
		image: homePageImage12,
		location: 'Berlin, Germany',
		name: 'Berlin - Noli Publication',
		price: '₱1,400',
		rating: 4.8,
	},
	{
		duration: '1 hour 15 minutes', // High-speed Train from Berlin
		id: 'leipzig',
		image: homePageImage13,
		location: 'Leipzig, Germany',
		name: 'Leipzig Exploration',
		price: '₱1,300',
		rating: 4.7,
	},
	{
		duration: '1 hour 10 minutes', // High-speed Train from Leipzig
		id: 'dresden',
		image: homePageImage14,
		location: 'Dresden, Germany',
		name: 'Dresden Visit',
		price: '₱1,200',
		rating: 4.7,
	},
	{
		duration: '4.5 - 5.5 hours', // Total Travel by Air from Dresden (with airport time)
		id: 'london',
		image: homePageImage15,
		location: 'London, United Kingdom',
		name: 'Life & Studies in London',
		price: '₱1,500',
		rating: 4.9,
	},
	{
		duration: '2 hours 10 minutes', // Eurostar Train from London
		id: 'brussels',
		image: homePageImage16,
		location: 'Brussels, Belgium',
		name: 'Brussels - El Filibusterismo',
		price: '₱1,400',
		rating: 4.8,
	},
	{
		duration: '11.5 hours', // Non-stop Flight from Brussels
		id: 'hongkong',
		image: homePageImage17,
		location: 'Hong Kong',
		name: 'Medical Practice & Life in Hong Kong',
		price: '₱1,300',
		rating: 4.8,
	},
	{
		duration: '4 - 4.5 hours', // Flight from Hong Kong to Tokyo
		id: 'japan',
		image: homePageImage18,
		location: 'Japan',
		name: 'Japan Sojourn & O-Sei-San',
		price: '₱1,400',
		rating: 4.9,
	},
	{
		duration: '12.5 - 13 hours', // Non-stop Flight from Tokyo to West Coast USA
		id: 'usa',
		image: homePageImage19,
		location: 'USA',
		name: 'Trans-Pacific Journey & America',
		price: '₱1,500',
		rating: 4.8,
	},
];

export default tours;
