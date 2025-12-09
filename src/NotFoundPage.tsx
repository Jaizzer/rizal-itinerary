import type { JSX } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import Page from './Page';

export default function NotFoundPage(): JSX.Element {
	const navigate = useNavigate();

	return (
		<Page>
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center p-10">
				<h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
				<h2 className="text-2xl md:text-4xl font-semibold">Page Not Found</h2>
				<p className="text-gray-600">
					The page you are looking for doesn’t exist or has been moved.
				</p>
				<button
					className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors"
					onClick={() => {
						void navigate('/');
					}}
				>
					<FiArrowLeft size={20} /> Back to Home
				</button>
			</div>
		</Page>
	);
}
