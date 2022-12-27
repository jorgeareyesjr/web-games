/* Redux */
import { ITheme } from '../_redux/theme/types';
import { ILayout } from '../_redux/layout/types';

/* Services */
import {
	clearLocalStorage,
	getLocalStorageKey,
	saveValueToLocalStorage,
} from '../services/ManageLocalStorage';

/* Utilities */
import {
	APP_VERSION,
	APP_SETTINGS_KEY,
} from '../utilities/Constants';
import { isValidInteger } from '../utilities/Utilities';

/* Settings */
export const getDefaultSetting = (data: any) => {
	if (!data) {
		return null;
	};

	const defaultDatum = data.filter((datum: any) => datum.isDefault);
	const [first] = defaultDatum;
	return first;
};

export const updateSetting = (
	e: any,
	settings: any,
	thisSetting: any,
	dispatch: any, // From react-redux's useDispatch hook.
	action: Function,
) => {
	e.preventDefault();
	const selectedSetting = settings.filter((setting: any) => setting.name === thisSetting.name);
	const [first] = selectedSetting;
	return dispatch(action(first));
};

export const createNewAppSettings = () => {
	clearLocalStorage();

	return saveValueToLocalStorage({
		key: APP_SETTINGS_KEY,
		value: {
			version: APP_VERSION,
		},
	});
}

export const checkSavedAppSettings = (key: string) => {
	const { version } = JSON.parse(key);
	const versionMatches = version === APP_VERSION;
	const validVersion = isValidInteger(version) && versionMatches;

	if (!validVersion) {
		clearLocalStorage();
		createNewAppSettings();
	};
};

export const getSavedAppSettings = () => {
	const savedAppSettings = getLocalStorageKey(APP_SETTINGS_KEY);

	return !savedAppSettings
		? null
		: JSON.parse(savedAppSettings);
};

export const updateAppSettings = (updatedSetting: any) => {
	const savedAppSettings = getLocalStorageKey(APP_SETTINGS_KEY) || 'null';
	const currentAppSettings = JSON.parse(savedAppSettings);

	return saveValueToLocalStorage({
		key: APP_SETTINGS_KEY,
		value: {
			...currentAppSettings,
			...updatedSetting,
		},
	});
};

export const getDefaultTheme = (themes: ITheme[]) => getDefaultSetting(themes);

export const getDefaultLayout = (layouts: ILayout[]) => getDefaultSetting(layouts);

export const getDefaultSpacingDensity = (spacingDensities: any) => getDefaultSetting(spacingDensities);

export const getDefaultFontSize = (fontSizes: any) => getDefaultSetting(fontSizes);
