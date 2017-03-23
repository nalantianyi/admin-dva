/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import {menu} from '../../utils';

const topMenus = menu.map(item => item.key);
const getMenus = (menuArray, siderFold, parentPath = '/') => {
    return menuArray.map(item => {
        const linkTo = parentPath + item.key;
        if (item.child) {
            return (
                <Menu.SubMenu key={linkTo}
                              title={<span>{item.icon ? <Icon
                                      type={item.icon}></Icon> : ''}{siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
                              </span>}>
                    {getMenus(item.child, siderFold, `${linkTo}/`)}
                </Menu.SubMenu>
            );
        }
        return (
            <Menu.Item key={linkTo}>
                <Link to={linkTo}>
                    {item.icon ? <Icon type={item.icon}/> : ''}
                    {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
                </Link>
            </Menu.Item>
        );
    });
};
function Menus({siderFold, darkTheme, location, handleClickNavMenu, navOpenKeys, changeOpenKeys}) {
    const menuItems = getMenus(menu, siderFold);

    const getAncestorKeys = (key) => {
        const map = {
            '/navigation/navigation2': ['/navigation']
        };
        return map[key] || [];
    };

    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key) > -1));
        const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key) > -1));
        let nextOpenKeys = [];
        if (latestCloseKey) {
            nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestCloseKey);
        }
        onOpenChange(nextOpenKeys);
        //当菜单收起时，无法操作openKeys
    };
    let menuProps = !siderFold ? {onOpenChange, openKeys: navOpenKeys} : {};

    return (
        <Menu {...menuProps} mode={siderFold ? 'vertical' : 'inline'} theme={darkTheme ? 'dark' : 'light'}
              onClick={handleClickNavMenu}
              defaultSelectedKeys={[location.pathname !== '/' ? location.pathname : '/dashboard']}>
            {menuItems}
        </Menu>);
}
Menus.propTypes = {
    siderFold: PropTypes.bool,
    darkTheme: PropTypes.bool,
    location: PropTypes.object,
    isNavbar: PropTypes.bool,
    handleClickNavMenu: PropTypes.func,
    navOpenKeys: PropTypes.array,
    changeOpenKeys: PropTypes.func
};
export default Menus;
