import type { JSX } from 'react';

import { useRef } from 'react';
import { IoMap } from 'react-icons/io5';
import { MdCardTravel, MdOutlineTravelExplore } from 'react-icons/md';

import homePageImage1 from './assets/home-page-image-1.png';
import homePageImage2 from './assets/home-page-image-2.jpg';
import Page from './Page';
import TourCard from './TourCard';
import tours from './tours';

export default function HomePage(): JSX.Element {
	const toursRef = useRef<HTMLDivElement>(null);

	const handleScrollToTours = () => {
		toursRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Page>
			<main className="grid gap-15 md:gap-20 mb-15">
				<section className="max-w-[1304px] grid gap-3 md:grid-cols-2 sm:mt-15 bg-background p-10 md:p-20 rounded-none lg:rounded-2xl">
					<img
						className="rounded-lg justify-self-center md:max-w-full md:col-start-2 md:row-span-full md:justify-self-end"
						src={homePageImage1}
					/>
					<div className="self-center grid gap-3">
						<h1 className="text-3xl md:text-5xl font-bold leading-11 md:leading-16">
							<span className="underline decoration-primary decoration-5 md:decoration-8 underline-offset-8">
								Discover
							</span>{' '}
							Rizal's
							<br /> Travel History
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at
							distinctio praesentium corporis adipisci. Corporis iure voluptatum,
							neque soluta placeat
						</p>
						<button
							className="bg-primary hover:bg-accent justify-self-start rounded-md p-3 text-center font-semibold text-white"
							onClick={handleScrollToTours}
						>
							Start Exploring
						</button>
					</div>
				</section>
				<section className="grid gap-7 md:gap-20 md:grid-cols-[auto_1fr] px-10 md:px-20">
					<img
						className="rounded-3xl w-full justify-self-center md:max-w-90 md:col-start-1 md:row-span-full md:justify-self-start"
						src={homePageImage2}
					/>
					<div className="self-center grid">
						<p className="text-accent font-semibold">Trivia</p>
						<h2 className="text-2xl md:text-3xl font-bold">Did You Know?</h2>
						<ul className="mt-7 md:mt-8 md:mt-12 grid gap-8">
							<li className="grid grid-cols-[auto_1fr] items-start gap-6">
								<div className="p-3 shadow-sm rounded-xl grid items-center">
									<MdOutlineTravelExplore color="#5c57b2" size={25} />
								</div>
								<div>
									<h3 className="text-lg font-semibold">Heading</h3>
									<p className="text-sm">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto_1fr] items-start gap-6">
								<div className="p-3 shadow-sm rounded-xl grid items-center">
									<MdCardTravel color="#5c57b2" size={25} />
								</div>
								<div>
									<h3 className="text-lg font-semibold">Heading</h3>
									<p className="text-sm">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
							</li>
							<li className="grid grid-cols-[auto_1fr] items-start gap-6">
								<div className="p-3 shadow-sm rounded-xl grid items-center">
									<IoMap color="#5c57b2" size={25} />
								</div>
								<div>
									<h3 className="text-lg font-semibold">Heading</h3>
									<p className="text-sm">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section
					className="w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] px-10 pb-10 md:px-20"
					ref={toursRef}
				>
					{tours.map((tour, index) => (
						<TourCard
							duration={tour.duration}
							image={tour.image}
							key={index}
							location={tour.location}
							name={tour.name}
							price={tour.price}
							rating={tour.rating}
						/>
					))}
				</section>
			</main>
		</Page>
	);
}
