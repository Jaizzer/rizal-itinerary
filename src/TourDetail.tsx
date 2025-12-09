import type { JSX } from 'react';

import { FaHotel, FaMapMarkedAlt, FaMonument, FaUtensils } from 'react-icons/fa';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAttractions, MdDirectionsBus, MdOutlineWork } from 'react-icons/md';

import tourDetailData, { type Person, type TourDetail } from './tourDetailData';

export default function TourDetail({ id }: { id?: string }): JSX.Element {
	const tour: TourDetail | undefined = tourDetailData.find((t) => t.id === id);

	if (!tour)
		return (
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center">
				<h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
				<h2 className="text-2xl md:text-4xl font-semibold">Page Not Found</h2>
				<p className="text-gray-600">
					The page you are looking for doesn’t exist or has been moved.
				</p>
			</div>
		);

	return (
		<div className="max-w-[1024px] mx-auto p-10 grid gap-10">
			{/* Banner */}
			<div className="relative">
				<img
					alt={tour.name}
					className="w-full rounded-2xl object-cover h-64 md:h-96"
					src={tour.image}
				/>
				<h1 className="absolute bottom-4 left-4 text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
					{tour.name}
				</h1>
			</div>

			{/* Overview */}
			<div className="grid gap-4 md:grid-cols-3">
				<div>
					<h2 className="text-xl font-semibold flex items-center gap-2">
						<FaMapMarkedAlt className="text-accent" /> Duration
					</h2>
					<p>{tour.duration}</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold flex items-center gap-2">
						<MdAttractions className="text-accent" /> Location
					</h2>
					<p>{tour.location}</p>
				</div>
				<div>
					<h2 className="text-xl font-semibold flex items-center gap-2">
						<FaUtensils className="text-accent" /> Price
					</h2>
					<p>{tour.price}</p>
				</div>
			</div>

			{/* Sections */}
			<div className="grid gap-6 md:grid-cols-2">
				<SectionCard
					content={tour.hotels}
					icon={<FaHotel />}
					image={tour.hotelsImage}
					title="Hotels / Lodging"
				/>
				<SectionCard
					content={tour.attractions}
					icon={<MdAttractions />}
					image={tour.attractionsImage}
					title="Tourist Attractions"
				/>
				<SectionCard
					content={tour.monuments}
					icon={<FaMonument />}
					image={tour.monumentsImage}
					title="Monuments"
				/>
				<SectionCard
					content={tour.transportation}
					icon={<MdDirectionsBus />}
					image={tour.transportationImage}
					title="Transportation"
				/>
				<SectionCard
					content={tour.food}
					icon={<FaUtensils />}
					image={tour.foodImage}
					title="Food"
				/>
				<SectionCard
					content={tour.works}
					icon={<MdOutlineWork />}
					image={tour.worksImage}
					title="Works Done"
				/>
			</div>

			{/* People Grid */}
			<PeopleGrid people={tour.peopleWithImages} title="People with Him" />

			{/* Women */}
			{tour.womenWithImages && (
				<PeopleGrid people={tour.womenWithImages} title="Women He Met" />
			)}
		</div>
	);
}

/* ------------------------- COMPONENT: PEOPLE GRID ------------------------- */
function PeopleGrid({ people, title }: { people: Person[]; title: string }): JSX.Element {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
				<IoPeopleCircle className="text-accent" size={28} />
				{title}
			</h2>
			<div className="flex gap-10">
				{people.map((person) => (
					<div className="text-center grid justify-items-center gap-1" key={person.name}>
						<img
							alt={person.name}
							className="w-28 h-28 object-cover rounded-full shadow-md border border-secondary"
							src={person.image}
						/>
						<p className="font-medium text-base">{person.name}</p>
						{person.role && (
							<p className="text-sm text-muted-foreground">{person.role}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

/* ------------------------- COMPONENT: SECTION CARD ------------------------- */
function SectionCard({
	content,
	icon,
	image,
	title,
}: {
	content: string;
	icon: JSX.Element;
	image: string;
	title: string;
}): JSX.Element {
	return (
		<div className="w-full overflow-hidden rounded-2xl shadow-md bg-white border-none">
			<img alt={title} className="w-full h-80 object-cover" src={image} />
			<div className="p-8 grid gap-3">
				<h3 className="text-xl font-bold flex items-center gap-2 leading-tight">
					<span className="text-accent">{icon}</span>
					{title}
				</h3>
				<p className="text-sm text-gray-700">{content}</p>
			</div>
		</div>
	);
}
