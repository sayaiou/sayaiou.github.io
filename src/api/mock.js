//老是忘记 mock模拟后端数据接口在这里定义的

import Mock from 'mockjs'
import homeApi from '@/api/mockServeData/home'
import user from '@/api/mockServeData/user'
import permission from './mockServeData/permission'
//定义mock请求路径
Mock.mock('/api/home/getData',homeApi.getStatisticalData
    //拦截到请求后的处理逻辑
)

//定义用户列表的数据
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock(/api\/user\/getUser/,'get',user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)