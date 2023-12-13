<template>
    <div class="manage">
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            width="50%"
            >
<!--          用户的表单信息-->
          <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px" >
              <el-form-item label="姓名" prop="name">
                  <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
              </el-form-item>

              <el-form-item label="性别" prop="sex">
                <el-select v-model="form.sex" placeholder="请选择">
                  <el-option label="男" :value="1"></el-option>
                  <el-option label="女" :value="0"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="出生日期" prop="birth">
                <el-date-picker
                    v-model="form.birth"
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>

            <el-form-item label="地址" prop="addr">
              <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
            </el-form-item>

          </el-form>
          <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
          </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="handleAdd" type="primary" >
                + 新增
            </el-button>
            <el-form :model="userForm" style="display: flex;justify-content:space-between;">
              <el-form-item>
                <el-input v-model="userForm.name" placeholder="请输入名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
              </el-form-item>
            </el-form>
        </div>
        <el-table
            stripe  
            :data="tableData"
            style="width: 100%;height:calc(100%-62px);"
            height="90%">
          <el-table-column
              prop="name"
              label="姓名">
          </el-table-column>
          <el-table-column
              prop="sex"
              label="性别">
                <template slot-scope="scope">
<!--                  由于是mock生成的随机数据所以这么写-->
                  <span style="margin-left: 10px">{{ scope.row.sex == 1 ? '男' : '女'}}</span>
                </template>
          </el-table-column>
          <el-table-column
              prop="age"
              label="年龄">
          </el-table-column>
          <el-table-column
              prop="birth"
              label="出生日期">
          </el-table-column>
          <el-table-column
              prop="addr"
              label="地址">
          </el-table-column>

        </el-table>
        <div>
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            @current-change="handlePage"
            style="float:right;">
          </el-pagination>
        </div>
    </div>
</template>

<script>
import { getUser, addUser, editUser, delUser } from '@/api'
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      tableData:[
      ],
      total: 0,
      modalType: 0, //0为新增,1为编辑
      pageData: {
        page: 1,
        limit: 10
      },
      userForm: {
        name: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},    //防止忘记 trigger指触发条件 blue是失去焦点 change是改变数据
          {min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        age:[
          {required: true, message: '请输入姓名年龄', trigger: 'blur'}
        ],
        sex:[
          {required: true, message: '请选择性别', trigger: 'blur'}
        ],
        birth:[
          {required: true, message: '请选择出生日期', trigger: 'blur'}
        ],
        addr:[
          {required: true, message: '请输入地址', trigger: 'blur'}
        ],
      }
    }
  },
  methods:{
    //提交用户表单
    submit(){
      this.$refs.form.validate((valid) => {   //validate会传入是否校验成功的参数 valid为那个参数
          if(valid){
            if (valid) {
              if (this.modalType === 0) {
                addUser(this.form).then(() => {
                  this.getList()
                })
              }else{
                editUser(this.form).then(() => {
                  this.getList()
                  Object.keys(this.form).forEach((keys) => (this.form[keys] = ''))
                })
              }
            }
            this.dialogVisible = false
          }
      })
    },
    //清空表单
    handleClose(){
        this.$refs.form.resetFields()
        this.dialogVisible=false
    },
    cancel(){
        this.handleClose()
    },
    handleEdit(row){
      this.modalType = 1
      this.dialogVisible = true
      this.form = JSON.parse(JSON.stringify(row))
    },
    handleDelete(row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()  
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    handleAdd(){
      this.modalType = 0
      this.dialogVisible = true
    },
    handlePage(val){
      this.pageData.page = val
      this.getList()
    },
    onSubmit(){
      this.getList()
    },
    getList(){
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(({data}) => {
          this.tableData = data.list
          this.total = data.count || 0
      })
    }
  },
  mounted(){
      this.getList()
  }
}
</script>

<style lang="less">
.manage{
  height: 90%;
  .manage-header{
    .el-form-item{
      margin-bottom: 0px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
