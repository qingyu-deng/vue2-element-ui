import request from '../utils/request.js';

// 登录接口
export function login(data) {
    return request({
        method: 'post',
        url: '/login',
        data
    })
}