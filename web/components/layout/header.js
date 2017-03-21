/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {Menu, Icon, Popover} from 'antd';
import styles from './main.less';
import Menus from './menu';

const SubMenu = Menu.SubMenu;
function Header({
    user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover,
    navOpenKeys, changeOpenKeys
}) {
    let handleClickMenu = e => e.key === 'logout' && logout();
    const menusProps = {
        siderFold: false,
        darkTheme: false,
        isNavbar,
        handleClickMenu: switchMenuPopover,
        location,
        navOpenKeys,
        changeOpenKeys
    };
    return (
        <div className={styles.header}>
            {isNavbar
                ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover}
                           visible={menuPopoverVisible} overlayClassName={styles.popovermenu}
                           trigger="click" content={<Menu {...menusProps}></Menu>}></Popover>
                : <div className={styles.siderbutton} onClick={switchSider}>
                    <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'}></Icon>
                </div>
            }
            <Menu className="header-menu" mode="horizontal" onClick={handleClickMenu}>
                <SubMenu style={{float: 'right'}} title={<span><Icon type="user"></Icon>{user.name}</span>}>
                    <Menu.Item key="logout">
                        <a>注销</a>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        </div>
    );
}
Header.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
    switchSider: PropTypes.func,
    siderFold: PropTypes.bool,
    isNavbar: PropTypes.bool,
    menuPopoverVisible: PropTypes.bool,
    location: PropTypes.object,
    switchMenuPopover: PropTypes.func,
    navOpenKeys: PropTypes.array,
    changeOpenKeys: PropTypes.func
};
export default Header;