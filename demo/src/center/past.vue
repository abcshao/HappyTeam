<template>
  <div class="past">
    <van-nav-bar
      title="我的"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="top">
      <img src="../imags/elm.jpg" alt="">
      <p>下载饿了么APP</p>
      <button @click="load" style="line-height: 2rem;">下载</button>
    </div>
    <!--弹出的框动画-->
    <transition enter-active-class="animated bounceIn" leave-active-class="opacity 0">
      <div class="kuang" v-if="show">
        <!--<van-icon name="warning-o"  class="van1"/>-->
        <img src="../imags/ios.png" alt="">
        <p>IOS用户请前往AppStore下载</p>
        <button @click="confirm">确认</button>
      </div>
    </transition>

  </div>
</template>
<!--下载饿了么页面-->
<script>
  export default {
    name: "past",
    data(){
      return {
        show:false
      }
    },
    methods:{
        onClickLeft(){
          this.$router.go(-1);
        },
      load(){
        this.show=true;
      },
      confirm(){
        this.show=false;
      }
    }
  }
</script>

<style scoped lang="less">
  .van-nav-bar {
    background-color: #3190e8;
  }
  .van-nav-bar__title {
    color: white;
    font-weight: 400;
  }
  :before{
    color: white;
    text-align: center;
  }

  .past{
    width: 100%;
    hieght:80%;
    background-color: rgb(246,246,246);
    .top {
      text-align: center;
      display: inline-block;
      width: 100%;
      padding-bottom: .15rem;
      margin-top: 1.5rem;
      img{
        border-radius: .5rem;
        margin-bottom: .2rem;
      }
      p{
        font-size: 0.8rem;
        color: #666;
        margin-bottom: .6rem;
      }
      button{
        background-color: #4cd964;
        font-size: .8rem;
        color: #fff;
        width: 93%;
        text-align: center;
        line-height: 2rem;
        border-radius: 0.2rem;
      }
    }
    .kuang{
      width: 74%;
      background-color: #fff;
      text-align: center;
      position: absolute;
      left: 13%;
      top: 9rem;
      border-radius:.25rem .25rem 0 0 ;
      .van1{
        padding-top: .2rem;
        font-size: 1.5rem;
        color: #f8cb86;
      }
      p{
        font-size: .8rem;
        color: #333;
        line-height: .4rem;
        margin-top: .3rem;
        padding-bottom: .3rem;
      }
      button{
        font-size: .7rem;
        color: #fff;
        font-weight: 700;
        margin-top: .4rem;
        background-color: #4cd964;
        width: 100%;
        line-height: 1.8rem;
        border-radius: 0 0 .25rem .25rem;
      }
    }
  }
</style>

