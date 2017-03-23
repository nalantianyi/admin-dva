/**
 * Created by nalantianyi on 2017/3/21.
 */
import {login, userInfo, logout} from '../services/app';
import {parse} from 'qs';

export default {
    namespace: 'app',
    state: {
        login: false,
        user: {
            name: '纳兰天忆'
        },
        loginButtonLoading: false,
        menuPopoverVisible: false,
        siderFold: localStorage.getItem('antdAdminSiderFold') === 'true',
        darkTheme: localStorage.getItem('antdAdminDarkTheme') !== 'false',
        isNavbar: document.body.clientWidth < 769,
        navOpenKeys: JSON.parse(localStorage.getItem('navOpenKeys') || '[]')
    },
    subscriptions: {
        setup ({dispatch}) {
            dispatch({type: 'queryUser'});
        }
    },
    effects: {
        *login({payload}, {call, put}){
            yield put({type: 'showLoginButtonLoading'});
            const data = yield call(login, parse(payload));
            if (data.success) {
                yield put({
                    type: 'loginSuccess', payload: {
                        user: {
                            name: payload.username
                        }
                    }
                });
            }
            else {
                yield put({
                    type: 'loginFail'
                });
            }
        },
        *queryUser({payload}, {call, put}){
            const data = yield call(userInfo, parse(payload));
            if (data.success) {
                yield put({type: 'loginSuccess', payload: {user: {name: data.username}}});
            }
        },
        *logout({payload}, {call, put}){
            const data = yield call(logout, parse(payload));
            if (data.success) {
                yield put({type: 'logoutSuccess'});
            }
        },
        *switchSider({payload}, {put}){
            yield put({type: 'handleSwitchSider'});
        },
        *changeTheme({payload}, {put}){
            yield put({type: 'handleChangeTheme'});

        }
    },
    reducers: {
        loginSuccess(state, action){
            return {...state, ...action.payload, login: true, loginButtonLoading: false};
        },
        logoutSuccess(state){
            return {...state, login: false};
        },
        loginFail(state){
            return {...state, login: false, loginButtonLoading: false};
        },
        showLoginButtonLoading(state){
            return {...state, loginButtonLoading: true};
        },
        handleSwitchSider(state){
            localStorage.setItem('antdAdminSiderFold', !state.siderFold);
            return {...state, siderFold: !state.siderFold};
        },
        handleChangeTheme(state){
            localStorage.setItem('antdAdminDarkTheme', !state.darkTheme);
            return {...state, darkTheme: !state.darkTheme};
        }
    }
};