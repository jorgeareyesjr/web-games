import React, { Suspense } from 'react';
import Spinner from '../../components/Spinner';
import './index.css';

export default function Landing() {
	return (
		<div className={`p-page p-page--gamebox`}>
			<div className='o-gamebox'>
				<Suspense fallback={<Spinner />}>
					Gamebox
				</Suspense>
			</div>
		</div>
	);
};
