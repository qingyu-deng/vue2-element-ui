// 用户名正则匹配
export function nameRule(rule, value, callback) {
    // let reg = /(^[a-zA-Z0-9]{4,20}$)/
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱'))
    } else {
        callback()
    }
}

// 密码正则匹配
export function passwordRule(rule, value, callback) {
    // 需包含大小写字母和数字以及特殊符号
    // let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    let reg = /(^[a-zA-Z0-9]{4,20}$)/
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!reg.test(value)) {
        callback(new Error('6-12位密码'))
    } else {
        callback()
    }
}