/**
 * Created by nalantianyi on 2017/3/21.
 */
import {request} from '../utils';
export async function myCity(params) {
    return request('http://www.zuimeitianqi.com/zuimei/myCity', {
        method: 'get',
        data: params,
    })
}

export async function queryWeather(params) {
    return request('http://www.zuimeitianqi.com/zuimei/queryWeather', {
        method: 'get',
        data: params,
    })
}

export async function query(params) {
    return request('/api/dashboard', {
        method: 'get',
        data: params,
    })
}