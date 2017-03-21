/**
 * Created by nalantianyi on 2017/3/21.
 */
import axios from 'axios';
export async function login(params) {
    return axios('/api/login', {method: 'POST', data: params});
}
export async function logout(params) {
    return axios('/api/logout', {method: 'POST', data: params});
}
export async function userInfo(params) {
    return axios('/api/userInfo', {method: 'GET', data: params});
}
