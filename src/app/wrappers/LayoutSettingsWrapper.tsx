import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { ILayout } from '../_redux/layout/types';
import {
	getActiveLayoutSelector,
	getRegisteredLayoutsSelector,
} from '../_redux/layout/selectors';
import { setActiveLayout } from '../_redux/layout/operations';
import { getNavIsOpenSelector } from '../_redux/nav/selectors';

/* Services */
import {
	getSavedAppSettings,
	getDefaultLayout,
} from '../services/ManageAppData';

/* Components */
import Spinner from '../components/Spinner';

// The redux-saga middleware will automatically synchronize and keep all of the browser's localStorage data up-to-date.
export default function LayoutSettingsWrapper({ layouts, children }: any) {
	const dispatch = useDispatch();

	const savedAppSettings = getSavedAppSettings();

	// Layout.
	const registeredLayouts = useSelector(getRegisteredLayoutsSelector);
	const activeLayout = useSelector(getActiveLayoutSelector);
	const defaultLayout: ILayout = getDefaultLayout(layouts);

	// Nav.
	const navIsOpen = useSelector(getNavIsOpenSelector);

	// Effect to manage the app's active layout.
	useEffect(() => {
		let effectCancelled = false;

		const applyDefaultLayout = () => dispatch(setActiveLayout(defaultLayout));

		const checkSavedLayout = () => {
			const { activeLayout } = savedAppSettings;
			const registeredLayout = registeredLayouts[activeLayout];
			return !registeredLayout
				? applyDefaultLayout()
				: dispatch(setActiveLayout(registeredLayout))
		};

		if (!effectCancelled && !activeLayout) {
			!savedAppSettings ? applyDefaultLayout() : checkSavedLayout();
		};

		return () => {
			effectCancelled = false;
		};
	}, [dispatch, registeredLayouts, activeLayout, defaultLayout, savedAppSettings]);

	const menuOpenState = () => !navIsOpen
		? `l-menu--is-closed`
		: `l-menu--is-open`;

	const setLayoutClassName = () => (
		`l-${activeLayout && activeLayout.name}`
	);

	const setLayoutSettingsWrapperClassName = () => (
		`${setLayoutClassName()} ${menuOpenState()}`
	);

	/* Views */
	if (!activeLayout) {
		return <Spinner message={`Formatting Layout Base...`} />;
	};

	return (
		<div className={setLayoutSettingsWrapperClassName()}>
			{ children }
		</div>
	);
};
