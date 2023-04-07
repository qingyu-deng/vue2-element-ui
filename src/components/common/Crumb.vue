<template>
    <div class="crumb">
        <div class="body">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home/student' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.crumb {
    .body {
        padding: 10px;
        background: #fff;
        box-shadow: 2px 2px 2px grey;
    }
}
</style>