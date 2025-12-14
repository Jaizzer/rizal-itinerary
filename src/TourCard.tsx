import { Star } from 'lucide-react';
import { FiClock, FiTag } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
}: TourCardProps) {
	return (
		<Card className="w-full overflow-hidden h-125 rounded-2xl shadow-md border-none transform transition-all duration-300 hover:shadow-xl hover:scale-105">
			<img loading='lazy' alt={name} className="w-full h-70 object-cover" src={image} />
			<div className="p-5 grid gap-3">
				<div className="flex items-center gap-1 text-sm font-semibold">
					<Star className="fill-yellow-400 text-yellow-400" size={18} />
					{rating}
				</div>
				<CardHeader>
					<CardTitle className="text-xl font-bold leading-tight line-clamp-2">
						{name}
					</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-2">
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<FiClock className="text-primary" size={18} />
						<span>{duration}</span>
					</div>
					<div className="flex items-center gap-2 text-sm font-md text-gray-600">
						<FiTag className="text-primary" size={18} />
						{price}
					</div>
					<div className="flex items-center gap-1 text-sm text-gray-600 line-clamp-1 mt-3">
						<IoLocationSharp className="text-primary" size={18} />
						{location}
					</div>
				</CardContent>
			</div>
		</Card>
	);
}
