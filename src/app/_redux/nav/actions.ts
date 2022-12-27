import {
	TOGGLE_NAV_DISPLAY,
	CLOSE_NAV_DISPLAY,
	GET_NAV_DISPLAY_SIZE,
	SET_NAV_DISPLAY_SIZE,
} from './actionTypes';

const toggleNavDisplay = () => ({
	type: TOGGLE_NAV_DISPLAY,
});

const closeNavDisplay = () => ({
	type: CLOSE_NAV_DISPLAY,
});

const getNavDisplaySize = () => ({
	type: GET_NAV_DISPLAY_SIZE,
});

const setNavDisplaySize = (payload: any) => ({
	type: SET_NAV_DISPLAY_SIZE,
	payload,
});

export {
	toggleNavDisplay,
	closeNavDisplay,
	getNavDisplaySize,
	setNavDisplaySize,
};
