import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getNavIsOpen = (state: AppState) => state.nav.ui.navIsOpen;
const getNavDisplaySize = (state: any) => state.nav.data.navDisplaySize;

export const getNavIsOpenSelector = createSelector(
	getNavIsOpen,
	(nav) => nav,
);

export const getNavDisplaySizeSelector = createSelector(
	getNavDisplaySize,
	(navDisplaySize) => navDisplaySize,
);
