import type { JSX } from 'react';
import { useState } from 'react';

import { FaHotel, FaMapMarkedAlt, FaMonument, FaUtensils } from 'react-icons/fa';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAttractions, MdDirectionsBus, MdOutlineWork } from 'react-icons/md';

import tourDetailData, { type Person, type TourDetail, type MediaItem } from './tourDetailData';

export default function TourDetail({ id }: { id?: string }): JSX.Element {
	const tour: TourDetail | undefined = tourDetailData.find((t) => t.id === id);

	if (!tour) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center p-10">
				<h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
				<h2 className="text-2xl md:text-4xl font-semibold">Page Not Found</h2>
				<p className="text-gray-600">
					The page you are looking for doesn’t exist or has been moved.
				</p>
			</div>
		);
	}

	return (
		<div className="max-w-[1024px] mx-auto p-10 grid gap-8">
			{/* Banner + Overview */}
			<div className="grid gap-6 md:grid-cols-2 items-center">
				<ImageSlider images={tour.main} title={tour.name} />

				<div className="grid gap-4">
					<h2 className="text-xl md:text-2xl font-semibold text-accent">Overview</h2>
					<p className="text-gray-700 leading-relaxed">{tour.description}</p>
				</div>
			</div>

			{/* Meta Info */}
			<div className="grid gap-4 md:grid-cols-3">
				<Meta icon={<FaMapMarkedAlt />} label="Duration" value={tour.duration} />
				<Meta icon={<MdAttractions />} label="Location" value={tour.location} />
				<Meta icon={<FaUtensils />} label="Price" value={tour.price} />
			</div>

			{/* Content Sections */}
			<div className="grid gap-6 md:grid-cols-2">
				{tour.hotels && tour.hotels.length > 0 && (
					<SectionCard title="Hotels / Lodging" icon={<FaHotel />} items={tour.hotels} />
				)}

				{tour.attractions && tour.attractions.length > 0 && (
					<SectionCard
						title="Tourist Attractions"
						icon={<MdAttractions />}
						items={tour.attractions}
					/>
				)}

				{tour.monuments && tour.monuments.length > 0 && (
					<SectionCard title="Monuments" icon={<FaMonument />} items={tour.monuments} />
				)}

				{tour.transportation && tour.transportation.length > 0 && (
					<SectionCard
						title="Transportation"
						icon={<MdDirectionsBus />}
						items={tour.transportation}
					/>
				)}

				{tour.food && tour.food.length > 0 && (
					<SectionCard title="Food" icon={<FaUtensils />} items={tour.food} />
				)}

				{tour.works && tour.works.length > 0 && (
					<SectionCard title="Activities" icon={<MdOutlineWork />} items={tour.works} />
				)}
			</div>

			{/* People */}
			{tour.peopleWithImages && tour.peopleWithImages.length > 0 && (
				<PeopleGrid title="People" people={tour.peopleWithImages} />
			)}

			{tour.womenWithImages && tour.womenWithImages.length > 0 && (
				<PeopleGrid title="Women He Met" people={tour.womenWithImages} />
			)}
		</div>
	);
}

/* ------------------------- META ------------------------- */
function Meta({ icon, label, value }: { icon: JSX.Element; label: string; value: string }) {
	return (
		<div>
			<h3 className="font-semibold flex items-center gap-2">
				<span className="text-accent">{icon}</span>
				{label}
			</h3>
			<p className="text-gray-700">{value}</p>
		</div>
	);
}

/* ------------------------- IMAGE SLIDER ------------------------- */
function ImageSlider({ images, title }: { images: string[]; title: string }) {
	const [index, setIndex] = useState(0);

	const next = () => {
		setIndex((i) => (i + 1) % images.length);
	};

	const prev = () => {
		setIndex((i) => (i - 1 + images.length) % images.length);
	};

	return (
		<div className="relative group">
			<img
				src={images[index]}
				alt={title}
				className="w-full h-64 md:h-96 object-cover rounded-2xl"
			/>

			{images.length > 1 && (
				<>
					<button
						onClick={prev}
						className="absolute left-2 top-1/2 -translate-y-1/2
						bg-black/50 text-white px-3 py-1 rounded
						opacity-60 group-hover:opacity-100
						hover:bg-accent transition-all"
					>
						‹
					</button>
					<button
						onClick={next}
						className="absolute right-2 top-1/2 -translate-y-1/2
						bg-black/50 text-white px-3 py-1 rounded
						opacity-60 group-hover:opacity-100
						hover:bg-accent transition-all"
					>
						›
					</button>
				</>
			)}
		</div>
	);
}

/* ------------------------- SECTION CARD ------------------------- */
function SectionCard({
	title,
	icon,
	items,
}: {
	title: string;
	icon: JSX.Element;
	items: MediaItem[];
}) {
	const [index, setIndex] = useState(0);

	const next = () => {
		setIndex((i) => (i + 1) % items.length);
	};

	const prev = () => {
		setIndex((i) => (i - 1 + items.length) % items.length);
	};

	const current = items[index];

	return (
		<div className="bg-white rounded-2xl shadow-md overflow-hidden">
			<div className="relative group">
				<img src={current.image} alt={current.title} className="w-full h-80 object-cover" />

				{items.length > 1 && (
					<>
						<button
							onClick={prev}
							className="absolute left-2 top-1/2 -translate-y-1/2
							bg-black/50 text-white px-3 py-1 rounded
							opacity-60 group-hover:opacity-100
							hover:bg-accent transition-all"
						>
							‹
						</button>
						<button
							onClick={next}
							className="absolute right-2 top-1/2 -translate-y-1/2
							bg-black/50 text-white px-3 py-1 rounded
							opacity-60 group-hover:opacity-100
							hover:bg-accent transition-all"
						>
							›
						</button>
					</>
				)}
			</div>

			<div className="p-6">
				<h3 className="text-xl font-bold flex items-center gap-2">
					<span className="text-accent">{icon}</span>
					{title}
				</h3>
				<p className="text-gray-700 mt-2">{current.title}</p>
			</div>
		</div>
	);
}

/* ------------------------- PEOPLE GRID ------------------------- */
function PeopleGrid({ people, title }: { people: Person[]; title: string }) {
	return (
		<div className="bg-white rounded-3xl shadow-md p-8">
			<h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
				<IoPeopleCircle className="text-accent" size={28} />
				{title}
			</h2>

			<div className="flex flex-wrap gap-6">
				{people.map((person) => (
					<div key={person.name} className="w-28 text-center">
						<img
							src={person.image}
							alt={person.name}
							className="w-28 h-28 rounded-full object-cover shadow-md"
						/>
						<p className="font-medium mt-2">{person.name}</p>
						{person.role && <p className="text-sm text-gray-500">{person.role}</p>}
					</div>
				))}
			</div>
		</div>
	);
}
