<template>
    <el-form :model="form" :rules=rules ref="form">
        <el-card class="box-card">
            <h3 class="el-form-item">系统登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">登录</el-button>
            </el-form-item>
            
        </el-card>
    </el-form>
</template>
<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '@/api/index'
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: 'admin'
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 8, message: '请输入3-8个字符的用户名', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 4, max: 10, message: '请输入4-10个字符的密码', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submit(){
            // const token = Mock.Random.guid()
            // Cookie.set('token',token)
            this.$refs.form.validate((valid) =>{
                if(valid){
                    getMenu(this.form).then(({data})=>{
                        if(data.code === 2000){
                            Cookie.set('token',data.data.token)
                            this.$store.commit('setMenu',data.data.menu)
                            // this.$store.commit('addMenu',this.$router)
                            this.$router.push('/home')
                        }else{
                            this.$message.error(data.data.message)
                        }
                    })
                }
            })
            
        }
    }
}
</script>
<style scoped lang="less">
.box-card{
    width: 50%;
    position: absolute;
    left: 25%;
    top: 20%;
    .el-form-item{
        display:flex;
        justify-content: space-between; 
        padding:1% 5%;
        .el-input{
            width: 500px;
        }
        .el-form-item__label{
            min-width: 80px;
            text-align: center;
        }
    }
    

}
</style>
 