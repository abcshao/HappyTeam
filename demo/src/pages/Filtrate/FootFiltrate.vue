<template>
  <div class="option_c">
    <!--筛选组件-->
    <div class="foot_c left all_c" @click="btnClassify">奶茶果汁<span class="el-icon-caret-bottom"></span>
    <div class="classifyA_c">
      <div class="leftA_c">
        <!--<p class="allFoot_c">全部</p>-->
        <!--<ul v-for="(pro, index) in shop" :key="index" >-->
          <!--<li v-for="(txt, string_c) in classTxt_c" :key="string_c"><span :class="txt"></span>{{pro}}</li>-->
        <!--</ul>-->
        <ul>
          <li>全部<span class="el-icon-arrow-right"></span></li>
          <li>快餐便当<span class="el-icon-arrow-right"></span></li>
          <li>小吃夜宵<span class="el-icon-arrow-right"></span></li>
          <li>果蔬生鲜<span class="el-icon-arrow-right"></span></li>
          <li>特色菜系<span class="el-icon-arrow-right"></span></li>
          <li>商店超市<span class="el-icon-arrow-right"></span></li>
          <li>鲜花蛋糕<span class="el-icon-arrow-right"></span></li>
          <li>全部商家<span class="el-icon-arrow-right"></span></li>
          <li>甜品饮品<span class="el-icon-arrow-right"></span></li>
        </ul>
      </div>
      <div class="rightA_c"></div>
    </div>

    </div>
    <div class="sork_c left all_c">排序<span class="el-icon-caret-bottom"></span></div>
    <div class="screen_c left all_c">筛选<span class="el-icon-caret-bottom"></span></div>

  </div>

</template>

<script>
    export default {
        name: "FootFiltrate",
        data(){
          return {
            // classTxt_c:["el-icon-success","el-icon-sort-down","el-icon-sort-up"],
            // shop:["快餐便当","小吃夜宵","果蔬生鲜"]
          }
        },
        methods:{
          btnClassify(){

          }
        }
    }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html,body {
    width: 100%;
    height: 100%;
  }
  .option_c {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    background: white;
    position: relative;

    .all_c {
      width: 5.33rem;
      height: 1.3rem;
      line-height: 1.3rem;
      margin-top: 0.3rem;
      border-right: 1px solid silver;
      text-align: center;
      /*padding: 0 1.695rem;*/
      font-size: 0.7rem;
      .el-icon-caret-bottom {
        font-size: 0.2rem;
      }
    }
    .screen_c {
      border: 0;
    }
    .classifyA_c {
      width: 100%;
      height: 20rem;
      background: greenyellow;
      position: absolute;
      top: 2rem;
      left: 0;
      .leftA_c {
        width: 50%;
        height: 100%;
        background: cyan;
        position:absolute;
        left: 0;
        .allFoot_c {
          text-align: left;
        }
        ul {
          line-height: 2.26rem;
        }
      }
      .rightA_c {
        width: 50%;
        height: 100%;
        background: white;
        position: absolute;
        right: 0;
      }
    }
  }
</style>
