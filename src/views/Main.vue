<template>
  <div>
    <el-container>
        <el-aside width="auto">
          <common-aside />
        </el-aside>
      <el-container>
        <el-header>
          <common-header />
        </el-header>
        <common-tag />
        <el-main>
<!--          路由出口         -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommonTag from "@/components/CommonTag";
export default {
  components:{
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.el-header{
  padding: 0;
}
.el-container{
  .tabs{
    padding: 10px 0px 0px 20px;
  }
  .el-main{
    padding: 10px;
    /deep/ .el-card__body{
      padding: 20px;
    }
  }
}
</style>