<template>
    <div class="pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30, 50]" :page-size="pageSize" background
            layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'MyPagination',
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        handleSizeChange(newSize) {
            this.$emit("getpageSize", newSize);
        },
        handleCurrentChange(newPage) {
            this.$emit("getcurrentPage", newPage);
        },
    }
}
</script>
<style lang="scss" scoped>
.pagination {
    text-align: right;
    margin: 20px 0;
}
</style>