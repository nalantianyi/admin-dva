/**
 * Created by nalantianyi on 2017/3/21.
 */
import React, {PropTypes} from 'react';
import {connect} from 'dva';
import Login from './login';
import styles from '../components/layout/main.less'
import {Spin} from 'antd';
function App({children, location, dispatch, app, loading}) {
    const {login, loginButtonLoading}=app;
    const loginProps = {
        loading,
        loginButtonLoading,
        onOk (data) {
            dispatch({type: 'app/login', payload: data})
        },
    }
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
export default connect((app, loading) => (
    {
        app, loading: loading.models.app
    }
))(App);