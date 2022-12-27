import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getLoading = (state: AppState) => state.theme.ui.loading;
const getError = (state: any) => state.theme.data.error;
const getThemes = (state: any) => state.theme.data.themes;
const getRegisteredThemes = (state: any) => state.theme.data.registeredThemes;
const getActiveTheme = (state: any) => state.theme.data.activeTheme;

export const getThemesLoadingSelector = createSelector(
	getLoading,
	(loading) => loading,
);

export const getThemesErrorSelector = createSelector(
	getError,
	(error) => error,
);

export const getThemesSelector = createSelector(
	getThemes,
	(themes) => themes,
);

export const getRegisteredThemesSelector = createSelector(
	getRegisteredThemes,
	(themesMap) => themesMap,
);

export const getActiveThemeSelector = createSelector(
	getActiveTheme,
	(activeTheme) => activeTheme,
);
