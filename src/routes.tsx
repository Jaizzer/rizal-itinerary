import type { JSX } from 'react';

import App from './App';
import NotFoundPage from './NotFoundPage';
import TourDetailPage from './TourDetailPage';

interface Route {
	element: JSX.Element;
	path: string;
}

const routes: Route[] = [
	{
		element: <App />,
		path: '/',
	},
	{
		element: <TourDetailPage />,
		path: '/tour/:id',
	},
	{
		element: <NotFoundPage />,
		path: '*',
	},
];

export default routes;
