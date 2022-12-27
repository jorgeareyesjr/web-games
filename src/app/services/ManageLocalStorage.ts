export const getLocalStorageKey = (key: string) => localStorage
	.getItem(key) || null;

export const setLocalStorageKey = (key: string, value: any) => localStorage.setItem(
	key,
	JSON.stringify(value),
);

export const clearLocalStorage = () => localStorage.clear();
