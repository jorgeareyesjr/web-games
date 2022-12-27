import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { ITheme } from '../../../_redux/theme/types';
import {
	getThemesSelector,
	getActiveThemeSelector,
} from '../../../_redux/theme/selectors';
import { setActiveTheme } from '../../../_redux/theme/operations';
// import { toggleNavDisplay } from '../../../_redux/nav/actions';

/* Services */
import { updateSetting } from '../../../services/ManageAppData';

export default function DarkThemesMenu() {
	const dispatch = useDispatch();

	// const togglePushMenu = () => dispatch(toggleNavDisplay());

	const themes = useSelector(getThemesSelector);
	const activeTheme = useSelector(getActiveThemeSelector);

	const updateSettingAndCloseMenu = (
		e: React.MouseEvent<HTMLLIElement, MouseEvent>,
		settings: any,
		setting: ITheme,
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
		? `u--${setting.name} c-list__listing u--is-active`
		: `c-list__listing`;

	const buildMenu = () => (
		<menu className={`c-menu c-menu--dark-themes`}>
			<h3 className={`c-title`}>Dark Themes</h3>
			<ul className={`c-list`}>
				{
					activeTheme && themes
						.filter((theme: ITheme) => theme.base === 'dark')
						.map((theme: ITheme) => (
							<li
								key={theme.id}
								className={setListingClassName(activeTheme, theme)}
								onClick={(e) => updateSettingAndCloseMenu(
									e,
									themes,
									theme,
									setActiveTheme,
								)}
							>
								<p>{theme.displayName}</p>
							</li>
						))
				}
			</ul>
		</menu>
	);

	return (
		<>
			{ buildMenu()}
		</>
	);
};
