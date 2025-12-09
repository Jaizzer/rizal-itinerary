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
				<div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
					<div>
						<h3 className="font-bold text-lg mb-2">About</h3>
						<p className="text-sm text-muted-foreground">
							Learn about the life and travels of Jose Rizal, Philippine history, and
							cultural heritage.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">Links</h3>
						<ul className="text-sm space-y-1">
							<li>
								<a className="hover:text-accent" href="#home">
									Home
								</a>
							</li>
							<li>
								<a className="hover:text-accent" href="#tours">
									Tours
								</a>
							</li>
							<li>
								<a className="hover:text-accent" href="#trivia">
									Trivia
								</a>
							</li>
							<li>
								<a className="hover:text-accent" href="#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-2">Contact</h3>
						<p className="text-sm text-muted-foreground">
							Email: info@rizaltravels.com
							<br />
							Phone: +63 912 345 6789
						</p>
					</div>
				</div>
				<div className="mt-15 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Rizal Travels. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
