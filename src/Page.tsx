import type { JSX, ReactNode } from 'react';

interface PageProps {
	children: ReactNode;
}

export default function Page({ children }: PageProps): JSX.Element {
	return (
		<div>
			<div
				className="w-full grid justify-center h-full overflow-scroll"
				style={{
					background: `
                        linear-gradient(135deg, var(--color-primary), var(--color-secondary)),
                        rgba(255, 255, 255, 0.85)
                    `,
					backgroundBlendMode: 'overlay',
					color: 'var(--color-text)',
				}}
			>
				{children}
			</div>
			<footer className="w-full mt-10 bg-background text-text py-5">
				<div className="max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between gap-6 px-10">
					{/* About */}
					<div className="flex-1">
						<h3 className="font-bold text-lg mb-2">About</h3>
						<p className="text-sm text-muted-foreground">
							Learn about the life and travels of Jose Rizal, Philippine history, and
							cultural heritage.
						</p>
					</div>

					{/* Contact */}
					<div className="flex-1">
						<h3 className="font-bold text-lg mb-2">Contact</h3>
						<p className="text-sm text-muted-foreground">
							Email: info@rizaltravels.com
							<br />
							Phone: +63 912 345 6789
						</p>
					</div>

					{/* References */}
					<div className="flex-1">
						<h3 className="font-bold text-lg mb-2">References</h3>
						<ul className="text-sm text-muted-foreground space-y-1">
							<li>
								Rizal, J. (2011). Reminiscences and travels. National Historical
								Commission of the Philippines.
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-15 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Rizal's Itinerary. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
