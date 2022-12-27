import {
	GET_ALL_LAYOUTS_REQUEST,
	GET_ALL_LAYOUTS_SUCCESS,
	GET_ALL_LAYOUTS_FAILURE,
	SET_ACTIVE_LAYOUT_REQUEST,
	SET_ACTIVE_LAYOUT_SUCCESS,
	SET_ACTIVE_LAYOUT_FAILURE,
} from './actionTypes';
import {
	TGetAllLayoutsRequest,
	TGetAllLayoutsSuccess,
	TGetAllLayoutsFailure,
	IGetAllLayoutsSuccessPayload,
	IGetAllLayoutsFailurePayload,
	ILayout,
} from './types';

export const getAllLayoutsRequest = (): TGetAllLayoutsRequest => ({
	type: GET_ALL_LAYOUTS_REQUEST,
});

export const getAllLayoutsSuccess = (payload: IGetAllLayoutsSuccessPayload): TGetAllLayoutsSuccess => ({
	type: GET_ALL_LAYOUTS_SUCCESS,
	payload,
});

export const getAllLayoutsFailure = (payload: IGetAllLayoutsFailurePayload): TGetAllLayoutsFailure => ({
	type: GET_ALL_LAYOUTS_FAILURE,
	payload,
});

export const setActiveLayoutRequest = (payload: ILayout) => ({
	type: SET_ACTIVE_LAYOUT_REQUEST,
	payload,
});

export const setActiveLayoutSuccess = (payload: { activeLayout: any; }) => ({
	type: SET_ACTIVE_LAYOUT_SUCCESS,
	payload,
});

export const setActiveLayoutFailure = (payload: { error: any; }) => ({
	type: SET_ACTIVE_LAYOUT_FAILURE,
	payload,
});
