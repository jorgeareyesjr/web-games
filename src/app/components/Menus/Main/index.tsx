import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

/* Redux */
import { setNavDisplaySize } from '../../../_redux/nav/actions';

/* Utilities */
import { debounce } from '../../../utilities/Utilities';

/* Components */
import Nav from '../../../components/Menus/Nav';
import LayoutsMenu from '../../../components/Menus/Layouts';
import LightThemesMenu from '../../../components/Menus/LightThemes';
import DarkThemesMenu from '../../../components/Menus/DarkThemes';
import './index.css';

export default function Menu() {
	const dispatch = useDispatch();

	const menuRef = useRef<any>(null);

	// Effect to manage and update the manu height, whenever the window resizes
	useEffect(() => {
		let effectCancelled = false;

		const handleResize = () => {
			if (menuRef && menuRef.current) {
				const { offsetWidth, offsetHeight } = menuRef.current;
				dispatch(
					setNavDisplaySize({
						width: offsetWidth,
						height: offsetHeight,
					})
				);
			};
		};

		const debouncedHandleResize = debounce(() => {
			handleResize();
		}, 250);

		if (!effectCancelled) {
			// Define the carousel's initial size as soon as it initializes.
			debouncedHandleResize();
			window.addEventListener('resize', debouncedHandleResize);
			window.addEventListener('click', handleResize);
		};

		return () => {
			effectCancelled = false;
			window.removeEventListener('resize', debouncedHandleResize);
			window.removeEventListener('click', handleResize);
		};
	}, [dispatch, menuRef]);

	const menusToRender = [
		<Nav />,
		<LayoutsMenu />,
		<LightThemesMenu />,
		<DarkThemesMenu />,
	];

	const buildMenuDashboard = () => (
		<ul className={`c-list`} ref={menuRef}>
			{
				menusToRender.map((menu, i) => (
					<li key={i} className={`c-list__listing`}>
						{menu}
					</li>
				))
			}
		</ul>
	);

	return (
		<div className={`c-main-menu`}>
			{buildMenuDashboard()}
		</div>
	);
};
