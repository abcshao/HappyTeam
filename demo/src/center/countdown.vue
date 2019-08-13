<template>
    <div class="down">
      <!--<van-nav-bar-->
        <!--title="在线支付"-->
        <!--left-arrow-->
        <!--@click-left="onClickLeft"-->
      <!--/>-->
      <div class="s-header clear">
        <i class="iconfont txtQ_c"  @click="$router.go(-1)">&#xe606;</i>
        <span>在线支付</span>
        <div class="empty"></div>
      </div>
      <div class="box1">
        <p class="p1">支付剩余时间</p>
        <div class="box2">
          <van-count-down :time="time" />
        </div>
      </div>
      <div class="box3">
        <p class="p2">选择支付方式</p>
      </div>

      <div class="box4">
        <!--<van-radio-group v-model="radio">-->
        <div class="box5">
          <img src="../imags/zfb.png" alt="">
          <span class="s1">支付宝</span>
          <!--<van-radio-group v-model="radio" class="pull-right radio1">-->
            <!--<van-radio name="1" checked-color="#07c160"></van-radio>-->
          <!--</van-radio-group>-->
        </div>
        <div class="box5">
          <img src="../imags/wx.jpg" alt="" >
          <span class="s1">微信</span>
          <!--<van-radio-group v-model="radio" class="pull-right radio1 ">-->
            <!--<van-radio name="2" checked-color="#07c160"></van-radio>-->
          <!--</van-radio-group>-->

        </div>
      </div>
      <div class="box_btn">
        <button class="btn btn-success" @click="btnconfirm">确认支付</button>
      </div>
      <!--<transition name="fade">-->
        <!--<div class="popup" v-if="reveal">-->
          <!--&lt;!&ndash;圆圈&ndash;&gt;-->
          <!--<div class="popup_box1">-->
            <!--<span class="popup_s1"></span>-->
            <!--<span class=" popup_s2"></span>-->
          <!--</div>-->
          <!--<p>当前环境无法支付，请打开官方APP进行付款</p>-->
          <!--<div class="popup_box2" @click="close">-->
            <!--确认-->
          <!--</div>-->
        <!--</div>-->
      <!--</transition>-->


    </div>
</template>

<script>
    export default {
        name: "countdown",
      data(){
        return{
          time:  15 * 60 * 1000,
          radio:"1",
          reveal:false
        }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1)
        },
        close(){
          this.reveal=false
          // this.$router.push({path:""})
        },
        btnconfirm(){
          if(this.radio==1){
            console.log("当前是支付宝支付")
            this.reveal=true
            this.$router.push({path:"/order_jmx"})
          }else {
            console.log("当前是微信支付")
            this.reveal=true
            this.$router.push({path:"/order_jmx"})

          }
        }
      },
      //下方跳转索引 通过vuex变换存储
      // created(){
      //   this.$store.commit('changeTab', 2);
      // },
    }
</script>

<style scoped lang="less">
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
  .down{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    color: #333;
    z-index:10000;
  }
  .van-nav-bar__title{
    color: white;
    font-weight:700;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
  .box1{
    background: white;
    width: 100%;
    height: 6.5rem;
    text-align: center ;
    overflow: hidden;
  }
  .van-count-down{
    font-size: 1.5rem;
    margin-top: 5%;
  }
  .p1{
    margin-top: 10%;
    font-size: 0.6rem;
    color: #666;
  }
  .p2{
    font-size: 0.7rem;
    line-height: 1.8rem ;
    padding-left: 5%;
  }
  .box4{
    background: white;
    /*line-height: 2.6rem;*/
  }
  .box4 img{
    width: 2rem;
    height: 2rem;;
    margin-right: .2rem;
    vertical-align: middle;
    padding-left: 0.5rem;

  }
  .box5{
    /*padding: .4rem .7rem;*/
    border-bottom: .025rem solid #f5f5f5;
  }
  .s1{
    display: inline-block;
    font-size: .7rem;
    color: #666;
    margin-left: 2%;
    padding: 1.2rem 0;
  }
  .van-radio{
    display: inline-block;
  }

  .radio1{

    /*margin-top: 0.3rem;*/
    /*margin-right: 0.2rem;*/
    transform: scale(1.3,1.3);
  }
  .btn{
    width: 95%;
    background: #4cd964;
    line-height: 1.5rem;
  }
  .box_btn{
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: white;
  }


  /*弹出*/
  .popup{
    top: 28%;
    left: 10%;
    width: 80%;
    background: white;
    /*height: 100px;*/
    overflow: hidden;
    position: absolute;

  }
  .popup p{
    text-align: center;
    margin-top: 5%;
    font-size: 0.16rem;
    color: #333;
  }
  .popup_box1{
    border: 3px solid #f8cb86;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    margin-top: 5%;
  }
  .popup_s1{
    display: inline-block;
    background: #f8cb86;
    width: 0.03rem;
    height: 0.4rem;
    margin-left: 48%;
    margin-top: 10%;
  }
  .popup_s2{
    display: inline-block;
    background: #f8cb86;
    width: 0.03rem;
    height: 0.05rem;
    margin-left: 48%;
    border-radius: 50%;
    margin-bottom: 4px;
  }
  .popup_box2{
    background: #4cd964;
    text-align: center;
    line-height: 0.42rem;
    color: white;
    margin-top: 5%  ;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    animation: one .4s ease-in-out forwards;

  }


  @keyframes one {
    0%{
      transform: scale(0.9,0.9);
    }
    50%{
      transform: scale(1.1,1.1);
    }
    75%{
      transform: scale(0.9,0.9);
    }
    100%{
      transform: scale(1.1,1.1);
    }
  }
</style>
