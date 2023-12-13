<template>
  <el-row>
    <el-col :span="8">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/image/user.png" alt="">
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间: <span>2021-7-19</span></p>
          <p>上次登录地点: <span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px;">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              v-for="(val,key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val" />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{ display:'flex',padding:0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style=" {background:item.color} "></i>
          <div class="detail">
            <p class="price">¥{{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 220px;margin-left: 20px">
<!--        折线图-->
        <div ref="echartsF" style="height: 220px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 220px">
<!--          柱状图-->
          <div ref="echartsS" style="height: 220px"></div>
        </el-card>
        <el-card style="height: 220px">
<!--          饼状图-->
          <div ref="echartsT" style="height: 200px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getData} from "@/api";
import * as echarts from 'echarts'
export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日课程',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]
    }
  },
  mounted() {
    getData().then(({data})=>{
      const {tableData} = data.data
      this.tableData = tableData
      // console.log(data.data)
      //折线图
      //基于准备好的dom,初始化echarts实例
      const echartsF = echarts.init(this.$refs.echartsF)
      //指定图表的配置项和数据
      var echartsFOption = {}
      //处理数据xAxis
      const {orderData,userData,videoData} = data.data
      // console.log(orderData.data) //循环的7个随机数值数组
      const xAxis = Object.keys(orderData.data[0]) //Object.keys获取一个对象的枚举
      const xAxisData = {
        data:xAxis
      }
      echartsFOption.xAxis = xAxisData
      echartsFOption.yAxis = {}
      echartsFOption.legend = xAxisData
      echartsFOption.series = []
      xAxis.forEach(key => {
        echartsFOption.series.push({
          name: key,
          data: orderData.data.map(item => item[key]),
          type: 'line'
        })
      })
      //使用刚指定的配置项和数据显示图表
      echartsF.setOption(echartsFOption)

      // 柱状图
      const echartsS = echarts.init(this.$refs.echartsS)
      var echartsSOption= {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
                data: userData.map(item => item.date),
                axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
                  color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
              color: ["#2ec7c9", "#b6a2de"],
            series: [
              {name:'新增用户',data:userData.map(item => item.new),type:'bar'},
              {name:'活跃用户',data:userData.map(item => item.active),type:'bar'}
            ],
      }
      echartsS.setOption(echartsSOption)

      //饼状图
      const echartsT = echarts.init(this.$refs.echartsT)
      var echartsTOption = {
              tooltip: {
                trigger: "item",
              },
              color: [
                "#0f78f4",
                "#dd536b",
                "#9462e5",
                "#a6a6a6",
                "#e1bb22",
                "#39c362",
                "#3ed1cf",
              ],
              series: [
                  {data:videoData,type:'pie'}
              ],
      }
        echartsT.setOption(echartsTOption)
    })

  }
}
</script>

<style lang="less" scoped>
.user{
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .user-info{
    .name{
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access{
      color: #999999;
    }
  }
}
.login-info{
  p{
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span{
      color: #666666;
      margin-left: 60px;
    }
  }
}
.num{
  display: flex;
  flex-wrap: wrap; //内容超出这一行自动换行
  justify-content: space-between;
  margin-left: 20px;
  .icon{
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    font-size: 30px;
  }
  .detail{
    display: flex;
    margin-left: 15px;
    flex-direction: column; //设置主轴方向为上下 从上到下
    justify-content: center;  //主轴方向居中
    .price{
      font-size: 30px;
      margin-bottom: 10px;
      height: 30px;
      line-height: 30px;
    }
    .desc{
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph{
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
  .el-card{
    width: 48%;
  }
}
</style>