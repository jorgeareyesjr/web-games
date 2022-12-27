import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { ILayout } from '../../../_redux/layout/types';
import {
	getLayoutsSelector,
	getActiveLayoutSelector,
} from '../../../_redux/layout/selectors';
import { setActiveLayout } from '../../../_redux/layout/operations';
// import { toggleNavDisplay } from '../../../_redux/nav/actions';

/* Services */
import { updateSetting } from '../../../services/ManageAppData';

export default function LayoutsMenu() {
	const dispatch = useDispatch();

	// const togglePushMenu = () => dispatch(toggleNavDisplay());

	const layouts = useSelector(getLayoutsSelector);
	const activeLayout = useSelector(getActiveLayoutSelector);

	const updateSettingAndCloseMenu = (
		e: React.MouseEvent<HTMLLIElement, MouseEvent>,
		settings: any,
		setting: ILayout,
		action: Function,
	) => {
		// togglePushMenu();
		return updateSetting(
			e,
			settings,
			setting,
			dispatch,
			action,
		);
	};

	const setListingClassName = (activeSetting: any, setting: any) => (activeSetting.name === setting.name)
		? `c-list__listing u--is-active`
		: `c-list__listing`;

	const buildMenu = () => (
		<menu className={`c-menu c-menu--layouts`}>
			<h3 className={`c-title`}>Layouts</h3>
			<ul className={`c-list`}>
				{
					activeLayout && layouts.map((layout: ILayout) => (
						<li
							key={layout.id}
							className={setListingClassName(activeLayout, layout)}
							onClick={(e) => updateSettingAndCloseMenu(
								e,
								layouts,
								layout,
								setActiveLayout,
							)}
						>
							<p>{layout.displayName}</p>
						</li>
					))
				}
			</ul>
		</menu>
	);

	return (
		<>
			{buildMenu()}
		</>
	);
};
