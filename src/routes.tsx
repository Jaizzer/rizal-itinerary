import type { JSX } from 'react';

import App from './App';

interface Route {
	element: JSX.Element;
	path: string;
}

const routes: Route[] = [
	{
		element: <App />,
		path: '/',
	},
];

export default routes;
