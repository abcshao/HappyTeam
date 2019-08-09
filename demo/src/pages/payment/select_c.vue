<template>
<div class="select">
  <div class="s-header clear">
    <i class="iconfont txtQ_c" @click="btnReturn_c">&#xe606;</i>
    <span>选择地址</span>
    <div class="empty"></div>
  </div>
  <router-link :to="{path:'/order'}" class="skipB_c">
    <ul>
      <li>
        <div class="site_c">
          <div class="leftB_c">
            <i class="iconfont txtE_c">&#xe619;</i>
            <div class="leftName_c">
              <div class="name_c">
                <span class="txtX_c">陈</span>
                <span>先生</span>
                <span>陈</span>
              </div>
              <div class="shop_c">
                <span class="txtZ_c">其味无穷</span>
                <span>青蛙多所</span>
              </div>
            </div>
          </div>
          <div class="empty"></div>
        </div>
      </li>
    </ul>
  </router-link>
  <router-link :to="{path:'/site'}" class="skip_c">
    <i class="iconfont txtL_c">&#xe60e;</i>
    <span>新增收货地址</span>
  </router-link>
</div>
</template>

<script>
    export default {
        name: "select_c",
      methods:{
        btnReturn_c(){
          this.$router.push({path:"/order"})
        }
      }
    }
</script>

<style scoped lang="less">
  .select {
    width: 100%;
    height: 30rem;
    background-color: white !important;
  .s-header {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    color: white;
    font-size: 0.8rem;
    line-height: 1.95rem;
    text-align: center;
    position: fixed;
    top: 0;
  .txtQ_c {
    float: left;
    margin-left: 0.5rem;
  }
  span {
    margin-right: 0.9rem;
    font-weight: bold;
  }
  }
    .skipB_c {
      margin-top: 1.95rem;
    }
    .site_c {
      width: 100%;
      height: 3.5rem;
      line-height: 3.5rem;
      /*background: white;*/
      margin-top: 1.95rem;
      font-size: 0.6rem;
      /*border-bottom: 2px dashed ;*/
      background-color: #fff;
      background-size: auto .12rem;
      .leftB_c {
        width: 10rem;
        display: inline-block;
        height: 3.5rem;
        box-sizing: border-box;
        color: black;
        .txtE_c {
          margin-left: 0.8rem;
          color: white;
          background: #4cd964;
          font-size: 0.6rem;
          border-radius: 50%;
          padding: 0.1rem 0.15rem;
          vertical-align: 0.5rem;
        }
        .leftName_c{
          display: inline-block;
          margin-left: 0.3rem;
        }
        .name_c {
          width: 5rem;
          line-height: 1rem;
          margin-top: 0.7rem;
          .txtX_c {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
        .shop_c {
          /*display: inline-block;*/
          width: 5rem;
          line-height: 0.7rem;
          font-size: 0.5rem;
          margin-top: 0.2rem;
          .txtZ_c {
            background: rgb(255,87,34);
            color: white;
            border-radius:0.2rem;
            padding: 0 0.3rem;
          }
          :nth-child(2){
            color: rgb(119,119,119);
          }
        }
      }
    }
    .skip_c {
      width: 100%;
      position: fixed;
      text-align: center;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #3190e8;
      font-size: 0.7rem;
      bottom: 0;
      .txtL_c {
        font-size: 0.9rem;
        background: white;
        border-radius: 50%;
        vertical-align: -0.06rem;
        border: 1px solid #3190e8;
      }
    }
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
