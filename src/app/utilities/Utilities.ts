// Loaders
export const loadLocalJSON = ({ path }: any) => {
	try {
		const json = require(`${path}`);
		return json;
	} catch (error) {
		console.error("Unable to load json:", error);
	};
};

// Time
export const getToday = () => new Date();

export const getUTCToday = () => {
	const today = getToday();
	return new Date(
		Date.UTC(
			today.getUTCFullYear(),
			today.getUTCMonth(),
			today.getUTCDate()
		)
	)
};


// export const getTomorrow = () => {
// 	const tomorrow = new Date(getToday())
// 	tomorrow.setDate(tomorrow.getDate() + 1);
// 	return tomorrow;
// };

// export const getYesterday = () => {
// 	const yesterday = new Date(getToday())
// 	yesterday.setDate(yesterday.getDate() - 1)
// 	return yesterday;
// };

export const getLocalTimeHours = () => {
	return new Date().getHours();
}; 

// Timing
export function debounce(this: any, fn: any, ms: any) {
	let timer: any;

	const applyThis = (args: any) => {
		timer = null;
		return fn.apply(this, args);
	};

	return () => {
		clearTimeout(timer)
		timer = setTimeout((...args) => {
			applyThis(args)
		}, ms);
	};
};

// Maps
// Reduce the data array into a lookup Map: O(n).
// This lookup Map can be used for efficient data lookups: O(1).
export function createRegisteredLookupMap(dataArray: any[]) {
	const lookupMap = dataArray.reduce((acc, curr) => {
		if (!acc[curr.name]) {
			acc[curr.name] = curr;
		};
		return acc;
	}, {});
	return lookupMap;
};

// Validation
export const isValidInteger = (value: any) => !Number(value) ? false : true;

export const valueIsValidJSON = (value: any) => {
	if (typeof value !== 'string') {
		return false;
	};
	try {
		const result = JSON.parse(value);
		const type = Object.prototype.toString.call(result);
		return type === '[object Object]' || type === '[object Array]';
	} catch (error) {
		return false;
	};
};
