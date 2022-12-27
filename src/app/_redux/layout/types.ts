import {
	GET_ALL_LAYOUTS_REQUEST,
	GET_ALL_LAYOUTS_SUCCESS,
	GET_ALL_LAYOUTS_FAILURE,
	SET_ACTIVE_LAYOUT_REQUEST,
	SET_ACTIVE_LAYOUT_SUCCESS,
	SET_ACTIVE_LAYOUT_FAILURE,
} from './actionTypes';

/* Interfaces */
interface ILayout {
	id: number;
	name: string;
	isDefault: boolean;
	displayName: string;
}

interface IGetAllLayoutsSuccessPayload {
	layouts: Array<ILayout>;
	registeredLayouts: any;
}

interface IGetAllLayoutsFailurePayload {
	error: string;
}

interface ISetActiveLayoutSuccessPayload {
	activeLayout: ILayout;
}

interface ISetActiveLayoutFailurePayload {
	error: string;
}

/* Types */
type TGetAllLayoutsRequest = {
	type: typeof GET_ALL_LAYOUTS_REQUEST;
}

type TGetAllLayoutsSuccess = {
	type: typeof GET_ALL_LAYOUTS_SUCCESS;
	payload: IGetAllLayoutsSuccessPayload;
};

type TGetAllLayoutsFailure = {
	type: typeof GET_ALL_LAYOUTS_FAILURE;
	payload: IGetAllLayoutsFailurePayload;
};

type TSetActiveLayoutRequest = {
	type: typeof SET_ACTIVE_LAYOUT_REQUEST;
	payload: ILayout;
};

type TSetActiveLayoutSuccess = {
	type: typeof SET_ACTIVE_LAYOUT_SUCCESS;
	payload: ISetActiveLayoutSuccessPayload;
};

type TSetActiveLayoutFailure = {
	type: typeof SET_ACTIVE_LAYOUT_FAILURE;
	payload: ISetActiveLayoutFailurePayload;
};

// https://www.typescriptlang.org/play#example/discriminate-types
type TLayoutsActions =
	| TGetAllLayoutsRequest
	| TGetAllLayoutsSuccess
	| TGetAllLayoutsFailure
	| TSetActiveLayoutRequest
	| TSetActiveLayoutSuccess
	| TSetActiveLayoutFailure;

/* State */
interface ILayoutsUIState {
	loading: boolean;
}

interface ILayoutsDataState {
	layouts: ILayout[] | null;
	activeLayout: ILayout | null;
	registeredLayouts: any | null;
	error: string | null;
}

interface ILayoutsState {
	ui: ILayoutsUIState;
	data: ILayoutsDataState;
}

export type {
	ILayout,
	// actions
	TLayoutsActions,
	TGetAllLayoutsRequest,
	TGetAllLayoutsSuccess,
	TGetAllLayoutsFailure,
	IGetAllLayoutsSuccessPayload,
	IGetAllLayoutsFailurePayload,
	// state
	ILayoutsUIState,
	ILayoutsDataState,
	ILayoutsState,
};
