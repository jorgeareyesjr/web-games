// import {
// 	TOGGLE_NAV_DISPLAY,
// 	CLOSE_NAV_DISPLAY,
// 	GET_NAV_DISPLAY_SIZE,
// 	SET_NAV_DISPLAY_SIZE,
// } from './actionTypes';

/* Interfaces */
interface INavDisplaySize {
	width: number | undefined;
	height: number | undefined;
}

/* State */
interface INavUIState {
	navIsOpen: boolean;
}

interface INavDataState {
	navDisplaySize: INavDisplaySize;
}

interface INavState {
	ui: INavUIState;
	data: INavDataState;
}

export type {
	INavDisplaySize,
	// actions

	// state
	INavUIState,
	INavDataState,
	INavState
};
