import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { ITheme } from '../_redux/theme/types';
import {
	getActiveThemeSelector,
	getRegisteredThemesSelector,
} from '../_redux/theme/selectors';
import { setActiveTheme } from '../_redux/theme/operations';

/* Services */
import {
	getDefaultTheme,
	getSavedAppSettings,
} from '../services/ManageAppData';

/* Components */
import Spinner from '../components/Spinner';

// The redux-saga middleware will automatically synchronize and keep all of the browser's localStorage data up-to-date.
export default function ThemeSettingsWrapper({ themes, children }: any) {
	const dispatch = useDispatch();

	// Theme.
	const registeredThemes = useSelector(getRegisteredThemesSelector);
	const activeTheme = useSelector(getActiveThemeSelector);
	const defaultTheme: ITheme = getDefaultTheme(themes);

	// Effect to manage the app's active theme.
	useEffect(() => {
		let effectCancelled = false;

		const savedAppSettings = getSavedAppSettings();

		const applyDefaultTheme = () => dispatch(setActiveTheme(defaultTheme));

		const checkSavedTheme = () => {
			const { activeTheme } = savedAppSettings;
			const registeredTheme = registeredThemes[activeTheme];
			return !registeredTheme
				? dispatch(setActiveTheme(defaultTheme))
				: dispatch(setActiveTheme(registeredTheme));
		};

		if (!effectCancelled && !activeTheme) {
			!savedAppSettings ? applyDefaultTheme() : checkSavedTheme();
		};

		return () => {
			effectCancelled = false;
		};
	}, [
		dispatch,
		registeredThemes,
		activeTheme,
		defaultTheme,
	]);

	// Set classnames.
	const setThemeSettingsWrapperClassName = () => (
		`t-${activeTheme && activeTheme?.name}`
	);

	/* Views */
	if (!activeTheme) {
		return <Spinner message={`Setting Theme Styles...`} />;
	};

	return (
		<div className={setThemeSettingsWrapperClassName()}>
			{children}
		</div>
	);
};
