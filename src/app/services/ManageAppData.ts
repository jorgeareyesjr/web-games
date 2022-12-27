/* Redux */
import { ITheme } from '../_redux/theme/types';
import { ILayout } from '../_redux/layout/types';

/* Services */
import {
	clearLocalStorage,
	getLocalStorageKey,
	setLocalStorageKey,
} from '../services/ManageLocalStorage';

/* Utilities */
import {
	APP_VERSION,
	APP_SETTINGS_KEY,
	RELEVANT_APP_SETTINGS_KEYS,
} from '../utilities/Constants';
import { isValidInteger } from '../utilities/Utilities';

/* Manage App Data */
export const saveValueToLocalStorage = ({ key, value }: any) => setLocalStorageKey(key, value);

export const deleteValueFromLocalStorage = (key: string) => localStorage.removeItem(key);

export const getRelevantSettingsToPreserve = () => {
	// We want to check and save any app settings supported apps (that are meant to operate within the same ecosystem).
	return RELEVANT_APP_SETTINGS_KEYS.map((setting) => {
		let savedSettingValue = getLocalStorageKey(setting);
		return {
			key: setting,
			value: savedSettingValue,
		};
	});
};

export const savePreservedSettings = (preservedSettings: any) => (
	preservedSettings.map((setting: any) => (
		(setting.value)
			? saveValueToLocalStorage({
				key: setting.key,
				value: JSON.parse(setting.value),
			})
			: null
	))
);

export const createNewAppSettings = () => {
	// Before we clear the localStorage, check for any relevant app settings we want to preserve.
	const preservedSettings = getRelevantSettingsToPreserve();
	clearLocalStorage();
	savePreservedSettings(preservedSettings);

	return saveValueToLocalStorage({
		key: APP_SETTINGS_KEY,
		value: {
			version: APP_VERSION,
		},
	});
};

export const checkSavedAppSettings = (key: string) => {
	const { version } = JSON.parse(key);
	const versionMatches = version === APP_VERSION;
	const validVersion = isValidInteger(version) && versionMatches;

	if (!validVersion) {
		clearLocalStorage();
		createNewAppSettings();
	};
};

export const syncLocalStorage = () => {
	const savedAppSettingsKey = getLocalStorageKey(APP_SETTINGS_KEY);
	return !savedAppSettingsKey
		? createNewAppSettings()
		: checkSavedAppSettings(savedAppSettingsKey);
};

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
