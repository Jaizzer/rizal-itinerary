import type { JSX } from 'react';

import { IoMap } from 'react-icons/io5';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { MdCardTravel } from 'react-icons/md';

import homePageImage1 from './assets/home-page-image-1.jpg';
import homePageImage2 from './assets/home-page-image-2.jpg';
import Page from './Page';

export default function HomePage(): JSX.Element {
	return (
		<Page>
			<main className="max-w-[1024px] grid gap-15 md:gap-30">
				<section className="grid gap-3 md:grid-cols-2">
					<img
						className="rounded-lg justify-self-center md:max-w-full md:col-start-2 md:row-span-full md:justify-self-end"
						src={homePageImage1}
					/>
					<div className="self-center grid gap-3">
						<h1 className="text-3xl md:text-5xl font-bold leading-11 md:leading-16">
							<span className="underline decoration-primary decoration-5 md:decoration-8 underline-offset-8">
								Discover
							</span>{' '}
							Rizal's Travel History
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at
							distinctio praesentium corporis adipisci. Corporis iure voluptatum,
							neque soluta placeat
						</p>
						<button className="bg-primary hover:bg-accent justify-self-start rounded-md p-3 text-center font-semibold text-white">
							Start Exploring
						</button>
					</div>
				</section>
				<section className="grid gap-7 md:gap-30 md:grid-cols-[auto_1fr]">
					<img
						className="rounded-3xl justify-self-center md:max-w-90 md:col-start-1 md:row-span-full md:justify-self-start"
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
			</main>
		</Page>
	);
}
