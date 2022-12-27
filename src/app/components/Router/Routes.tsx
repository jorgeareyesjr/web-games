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
	{
		id: 1,
		name: 'Gamebox: Home',
		path: '/',
		element: lazyLoadLanding(),
	},
];

export { AppRoutes };
