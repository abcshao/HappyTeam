<template>
  <div class="searchP_c">
    <div class="s-header clear">
      <i class="iconfont txtQ_c">&#xe606;</i>
      <span>搜索</span>
    </div>
    <form action="" class="submitA_c">
      <input type="search" placeholder="请输入商家或美食名称" class="searchM_c" v-model="textJ_c">
      <input type="submit" class="submitL_c" @click="btnSearch_C">
    </form>
    <div class="historyA_c">
      <h4>搜索历史</h4>
      <ul class="searchM_c">
        <li class="clear">
          <span>1</span>
          <i class="iconfont txtZ_c right">&#xe62d;</i>
        </li>
        <div class="emptyA_c">清空搜索历史</div>
      </ul>
    </div>
  </div>
</template>

<script>
  import {searchT_c} from "../../serivice/api";

  export default {
        name: "searchP_c",
        data(){
          return {
            textJ_c:"",
          }
        },
        methods:{
          btnSearch_C(){
            let params = {keyword:this.textJ_c,}
          }
        }
    }
</script>

<style scoped lang="less">
.searchP_c {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
.s-header {
  background-color: #3190e8;
  width: 100%;
  height: 1.95rem;
  color: white;
  font-size: 0.8rem;
  line-height: 1.95rem;
  text-align: center;
.txtQ_c {
  float: left;
  margin-left: 0.5rem;
}
span {
  margin-right: 0.9rem;
  font-weight: bold;
}
}
  .submitA_c {
    background: white;
    padding: .5rem;
    display: flex;
    input {
      height: 1.5rem;
    }
    .searchM_c {
      flex: 4;
      border: .025rem solid #e4e4e4;
      font-size: .65rem;
      color: #333;
      border-radius: .125rem;
      background-color: #f2f2f2;
      font-weight: 700;
      padding: 0 .25rem;
    }
    .submitL_c {
      flex: 1;
      border: .025rem solid #3190e8;
      margin-left: .2rem;
      font-size: .65rem;
      color: #fff;
      border-radius: .125rem;
      background-color: #3190e8;
      font-weight: 700;
      padding: 0 .25rem;
    }
  }
  .historyA_c {
    color: #333;
    font-weight: 400;
    box-sizing: border-box;

    h4 {
      font-size: .6rem;
      line-height: 2rem;
      text-indent: .5rem;
      font-weight: 700;
      color: #666;
    }
    .searchM_c{
      background-color: #fff;

      li {
        border-bottom: .025rem solid #e4e4e4;
        line-height: 2rem;
        padding: 0 .25rem;
        font-size: 0.8rem;
      }
      span {
        display: inline-block;
        width: 80%;
        font-weight: 400;
      }
      .txtZ_c {
        width: 1rem;
        height: 1rem;
        font-size: .4rem;
        color: #aaa;
      }
      .emptyA_c {
        background-color: #fff;
        color: #3190e8;
        font: .7rem/2rem Microsoft YaHei;
        font-weight: 700;
        text-align: center;

      }
    }

  }
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
</style>
