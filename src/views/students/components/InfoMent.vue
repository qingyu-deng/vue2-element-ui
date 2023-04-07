<template>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :append-to-body="true" width="750px">
        <el-form ref="dataForm" :rules="rules" :model="temp" label-position="right" label-width="80px"
            style="width: 100%; margin-left: -30px">
            <el-form-item>
                <el-col :span="24">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="temp.name" placeholder="请输入" maxlength="16" />
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-col :span="12">
                    <el-form-item label="性别" prop="sex">
                        <el-radio v-model="temp.sex" label="1">男</el-radio>
                        <el-radio v-model="temp.sex" label="2">女</el-radio>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model="temp.age" placeholder="请输入" maxlength="16" />
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-col :span="12">
                    <el-form-item label="父亲姓名" prop="father">
                        <el-input v-model="temp.father" placeholder="请输入" maxlength="16" />
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="母亲姓名" prop="mather">
                        <el-input v-model="temp.mather" placeholder="请输入" maxlength="16" />
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-col :span="24">
                    <el-form-item label="入校时间" prop="time">
                        <el-date-picker v-model="temp.time" clearable type="date" placeholder="选择日期" @change="changeTime" />
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-col :span="12">
                    <el-form-item label="家庭地址" prop="address">
                        <el-input v-model="temp.address" placeholder="请输入" maxlength="16" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系方式" prop="phone">
                        <el-input v-model="temp.phone" placeholder="请输入" maxlength="16" />
                    </el-form-item>
                </el-col>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogStatus === 'create' ? createData() : updateData()">确定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import { infoAdd, infoEdit } from '@/api/info.js'
import moment from 'moment';   //引入 把时间格式化
export default {
    name: 'InfomentFrom',
    props: {
        parent: {
            type: Object,
            default: () => {
                return {
                    list: [],
                    timeout: null,
                }
            }
        }
    },
    data() {
        return {
            textMap: {
                edit: '修改',
                create: '新增',
            },
            dialogStatus: 'create',
            dialogFormVisible: false,
            temp: {},
            rules: {
                // userName: [
                //     {
                //         required: true,
                //         message: '请输入企业名称',
                //         trigger: 'blur'
                //     }
                // ]
            }
        }
    },
    methods: {
        tempwall() {
            this.temp = {}
        },
        templist(item) {
            this.temp = item
            console.log(this.temp)
        },
        changeTime(date) {
            date = new Date()
            let formattedDate = moment(date).format('YYYY-MM-DD');
            this.temp.time = formattedDate
            console.log(this.temp.time)
        },
        createData() {
            this.$refs['dataForm'].validate(valid => {
                console.log(this.temp)
                if (valid) {
                    infoAdd(this.temp).then(res => {
                        if (res.data.status === 200) {
                            this.parent.reloadTab()
                            this.dialogFormVisible = false
                            this.$message({
                                type: 'success',
                                message: '新建成功!'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.message
                            })
                        }

                    })
                }
            })
        },
        updateData() {
            this.$refs['dataForm'].validate(valid => {
                console.log(this.temp)
                if (valid) {
                    infoEdit(this.temp).then(res => {
                        if (res.data.status === 200) {
                            // this.parent.reloadTab()
                            this.$emit('reloadTab')
                            this.dialogFormVisible = false
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.message
                            })
                        }
                    })
                }
            })
        }

    }
}
</script>