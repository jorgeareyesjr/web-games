import {
	GET_ALL_THEMES_REQUEST,
	GET_ALL_THEMES_SUCCESS,
	GET_ALL_THEMES_FAILURE,
	SET_ACTIVE_THEME_REQUEST,
	SET_ACTIVE_THEME_SUCCESS,
	SET_ACTIVE_THEME_FAILURE,
} from './actionTypes';
import {
	TThemesActions,
	IThemesUIState,
	IThemesDataState,
	IThemesState,
} from './types';
import { combineReducers } from 'redux';

const initialUIState: IThemesUIState = {
	loading: false,
};

const initialDataState: IThemesDataState = {
	themes: null,
	registeredThemes: null,
	activeTheme: null,
	error: null,
};

const initialState: IThemesState ={
	ui: initialUIState,
	data: initialDataState,
};

const uiReducer = (state = initialState.ui, action: TThemesActions) => {
	switch (action.type) {
		case GET_ALL_THEMES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_ALL_THEMES_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case GET_ALL_THEMES_FAILURE:
			return {
				...state,
				loading: false,
			};
		case SET_ACTIVE_THEME_REQUEST:
			return {
				...state,
				loading: true,
			};
		case SET_ACTIVE_THEME_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case SET_ACTIVE_THEME_FAILURE:
			return {
				...state,
				loading: false,
			};
		default:
			return {
				...state,
			};
	};
};

const dataReducer = (state = initialState.data, action: TThemesActions) => {
	switch (action.type) {
		case GET_ALL_THEMES_SUCCESS:
			const { themes, registeredThemes } = action.payload;
			return {
				...state,
				themes,
				registeredThemes,
				error: null,
			};
		case GET_ALL_THEMES_FAILURE:
			return {
				...state,
				themes: null,
				registeredThemes: null,
				error: action.payload,
			};
		case SET_ACTIVE_THEME_SUCCESS:
			const { activeTheme } = action.payload;
			return {
				...state,
				activeTheme,
				error: null,
			};
		case SET_ACTIVE_THEME_FAILURE:
			return {
				...state,
				activeTheme: null,
				error: action.payload,
			};
		default:
			return {
				...state,
			};
	};
};

const themesReducer = combineReducers({
	ui: uiReducer,
	data: dataReducer,
});

export default themesReducer;
