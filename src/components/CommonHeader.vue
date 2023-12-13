<template>
  <div class="header-container">
    <div class="l-content">
      <el-button style="margin-right: 20px" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
<!--      面包屑-->
      <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/image/user.png" alt="">
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Cookie from 'js-cookie'
export default {
  data(){
    return{}
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    },
    loginOut(){
      Cookie.remove('token')
      this.$router.push('/login')
    }
  },
  computed:{
    ...mapState({
        tags: state => state.Tab.tabsList   //在state.模块这里记得看清楚模块的命名
    })
  },
  mounted(){
    // console.log(this.tags,'tags')
  }
}
</script>

<style lang="less" scoped>
.header-container {
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .text{
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-content {
    .user {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
  .l-content {
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item{   //  /deep/是为了避免vue运行机制导致颜色改变不起作用 起'样式穿透'作用
      .el-breadcrumb__inner {
        font-weight: normal;
        &.is-link{
          color: #666;
        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color:#fff
        }
      }
    }
  }
}
</style>