import { lazy, Suspense } from 'react';
import Spinner from './app/components/Spinner';
import './app/styles/index.css';

// React's lazy and Suspense components are used to support code splitting techniques, in an effort to control resource load prioritization and improve overall load performance.
export default function App() {
	// Implement component-based code splitting.
	const AppSettingsWrapper = lazy(() => import('./app/wrappers/AppSettingsWrapper'));
	const Router = lazy(() => import('./app/components/Router/Router'));
	return (
		<Suspense fallback={
			<Spinner message={`Initializing...`} />
		}>
			<AppSettingsWrapper>
				<Router />
			</AppSettingsWrapper>
		</Suspense>
	);
};
