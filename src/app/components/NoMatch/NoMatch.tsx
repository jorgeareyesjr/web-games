import React from 'react';
import { Link } from 'react-router-dom';

// A catch-all for URLs that don't have explicit routes defined.
export default function NoMatch() {
	return (
		<section className={`p-page-section`}>
			<div className={`p-page-section__content`}>
				<h2>Oops, this page URL is not supported - 404</h2>
				<Link to="/">Go to the home page</Link>
			</div>
		</section>
	);
};
