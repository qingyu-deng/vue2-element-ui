<template>
    <div class="header">
        <el-header>
            <div class="title">通用管理系统</div>
            <div>欢迎！{{ name }}</div>
        </el-header>
    </div>
</template>
<script>
import { getToken } from '@/utils/Token.js';
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.name = getToken('username')
    }
}
</script>
<style lang="scss" scoped>
.header {
    .el-header {
        background: #2578b5;
        color: #FFF;
        line-height: 60px;
        display: flex;
        justify-content: space-between;

        .title {
            width: 200px;
            font-size: 24px;
        }
    }
}
</style>