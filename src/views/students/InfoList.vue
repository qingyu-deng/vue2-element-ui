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
                        <el-button type="primary" @click="handleAdd">新增</el-button>

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
                <el-table-column label="父亲姓名" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.father }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="母亲姓名" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.mather }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="入校时间" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.time }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="家庭住址" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.address }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="联系方式" align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.phone }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="150px">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <my-pagination :current-page="currentPage" :page-size="pageSize" :total="total" @getpageSize="handleSizeChange"
                @getcurrentPage="handleCurrentChange" />
        </el-card>

        <infoment-from ref="InfomentFrom" @reloadTab='reloadTab' :parent="this" />
    </div>
</template>

<script>
import { infoList, infoDelete } from '@/api/info.js';
import MyPagination from '@/components/pagination.vue'
import InfomentFrom from './components/InfoMent'
export default {
    components: {
        MyPagination,
        InfomentFrom
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
            infoList(params).then(res => {
                if (res.data.status === 200) {
                    this.Loading = false;
                    this.tableData = res.data.data
                    this.total = res.data.total
                }
            })
        },
        reloadTab() {
            this.getList()
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
        handleAdd() {
            this.$refs.InfomentFrom.tempwall()
            this.$refs.InfomentFrom.dialogStatus = 'create'
            this.$refs.InfomentFrom.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs.InfomentFrom.$refs['dataForm'].clearValidate()
            })
        },
        handleEdit(row) {
            this.$refs.InfomentFrom.templist(row)
            this.$refs.InfomentFrom.dialogStatus = 'edit'
            this.$refs.InfomentFrom.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs.InfomentFrom.$refs['dataForm'].clearValidate()
            })
        },
        handleDelete(id) {
            this.$confirm('将删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                infoDelete(id).then((res) => {
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