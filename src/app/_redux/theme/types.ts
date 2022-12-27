import {
	GET_ALL_THEMES_REQUEST,
	GET_ALL_THEMES_SUCCESS,
	GET_ALL_THEMES_FAILURE,
	SET_ACTIVE_THEME_REQUEST,
	SET_ACTIVE_THEME_SUCCESS,
	SET_ACTIVE_THEME_FAILURE,
} from './actionTypes';

/* Interfaces */
interface ITheme {
	id: number;
	name: string;
	displayName: string;
	base: string;
	isDefault: boolean;
}

interface IGetAllThemesSuccessPayload {
	themes: Array<ITheme>;
	registeredThemes: any;
}

interface IGetAllThemesFailurePayload {
	error: string;
}

interface ISetActiveThemeSuccessPayload {
	activeTheme: ITheme;
}

interface ISetActiveThemeFailurePayload {
	error: string;
}

/* Types */
type TGetAllThemesRequest = {
	type: typeof GET_ALL_THEMES_REQUEST;
}

type TGetAllThemesSuccess = {
	type: typeof GET_ALL_THEMES_SUCCESS;
	payload: IGetAllThemesSuccessPayload;
};

type TGetAllThemesFailure = {
	type: typeof GET_ALL_THEMES_FAILURE;
	payload: IGetAllThemesFailurePayload;
};

type TSetActiveThemeRequest = {
	type: typeof SET_ACTIVE_THEME_REQUEST;
	payload: ITheme;
};

type TSetActiveThemeSuccess = {
	type: typeof SET_ACTIVE_THEME_SUCCESS;
	payload: ISetActiveThemeSuccessPayload;
};

type TSetActiveThemeFailure = {
	type: typeof SET_ACTIVE_THEME_FAILURE;
	payload: ISetActiveThemeFailurePayload;
};

// https://www.typescriptlang.org/play#example/discriminate-types
type TThemesActions =
	| TGetAllThemesRequest
	| TGetAllThemesSuccess
	| TGetAllThemesFailure
	| TSetActiveThemeRequest
	| TSetActiveThemeSuccess
	| TSetActiveThemeFailure;

/* State */
interface IThemesUIState {
	loading: boolean;
}

interface IThemesDataState {
	themes: ITheme[] | null;
	registeredThemes: any | null;
	activeTheme: ITheme[] | null;
	error: string | null;
}

interface IThemesState {
	ui: IThemesUIState;
	data: IThemesDataState;
}

export type {
	ITheme,
	// actions
	TThemesActions,
	TGetAllThemesRequest,
	TGetAllThemesSuccess,
	TGetAllThemesFailure,
	IGetAllThemesSuccessPayload,
	IGetAllThemesFailurePayload,
	// state
	IThemesUIState,
	IThemesDataState,
	IThemesState,
};
