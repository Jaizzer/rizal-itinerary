import type { JSX } from 'react';
import { useState } from 'react';

import { FaHotel, FaMapMarkedAlt, FaMonument, FaUtensils } from 'react-icons/fa';
import { IoPeopleCircle } from 'react-icons/io5';
import { MdAttractions, MdDirectionsBus, MdOutlineWork } from 'react-icons/md';

import tourDetailData, { type Person, type TourDetail, type MediaItem } from './tourDetailData';

export default function TourDetail({ id }: { id?: string }): JSX.Element {
	const tour: TourDetail | undefined = tourDetailData.find((t) => t.id === id);

	if (!tour)
		return (
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center p-10">
				<h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
				<h2 className="text-2xl md:text-4xl font-semibold">Page Not Found</h2>
				<p className="text-gray-600">
					The page you are looking for doesn’t exist or has been moved.
				</p>
			</div>
		);

	return (
		<div className="max-w-[1024px] mx-auto p-10 grid gap-5 md:gap-10">
			{/* Banner + Description */}
			<div className="grid gap-6 md:grid-cols-2 items-center">
				{/* MAIN IMAGE SLIDER */}
				<ImageSlider images={tour.main} title={tour.name} />

				{/* Description */}
				<div className="grid gap-4 pt-2 md:p-4 self-start md:self-center">
					<h2 className="text-xl md:text-2xl font-semibold text-accent">Overview</h2>
					<p className="text-gray-700 text-sm md:text-base leading-relaxed">
						{tour.description}
					</p>
				</div>
			</div>

			{/* Overview */}
			<div className="grid gap-4 md:grid-cols-3">
				<div>
					<h3 className="text-md md:text-xl font-semibold flex items-center gap-2">
						<FaMapMarkedAlt className="text-accent" /> Duration
					</h3>
					<p className="text-sm md:text-base">{tour.duration}</p>
				</div>
				<div>
					<h3 className="text-md md:text-xl font-semibold flex items-center gap-2">
						<MdAttractions className="text-accent" /> Location
					</h3>
					<p className="text-sm md:text-base">{tour.location}</p>
				</div>
				<div>
					<h3 className="text-md md:text-xl font-semibold flex items-center gap-2">
						<FaUtensils className="text-accent" /> Price
					</h3>
					<p className="text-sm md:text-base">{tour.price}</p>
				</div>
			</div>

			{/* Sections */}
			<div className="grid gap-6 md:grid-cols-2">
				<SectionCard title="Hotels / Lodging" icon={<FaHotel />} items={tour.hotels} />
				<SectionCard
					title="Tourist Attractions"
					icon={<MdAttractions />}
					items={tour.attractions}
				/>
				<SectionCard title="Monuments" icon={<FaMonument />} items={tour.monuments} />
				<SectionCard
					title="Transportation"
					icon={<MdDirectionsBus />}
					items={tour.transportation}
				/>
				<SectionCard title="Food" icon={<FaUtensils />} items={tour.food} />
				<SectionCard title="Activities" icon={<MdOutlineWork />} items={tour.works} />
			</div>

			{/* People Grid */}
			<PeopleGrid people={tour.peopleWithImages} title="People" />

			{tour.womenWithImages && (
				<PeopleGrid people={tour.womenWithImages} title="Women He Met" />
			)}
		</div>
	);
}

/* ------------------------- IMAGE SLIDER ------------------------- */
function ImageSlider({ images, title }: { images: string[]; title: string }) {
	const [index, setIndex] = useState(0);

	const next = () => {
		setIndex((i) => {
			return (i + 1) % images.length;
		});
	};

	const prev = () => {
		setIndex((i) => {
			return (i - 1 + images.length) % images.length;
		});
	};
	return (
		<div className="relative group">
			<img
				alt={title}
				src={images[index]}
				className="w-full rounded-2xl object-cover h-64 md:h-96 transition-all duration-300"
			/>

			{/* Buttons */}
			{images.length > 1 && (
				<>
					{/* PREV BUTTON */}
					<button
						onClick={prev}
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-md opacity-80 hover:opacity-100 hover:bg-accent hover:bg-accent transition-opacity"
					>
						‹
					</button>

					{/* NEXT BUTTON */}
					<button
						onClick={next}
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-md opacity-80 hover:opacity-100 hover:bg-accent hover:bg-accent transition-opacity"
					>
						›
					</button>
				</>
			)}
		</div>
	);
}

/* ------------------------- SECTION CARD (MULTI-SLIDE) ------------------------- */
function SectionCard({
	title,
	icon,
	items,
}: {
	title: string;
	icon: JSX.Element;
	items: MediaItem[];
}): JSX.Element {
	const [index, setIndex] = useState(0);

	const next = () => {
		if (items.length === 0) return; // prevent unsafe access
		setIndex((i) => (i + 1) % items.length);
	};

	const prev = () => {
		if (items.length === 0) return;
		setIndex((i) => (i - 1 + items.length) % items.length);
	};

	const current = items[index];

	return (
		<div className="w-full overflow-hidden rounded-2xl shadow-md bg-white border-none">
			{/* IMAGE SLIDER */}
			<div className="relative group">
				<img
					alt={current.title}
					className="w-full h-80 object-cover transition-all duration-300"
					src={current.image}
				/>

				{items.length > 1 && (
					<>
						<button
							onClick={prev}
							className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-md opacity-70 hover:opacity-100 hover:bg-accent transition-opacity"
						>
							‹
						</button>
						<button
							onClick={next}
							className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-md opacity-70 hover:opacity-100 hover:bg-accent transition-opacity"
						>
							›
						</button>
					</>
				)}
			</div>

			{/* TEXT */}
			<div className="p-8 grid gap-3">
				<h3 className="text-xl font-bold flex items-center gap-2 leading-tight">
					<span className="text-accent">{icon}</span>
					{title}
				</h3>
				<p className="text-sm text-gray-700">{current.title}</p>
			</div>
		</div>
	);
}

/* ------------------------- PEOPLE GRID (SECTION CARD) ------------------------- */
function PeopleGrid({ people, title }: { people: Person[]; title: string }): JSX.Element {
	return (
		<div>
			{/* Section Card */}
			<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 w-full">
				{/* Section Title */}
				<h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
					<IoPeopleCircle className="text-accent" size={28} />
					{title}
				</h2>

				{/* People Items */}
				<div className="flex flex-wrap gap-6">
					{people.map((person) => (
						<div
							key={person.name}
							className="flex flex-col items-center gap-1 w-28" // <-- center content inside the card
						>
							<img
								alt={person.name}
								className="w-28 h-28 object-cover rounded-full shadow-md border border-secondary"
								src={person.image}
							/>
							<p className="font-medium text-base text-center">{person.name}</p>
							{person.role && (
								<p className="text-sm text-muted-foreground text-center">
									{person.role}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
