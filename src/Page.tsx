import type { JSX, ReactNode } from 'react';

interface PageProps {
	children: ReactNode;
}

export default function Page({ children }: PageProps): JSX.Element {
	return <div className="bg-background w-full h-full p-4 border-2">{children}</div>;
}
