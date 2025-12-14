import type { JSX } from 'react';

import { FaStar } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

interface TourCardProps {
	duration: string;
	image: string;
	location: string;
	name: string;
	price: string;
	rating: number;
}

export default function TourCard({
	duration,
	image,
	location,
	name,
	price,
	rating,
}: TourCardProps): JSX.Element {
	return (
		<div className="rounded-xl overflow-hidden shadow-md bg-white max-w-full grid">
			<img className="h-48 w-full object-cover" loading='lazy' src={image} />

			<div className="p-4 grid gap-3">
				<div className="flex items-center gap-2">
					<FaStar className="text-yellow-500" size={16} />
					<p className="text-sm font-semibold">{rating.toFixed(1)}</p>
				</div>

				<h3 className="text-xl font-bold leading-tight">{name}</h3>

				<div className="text-sm text-gray-600">
					<p className="font-medium">Duration: {duration}</p>
					<p className="font-medium">Price: {price}</p>
				</div>

				<div className="flex items-center gap-2 text-gray-700 mt-2">
					<IoLocationSharp className="text-primary" size={18} />
					<p className="text-sm">{location}</p>
				</div>
			</div>
		</div>
	);
}
