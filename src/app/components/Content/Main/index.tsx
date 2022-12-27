import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

/* Redux */
import { getNavDisplaySizeSelector } from '../../../_redux/nav/selectors';

/* Components */
import './index.css';

export default function MainContent () {
	// Get the app's main menu size from redux store and pass it as a variable to calculate how much the MainContent component should move along the X and Y axis (whenever the menu is opened, depending on the layout).
	const { width, height } = useSelector(getNavDisplaySizeSelector);
	const styles: any = {
		'--X': `${width}px`,
		'--Y': `${height}px`,
	};


	return (
		<main className={`c-main-content`} style={styles}>
			{/*
				An <Outlet> renders whatever child route is currently active, so you can think about this <Outlet> as a placeholder for the child routes defined above.
			*/}
			<Outlet />
			{/* <div className={`c-main-content__overlay`}></div> */}
		</main>
	);
};
