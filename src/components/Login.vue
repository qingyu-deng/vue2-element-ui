<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>轻语后台管理系统</span>
            </div>
            <el-form :label-position="labelPosition" label-width="80px" :model="from" ref="from" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="from.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="from.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getLogin('from')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>
<script>
import { nameRule, passwordRule } from '../utils/validate.js'
import { setToken } from '../utils/Token.js'
import { login } from '@/api/login.js'
export default {
    data() {
        return {
            labelPosition: 'right',
            from: {
                username: '309324904@qq.com',
                password: '123456',
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'bur' }],
                password: [{ validator: passwordRule, trigger: 'bur' }],
            }
        }
    },
    methods: {
        getLogin(from) {
            this.$refs[from].validate((valid) => {
                if (valid) {
                    login(this.from).then(res => {
                        if (res.data.status === 200) {
                            setToken('token', res.data.token)
                            setToken('username', res.data.username)
                            this.$message({
                                message: '登录成功！',
                                type: 'success'
                            });
                            this.$router.push('/home')
                        } else {
                            this.$message({
                                message: res.data.message,
                                type: 'error'
                            });
                        }
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    // background: #409eff;
    background: url('../assets/background.png') center no-repeat;
    background-size: 100% 100%;

    .box-card {
        width: 450px;
        margin: 250px auto;

        .clearfix {
            font-size: 34px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>