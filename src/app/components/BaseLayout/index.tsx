import React from 'react';

/* Components */
import Header from '../Header';
import MainMenu from '../Menus/Main';
import MainContent from '../Content/Main';
import './index.css';

export default function BaseLayout() {
	return (
		<div className={`c-base-layout`}>
			<Header />
			<MainMenu />
			<MainContent />
		</div>
	);
};
