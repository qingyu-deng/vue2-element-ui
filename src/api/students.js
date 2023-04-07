import request from '../utils/request.js';

// 学生列表
export function studentList(params) {
    return request({
        method: 'get',
        url: '/students',
        params
    })
}
// 删除
export function studentDelete(id) {
    return request({
        method: 'delete',
        url: '/students/' + id,
    })
}