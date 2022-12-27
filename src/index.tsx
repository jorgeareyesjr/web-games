import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './app/_redux/store';
import App from './App';

(() => {
	try {
		const container = document.getElementById('o-app-root');
		const root = createRoot(container!)
		root.render(
			<React.StrictMode>
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ Provider>
			</React.StrictMode>
		);
	} catch (error) {
		console.error(error);
	};
})();
