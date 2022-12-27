import React from 'react';
import { useDispatch } from 'react-redux';

/* Redux */
import { toggleNavDisplay } from '../../_redux/nav/operations';

/* Components */
import './index.css';

export default function Header() {
	const dispatch = useDispatch();
	const toggleNav = () => dispatch(toggleNavDisplay());
	return (
		<header className={`c-header`}>
			<button className={`c-header__button`} onClick={toggleNav}>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</header>
	);
};
