import { lazy, Suspense } from 'react';
import Spinner from '../../components/Spinner';

/* Lazy load all of the main app pages. */

const Landing = lazy(() => import('../../pages/Landing'));
const lazyLoadLanding = () => (
	<Suspense fallback={<Spinner />}>
		<Landing />
	</Suspense>
);

const AppRoutes = [
	/* Note: This route is for development */
	// {
	// 	id: 1,
	// 	name: 'Gamebox: Home',
	// 	path: '/',
	// 	element: lazyLoadLanding(),
	// },
	/* Note: This route is for production */
	{
		id: 2,
		name: 'Gamebox: Home',
		path: '/web-games',
		element: lazyLoadLanding(),
	},
];

export { AppRoutes };
