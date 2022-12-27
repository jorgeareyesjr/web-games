import React, {
	lazy,
	Suspense,
	useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { getAllThemes } from '../_redux/theme/operations';
import { getThemesSelector } from '../_redux/theme/selectors';
import { getAllLayouts } from '../_redux/layout/operations';
import { getLayoutsSelector } from '../_redux/layout/selectors';

/* Services */
import { syncLocalStorage } from '../services/ManageLocalStorage';

/* Components */
import Spinner from '../components/Spinner';

// Note: The redux-saga middleware will automatically synchronize and keep all of the browser's localStorage data up-to-date.
export default function AppSettingsWrapper({ children }: any) {
	const dispatch = useDispatch();

	const themes = useSelector(getThemesSelector);
	const layouts = useSelector(getLayoutsSelector);

	// Effect to manage the active app settings.
	useEffect(() => {
		let effectCancelled = false;

		if (!effectCancelled) {
			syncLocalStorage();
		};

		/* Theme Settings */
		if (!effectCancelled && !themes) {
			dispatch(getAllThemes());
		};

		/* Layout Settings */
		if (!effectCancelled && !layouts) {
			dispatch(getAllLayouts());
		};

		return () => {
			effectCancelled = false;
		};
	}, [
		dispatch,
		themes,
		layouts,
	]);

	// Implement nested component-based code splitting.
	// Nested suspense components aren't fetched in parallel, but are instead fetched sequentially.
	// In this case, the 2nd Suspense component block is deferred until after the 1st Suspense component block resolves.
	const ThemeSettingsWrapper = lazy(() => import('../wrappers/ThemeSettingsWrapper'));
	const LayoutSettingsWrapper = lazy(() => import('../wrappers/LayoutSettingsWrapper'));

	return (
		<Suspense fallback={
			<Spinner message={`Establishing Network Connections...`} />
		}>
			<ThemeSettingsWrapper themes={themes}>
				<LayoutSettingsWrapper layouts={layouts}>
					<Suspense fallback={
						<Spinner message={`Applying System Preferences...`} />
					}>
						{ children }
					</Suspense>
				</LayoutSettingsWrapper>
			</ThemeSettingsWrapper>
		</Suspense>
	);
};
