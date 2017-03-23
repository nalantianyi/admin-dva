/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {connect} from 'dva';
import Login from './login';
import styles from '../components/layout/main.less'
import {Spin} from 'antd';
function App({children, location, dispatch, app, loading}) {
    const {login, loginButtonLoading, user, siderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys}=app;
    const loginProps = {
        loading,
        loginButtonLoading,
        onOk (data) {
            dispatch({type: 'app/login', payload: data})
        },
    }
    const headerProps = {
        user,
        siderFold,
        location,
        isNavbar,
        menuPopoverVisible,
        navOpenKeys,
        switchMenuPopover(){
            dispatch({type: 'app/switchMenuPopover'});
        },
        logout(){
            dispatch({type: 'app/logout'});
        },
        switchSider(){
            dispatch({type: 'app/switchSider'});
        },
        changeOpenKeys(openKeys){
            localStorage.setItem('navOpenKeys', JSON.stringify(openKeys));
            dispatch({type: 'app/handleNavOpenKeys', payload: {navOpenKeys: openKeys}});
        }
    };


    return (<div>{
        login
            ?
            <div>app</div>
            :
            <div className={styles.spin}>
                <Spin tip="加载用户信息..." spinning={loading} size="large">
                    <Login {...loginProps}/>
                </Spin>
            </div>}</div>);
}

App.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    app: PropTypes.object,
    loading: PropTypes.bool,
};
export default connect(({app, loading}) => {
    return {
        app, loading: loading.global
    };
})(App);