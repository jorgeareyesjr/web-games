import {
	all,
	put,
	takeLatest,
} from 'redux-saga/effects';

/* Redux */
import {
	GET_ALL_LAYOUTS_REQUEST,
	SET_ACTIVE_LAYOUT_REQUEST,
} from './actionTypes';
import {
	getAllLayoutsSuccess,
	getAllLayoutsFailure,
	setActiveLayoutSuccess,
	setActiveLayoutFailure,
} from './actions';
import { ILayout } from './types';

/* Services */
import { data } from '../../data/layouts';
import { updateAppSettings } from '../../services/ManageAppData';

/* Utilities */
import { APP_LAYOUTS_URL } from '../../utilities/Constants';
import { createRegisteredLookupMap } from '../../utilities/Utilities';

function* getAllLayoutsSaga() {
	try {
		const layouts: ILayout[] = data[APP_LAYOUTS_URL];
		const registeredLayouts = createRegisteredLookupMap(layouts)

		yield put(
			getAllLayoutsSuccess({
				layouts,
				registeredLayouts,
			}),
		);
	} catch (e: any) {
		yield put(
			getAllLayoutsFailure({
				error: e.message,
			}),
		);
	};
};

function* setActiveLayoutSaga(action: any) {
	try {
		const activeLayout = action?.payload;

		updateAppSettings({ activeLayout: activeLayout.name });

		yield put(
			setActiveLayoutSuccess({
				activeLayout,
			}),
		);
	} catch (e: any) {
		yield put(
			setActiveLayoutFailure({
				error: e.message,
			}),
		);
	};
};

function* layoutsSaga() {
	yield all([
		takeLatest(GET_ALL_LAYOUTS_REQUEST, getAllLayoutsSaga),
		takeLatest(SET_ACTIVE_LAYOUT_REQUEST, setActiveLayoutSaga),
	]);
};

export default layoutsSaga;
