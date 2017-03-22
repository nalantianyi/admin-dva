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
        loginButtonLoading:false,
        menuPopoverVisible:false,
        siderFold:localStorage.getItem('antdAdminSiderFold')==='true',
        darkTheme:localStorage.getItem('antdAdminDarkTheme')!=='false',
        isNavbar:document.body.clientWidth<769,
        navOpenKeys:JSON.parse(localStorage.getItem('navOpenKeys')||'[]')
    },
    subscriptions:{
        setup({dispatch}){
        }
    }
};