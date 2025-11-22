import type { JSX } from 'react';

import homePageImage1 from './assets/home-page-image-1.jpg';
import Page from './Page';

export default function HomePage(): JSX.Element {
	return (
		<Page>
			<main className="max-w-[1024px]">
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
			</main>
		</Page>
	);
}
