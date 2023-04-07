import request from '../utils/request.js';
// 信息列表
export function infoList(params) {
    return request({
        method: 'get',
        url: '/info',
        params
    })
}
// 新增
export function infoAdd(data) {
    return request({
        method: 'post',
        url: '/info',
        data
    })
}
// 修改
export function infoEdit(data) {
    return request({
        method: 'put',
        url: '/info',
        data
    })
}
// 删除
export function infoDelete(id) {
    return request({
        method: 'delete',
        url: '/info/' + id,
    })
}