import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/* Redux */
import { toggleNavDisplay } from '../../../_redux/nav/actions';

/* Components */
import { AppRoutes } from '../../../components/Router/Routes';

export default function Nav() {
	let location = useLocation();

	const dispatch = useDispatch();

	/* Menu */
	const togglePushMenu = () => dispatch(toggleNavDisplay());

	const setClassName = ({ path }: any) => (path === location.pathname)
		? `c-list__listing u--is-active`
		: `c-list__listing`;

	const buildMenu = () => (
		<nav className={`c-nav`}>
			<menu className={`c-menu c-menu--nav`}>
				<h3 className={`c-title`}>Navigation</h3>
				<ul className={'c-list'}>
					<li className={`c-list__listing`}>
						<a
							className={`c-link`}
							onClick={togglePushMenu}
							href={`https://jorgeareyesjr.github.io/`}
						>
							{`Back to github.io`}
						</a>
					</li>
					{
						AppRoutes.map((route, i) => (
							<li key={i} className={setClassName(route)}>
								<Link
									key={i}
									to={route.path}
									className={`c-link`}
									onClick={togglePushMenu}
								>
									{route.name}
								</Link>
							</li>
						))
					}
				</ul>
			</menu>
		</nav>
	);

	return (
		<>
			{buildMenu()}
		</>
	);
};
