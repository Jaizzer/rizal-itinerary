import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

import routes from './routes.tsx';

const router = createBrowserRouter(routes);

createRoot(getRoot('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

function getRoot(elementTag: string): HTMLElement {
	const root = document.getElementById(elementTag);

	if (!root) {
		throw new Error(`Root does not exist.'.`);
	}

	return root;
}
