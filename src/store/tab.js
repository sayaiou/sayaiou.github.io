import Cookie from 'js-cookie'
export default {
    state :{
        isCollapse: false, //用于控制菜单是展开还是收起
        tabsList: [
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            }
        ],   //面包屑数据
        menu: []
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑
        selectMenu(state, val){
            //判断添加数据是否为首页
            if(val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                //如果不存在
                if (index === -1){
                    state.tabsList.push(val)
                }
            }
        },
        //删除指定的tag数据
        closeTag(state,item){
            //findIndex()方法返回数组中通过测试的第一个元素的索引  如果找到函数返回 true 值的数组元素，则 findIndex() 返回该数组元素的索引（并且不检查剩余值）否则返回 -1
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)//splice方法第一个是删除的位置,第二个是删除的个数
        },
        setMenu(state,val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        // addMenu(state,router) {
        //     if(!cookie.get('menu'))return
        //     state.menu = menu
        //     const menuArray = []
        //     menu.forEach(item => {
        //         if(item.children){
        //             item.children = item.children.map(item =>{
        //                 item.component = () => import(`../views/${item.url}`)
        //                 return item
        //             })
        //             menuArray.push(...item.children)
        //         }else{
        //             item.component = () => import(`../views/${item.url}`)
        //             menuArray.push(item)
        //         }
        //     })
        // }            
    }
}