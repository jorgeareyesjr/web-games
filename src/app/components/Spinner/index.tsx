import React from 'react';
import './index.css';

export default function Spinner({
	message = null, // Optional message prop.
}: any) {
	const buildSpinnerMessage = () => (
		message && <p className={`c-spinner__message`}>{message}</p>
	);

	return (
		<>
			<div className={`c-spinner`}>
				<div className={`c-spinner__animation`}></div>
				{ buildSpinnerMessage ()}
			</div>
		</>
	);
};
