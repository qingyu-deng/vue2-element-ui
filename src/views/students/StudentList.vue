<template>
    <div>
        <el-card>
            <el-form :inline="true" :model="form" class="demo-form-inline">
                <div style="text-align: left;">
                    <el-form-item>
                        <el-input v-model="form.name" placeholder="请输入名字" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">查询</el-button>
                        <el-button @click="onReset">重置</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <el-table v-loading="Loading" :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                border stripe style="width: 100%;height:100%;">
                <el-table-column label="姓名" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="年龄" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.age }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="性别" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.sex == 1 ? '男' : '女' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="学号" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.number }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="班级" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.class }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.state === "1"
                            ? '已入学' : scope.row.state === "2"
                                ? '未入学' : '休学中' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="地址" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.address }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="手机号码" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.phone }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <my-pagination :current-page="currentPage" :page-size="pageSize" :total="total" @getpageSize="handleSizeChange"
                @getcurrentPage="handleCurrentChange" />
        </el-card>

    </div>
</template>

<script>
import { studentList, studentDelete } from '@/api/students.js';
import MyPagination from '@/components/pagination.vue'
import { Loading } from 'element-ui';
export default {
    components: {
        MyPagination
    },
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 10,
            total: 0,
            Loading: true,
            form: {
                name: '',
            }
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList(params) {
            this.Loading = true;
            studentList(params).then(res => {
                if (res.data.status === 200) {
                    this.Loading = false;
                    this.tableData = res.data.data
                    this.total = res.data.total
                }
            })
        },
        onSearch() {
            console.log(this.form)
            this.getList(this.form)
        },
        onReset() {
            this.currentPage = 1
            this.getList()
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
        },
        handleCurrentChange(val) {
            this.currentPage = val
        },
        handleDelete(id) {
            this.$confirm('将删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                studentDelete(id).then((res) => {
                    if (res.data.status === 200) {
                        this.getList()
                        this.$message({
                            message: res.data.message,
                            type: 'success'
                        });
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        }
    }
}
</script>
<style lang="scss" scoped></style>