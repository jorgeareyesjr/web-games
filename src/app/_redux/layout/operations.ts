import { ILayout } from './types';
import {
	getAllLayoutsRequest,
	setActiveLayoutRequest,
} from './actions';

const getAllLayouts = () => getAllLayoutsRequest();
const setActiveLayout = (layout: ILayout) => setActiveLayoutRequest(layout);

export {
	getAllLayouts,
	setActiveLayout,
};
