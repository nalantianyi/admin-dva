/**
 * Created by nalantianyi on 2017/3/21.
 */
import request from '../utils/request';
export async function login(params) {
    return request('/api/login', {method: 'POST', data: params});
}
export async function logout(params) {
    return request('/api/logout', {method: 'POST', data: params});
}
export async function userInfo(params) {
    return request('/api/userInfo', {method: 'GET', data: params});
}
