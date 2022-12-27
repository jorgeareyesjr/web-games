import {
	all,
	put,
	takeLatest,
} from 'redux-saga/effects';

/* Redux */
import {
	GET_ALL_THEMES_REQUEST,
	SET_ACTIVE_THEME_REQUEST,
} from './actionTypes';
import {
	getAllThemesSuccess,
	getAllThemesFailure,
	setActiveThemeSuccess,
	setActiveThemeFailure,
} from './actions';
import { ITheme } from './types';

/* Services */
import { data } from '../../data/themes';
import { updateAppSettings } from '../../services/ManageAppData';

/* Utilities */
import { APP_THEMES_URL } from '../../utilities/Constants';
import { createRegisteredLookupMap } from '../../utilities/Utilities';

function* getAllThemesSaga() {
	try {
		const themes: ITheme[] = data[APP_THEMES_URL];
		const registeredThemes = createRegisteredLookupMap(themes);

		yield put(
			getAllThemesSuccess({
				themes,
				registeredThemes,
			}),
		);
	} catch (e: any) {
		yield put(
			getAllThemesFailure({
				error: e.message,
			}),
		);
	};
};

function* setActiveThemeSaga(action: any) {
	try {
		const activeTheme = action?.payload;

		updateAppSettings({ activeTheme: activeTheme.name });

		yield put(
			setActiveThemeSuccess({
				activeTheme,
			}),
		);
	} catch (e: any) {
		yield put(
			setActiveThemeFailure({
				error: e.message,
			}),
		);
	};
};

function* themeSaga() {
	yield all([
		takeLatest(GET_ALL_THEMES_REQUEST, getAllThemesSaga),
		takeLatest(SET_ACTIVE_THEME_REQUEST, setActiveThemeSaga),
	]);
};

export default themeSaga;
