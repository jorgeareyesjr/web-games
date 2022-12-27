
import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getLoading = (state: AppState) => state.layout.ui.loading;
const getError = (state: any) => state.layout.data.error;
const getLayouts = (state: any) => state.layout.data.layouts;
const getRegisteredLayouts = (state: any) => state.layout.data.registeredLayouts;
const getActiveLayout = (state: any) => state.layout.data.activeLayout;

export const getLayoutsLoadingSelector = createSelector(
	getLoading,
	(loading) => loading,
);

export const getLayoutsErrorSelector = createSelector(
	getError,
	(error) => error,
);

export const getLayoutsSelector = createSelector(
	getLayouts,
	(layouts) => layouts,
);

export const getRegisteredLayoutsSelector = createSelector(
	getRegisteredLayouts,
	(layoutsMap) => layoutsMap,
);

export const getActiveLayoutSelector = createSelector(
	getActiveLayout,
	(activeLayout) => activeLayout,
);
