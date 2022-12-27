/* Services */
import {
	createNewAppSettings,
	checkSavedAppSettings,
} from "../services/ManageAppData";

/* Utilities */
import { APP_SETTINGS_KEY } from "../utilities/Constants";

export const getLocalStorageKey = (key: string) => localStorage
	.getItem(key) || null;

export const setLocalStorageKey = (key: string, value: any) => localStorage.setItem(
	key,
	JSON.stringify(value),
);

export const saveValueToLocalStorage = ({ key, value }: any) => setLocalStorageKey(key, value);

export const deleteValueFromLocalStorage = (key: string) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

export const syncLocalStorage = () => {
	const savedAppSettingsKey = getLocalStorageKey(APP_SETTINGS_KEY);
	return !savedAppSettingsKey
		? createNewAppSettings()
		: checkSavedAppSettings(savedAppSettingsKey);
};
