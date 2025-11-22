import type { JSX, ReactNode } from 'react';

interface PageProps {
	children: ReactNode;
}

export default function Page({ children }: PageProps): JSX.Element {
	return (
		<div className="bg-white w-full grid justify-center h-full p-10 md:p-20 border-2">
			{children}
		</div>
	);
}
