// 存token
export function setToken(tokenkey, token) {
    return localStorage.setItem(tokenkey, token)
}
// 获取token
export function getToken(tokenkey) {
    return localStorage.getItem(tokenkey)
}
// 移除token
export function removeToken(tokenkey) {
    return localStorage.removeItem(tokenkey)
}