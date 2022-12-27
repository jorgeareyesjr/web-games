import { combineReducers } from 'redux';
import layoutReducer from './layout/reducer';
import navReducer from './nav/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
	layout: layoutReducer,
	nav: navReducer,
	theme: themeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
