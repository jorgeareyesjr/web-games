import {
	GET_ALL_LAYOUTS_REQUEST,
	GET_ALL_LAYOUTS_SUCCESS,
	GET_ALL_LAYOUTS_FAILURE,
	SET_ACTIVE_LAYOUT_REQUEST,
	SET_ACTIVE_LAYOUT_SUCCESS,
	SET_ACTIVE_LAYOUT_FAILURE,
} from './actionTypes';
import {
	TLayoutsActions,
	ILayoutsUIState,
	ILayoutsDataState,
	ILayoutsState,
} from './types';

import { combineReducers } from 'redux';

const initialUIState: ILayoutsUIState = {
	loading: false,
};

const initialDataState: ILayoutsDataState = {
	layouts: null,
	registeredLayouts: null,
	activeLayout: null,
	error: null,
};

const initialState: ILayoutsState ={
	ui: initialUIState,
	data: initialDataState,
};

const uiReducer = (state = initialState.ui, action: TLayoutsActions) => {
	switch (action.type) {
		case GET_ALL_LAYOUTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_ALL_LAYOUTS_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case GET_ALL_LAYOUTS_FAILURE:
			return {
				...state,
				loading: false,
			};
		case SET_ACTIVE_LAYOUT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case SET_ACTIVE_LAYOUT_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case SET_ACTIVE_LAYOUT_FAILURE:
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

const dataReducer = (state = initialState.data, action: TLayoutsActions) => {
	switch (action.type) {
		case GET_ALL_LAYOUTS_SUCCESS:
			const { layouts, registeredLayouts } = action.payload;
			return {
				...state,
				layouts,
				registeredLayouts,
				error: null,
			};
		case GET_ALL_LAYOUTS_FAILURE:
			return {
				...state,
				layouts: null,
				registeredLayoutsMap: null,
				error: action.payload,
			};
		case SET_ACTIVE_LAYOUT_SUCCESS:
			const { activeLayout } = action.payload;
			return {
				...state,
				activeLayout,
				error: null,
			};
		case SET_ACTIVE_LAYOUT_FAILURE:
			return {
				...state,
				activeLayout: null,
				error: action.payload,
			};
		default:
			return {
				...state,
			};
	};
};

const LayoutReducer = combineReducers({
	ui: uiReducer,
	data: dataReducer,
});

export default LayoutReducer;
