<template>
  <div class="option_c">
    <!--筛选组件-->
    <div class="foot_c left all_c" >
      <span @click="btnScreen_c(1)">奶茶果汁<span :class="classA_c"></span></span>
    <div class="classifyA_c" v-show='classifyB_c==1'>
      <Classify></Classify>
      <div class="empty"></div>
    </div>

    </div>
    <div class="sork_c left all_c">
      <span @click="btnScreen_c(2)">排序<span :class="classA_c"></span></span>
      <div class="sorkA_c" v-show='classifyB_c==2'>
      <Sork></Sork>
    </div>
    </div>
    <div class="screen_c left all_c">
      <span @click="btnScreen_c(3)">筛选<span :class="classA_c"></span></span>
      <div class="screenA_c" v-show='classifyB_c==3'>
      <Screen></Screen>
    </div>
    </div>
  </div>

</template>

<script>
  import Classify from "../../pages/Filtrate/chidren_c/Classify_c";
  import Sork from "../../pages/Filtrate/chidren_c/Sork_c";
  import Screen from "../../pages/Filtrate/chidren_c/Screen_c";
    export default {
        name: "FootFiltrate",
        data(){
          return {
            classifyB_c:0,
            classA_c:"el-icon-caret-bottom",
          }
        },

        components: {Classify,Sork,Screen},
        methods:{
          btnScreen_c(val){
            if(this.classifyB_c ==val){
              this.classA_c = "el-icon-caret-bottom"
              this.classifyB_c =0
            }else{
              this.classA_c = "el-icon-caret-top"
              this.classifyB_c =val

            }

          },
        },
    }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html,body {
    width: 100%;
    height: 80%;
  }
  .option_c {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    background: white;
    position: relative;
    border-bottom: 1px solid silver;

    .all_c {
      width: 5.33rem;
      height: 1.3rem;
      line-height: 1.3rem;
      margin-top: 0.3rem;
      border-right: 1px solid silver;
      text-align: center;
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
    }
    .sork_c {
      .sorkA_c {
        width: 100%;
        height: 15rem;
        line-height: 100%;
        background: white;
        position: absolute;
        top: 2rem;
        left: 0;
        text-align: left;
      }
    }
    .screenA_c {
      width: 100%;
      height: 11rem;
      background: white;
      position: absolute;
      top: 2rem;
      left: 0;
      font-size: 0.6rem;
      }
  }
  .empty {
    clear: both;
  }
</style>
