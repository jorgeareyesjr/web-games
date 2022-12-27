import { all, fork } from 'redux-saga/effects';
import layoutSaga from './layout/sagas';
import themeSaga from './theme/sagas';

export function* rootSaga() {
	yield all([
		fork(layoutSaga),
		fork(themeSaga),
	]);
};
