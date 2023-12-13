import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import User from "@/views/User"
import Main from "@/views/Main"
import Mall from "@/views/Mall"
import PageOne from "@/views/PageOne"
import PageTwo from "@/views/PageTwo"
Vue.use(VueRouter)

//将路由与组件进行映射
const routes = [
    //主路由
    {
        path:'/',
        component: Main,
        redirect:'/home',   //重定向(当跳转到'/'时自动跳转到'/home')
        children:[
            //子路由(嵌套路由)
            {path:'home',name:'home',component: Home},  //首页
            {path:'user',name:'user',component: User},  //用户管理
            {path:'mall',name:'mall',component: Mall},  //商品管理
            {path:'page1',name:'page1',component: PageOne},  //页面一
            {path:'page2',name:'page2',component: PageTwo},  //页面二

        ]
    },
    {
        path:'/login',
        name:'login',
        component: () => import('@/views/Login')
    }

]
//创建router实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router