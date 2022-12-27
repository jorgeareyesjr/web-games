import { ITheme } from './types';
import {
	getAllThemesRequest,
	setActiveThemeRequest,
} from './actions';

const getAllThemes = () => getAllThemesRequest();
const setActiveTheme = (theme: ITheme) => setActiveThemeRequest(theme);

export {
	getAllThemes,
	setActiveTheme,
};
