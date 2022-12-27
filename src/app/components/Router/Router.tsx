import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './Routes';
import BaseLayout from '../../components/BaseLayout';
import NoMatch from '../../components/NoMatch/NoMatch'

export default function Router() {
	const mapRoutes = () => (
		AppRoutes.map((route, i) => (
			<Route
				key={i}
				index={route.path === '/' ? true : false}
				path={route.path}
				element={route.element}
			/>
		))
	);

	return (
		<Routes>
			<Route path="/" element={<BaseLayout />}>
				{ mapRoutes() }
				{/* The NoMatch component is a catch-all for any URLs that don't have explicit routes defined. */}
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
};
