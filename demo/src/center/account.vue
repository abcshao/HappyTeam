<template>
  <div class="account">
    <van-nav-bar
      title="账户信息"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="top">
      <input type="file">
      <h2>头像</h2>
      <img src="//elm.cangdu.org/img/default.jpg" alt="" class="img1">
      <van-icon name="arrow" class="van1"/>
      <!--用户名-->
      <router-link :to="{path:'/amend'}">
        <span class="span1">用户名</span>
        <span class="span2">{{userinfo.username}}</span>
        <van-icon name="arrow" class="van2"/>
      </router-link>
      <!--收货地址-->
      <router-link :to="{path:'/site'}" class="a2">
        <span class="span1">收货地址</span>
        <van-icon name="arrow" class="van2 right"/>
      </router-link>
      <!--账号绑定-->
      <p>账号绑定</p>
      <button @click="phone">
        <img  class="img2" src="data:image/png;base64,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" alt="">
        <span>手机</span>
        <van-icon name="arrow" class="van right"/>
      </button>
      <!--点击手机弹框-->
      <transition enter-active-class="animated bounceIn" leave-active-class="opacity 0">
        <div class="bottom" v-if="show">
          <img src="../imags/ios.png" alt="" class="van4">
          <h4 >请在手机APP中设置</h4>
          <button class="btn3" @click="confirm">确认</button>
        </div>
      </transition>
      <!--安全设置-->
      <p>安全设置</p>
      <router-link :to="{path:'/Reset'}" class="a2">
        <span class="span1">登录密码</span>
        <span class="span2 span3">修改</span>
        <van-icon name="arrow" class="van2 right"/>
      </router-link>
      <!--退出登录按钮-->
      <div class="btn">
        <button class="btn1" @click="backdl">退出登录</button>
      </div>

    </div>
    <div class="bgc" v-if="show1"></div>
    <!--点击退出登录弹框-->
    <transition enter-active-class="animated bounceIn" leave-active-class="opacity 0">
      <div class=" bto" v-if="show1">
        <img src="../imags/ios.png" alt="" class="van4">
        <h1>是否退出登录</h1>
        <button class="btn4" @click="wait">再等等</button>
        <button class="btn5" @click="back" >退出登录</button>
      </div>
    </transition>

  </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {getExit} from "../serivice/api"
  export default {
    name: "account",
    data(){
      return{
        show:false,
        show1:false,
        allinfo:[],
      }
    },
    methods:{
      ...mapActions(['SET_USER_INFO']),
        onClickLeft(){
          this.$router.push({path:'/minejmx'});
        },
      phone(){
        this.show=true;
      },
      confirm(){
        this.show=false;
      },
      backdl(){
        this.show1=true;
      },
      wait(){
        this.show1=false;
      },
      back(){
        getExit().then((result)=>{
          console.log(result)
          if (result.status==1){
            this.SET_USER_INFO({});
            this.$router.push({path:"/minejmx"});

          }
        })

      }
    },
    mounted(){
      this.allinfo=JSON.parse(localStorage.getItem('allinfo'))
    },
    computed: {
      ...mapState(['userinfo']),
    },
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
  .account{
    width: 100%;
    background-color: #f2f2f2;
    position: relative;
    .bgc{
      background-color: #000;
      position:absolute;
      top: 0;
      left: 0;
      bottom: -2.8rem;
      right: 0;
      z-index: 2;
      opacity: .2;
    }
    .bto{
      width: 96%;
      height:60%;
      background-color:white;
      position:absolute;
      left: 2%;
      right: 2%;
      top: 10%;
      z-index: 10;
      text-align: center;
      border-radius: .1rem;
      .van4{
        padding-top: .2rem;
        font-size: 2rem;
        color: #f8cb86;
        margin-top: .5rem;
      }
      h1{
        margin-top: .4rem;
      }
      .btn4{
        background: #c1c1c1;
        margin-right: .3rem;
        border-radius: .1rem;
        font-size: .5rem;
        color: #fff;
        width: 4rem;
        line-height: 1.5rem;
        letter-spacing: .05rem;
        margin-top: 1.3rem;
        /*padding: 0.3rem 3rem;*/
      }
      .btn5{
        background: #dd6b55;
        border-radius: .1rem;
        font-size: .3rem;
        color: #fff;
        width: 5rem;
        line-height: 1.5rem;
        letter-spacing: .05rem;
      }
    }
    .top{
      display: inline-block;
      width: 100%;
      margin-top: .4rem;
      position: relative;
      background-color: white;
      border-top: .25px solid #ddd;
      input{
        width: 100%;
        height:3rem;
        opacity: 0;
        display: block;
      }
      h2{
        font-size: .6rem;
        color: #333;
        font-weight: 500;
        position: absolute;
        top: 1.2rem;
        left: .3rem;
      }
      .img1{
        width: 2rem;
        /*height: .9rem;*/
        border-radius: 50%;
        position: absolute;
        top: .5rem;
        right: .6rem;
      }
      .van1{
        position: absolute;
        top: .6rem;
        right: .2rem;
        color: #e4e4e4;
        font-size: .4rem;
      }
      a{
        width: 100%;
        display: inline-block;
        border-top: .2px solid #ddd;
        padding: .5rem 0 .2rem .5rem;
        .span1{
          display: inline-block;
          font-size: .6rem;
          color: #333;
        }
        .span2{
          display: inline-block;
          float: right;
          margin-right: .8rem;
          color: #999;
          font-size: 0.7rem;
        }
        .van2{
          font-size: .6rem;
          color: #e4e4e4;
          padding-right: .2rem;
          vertical-align: .2rem;
        }
      }
      .a2{
        border-bottom: .2px solid #ddd;
      }
      p{
        background-color: #f2f2f2;
        padding: .3rem;
        font-size: .7rem;
        color: #666;
      }
      button{
        width: 100%;
        background-color: white;
        text-align: left;
        border-top: .25px solid #ddd;
        border-bottom: .25px solid #ddd;
        padding-top:0.3rem ;
        padding-bottom: 0.3rem;
      }
      .img2{
        width: .9rem;
        /*height: .43rem;*/
        padding: .5rem .1rem .3rem .3rem;
      }
      span{
        vertical-align: .35rem;
        font-size: 0.6rem;
        padding-bottom: 0.2rem;
      }
      .van{
        font-size: .7rem;
        color: #e4e4e4;
        padding-right: .22rem;
        padding-top: .3rem;
      }
      .span3{
        position: absolute;
        right: .6rem;
      }
      .btn{
        width: 100%;
        background: #f2f2f2;
      }
      .btn1{
        z-index: 5;
        width: 96%;
        margin: .7rem 2% ;
        line-height: .7rem;
        border-radius: .13rem;
        text-align: center;
        background: #d8584a;
        font-size: .7rem;
        color: #fff;
      }
      .bottom{
        width: 74%;
        background-color: #fff;
        text-align: center;
        position: absolute;
        left: 13%;
        top: 2.5rem;
        border-radius:.2rem ;
        .van4{
          padding-top: .2rem;
          font-size: 1.5rem;
          color: #f8cb86;
        }
        h4{
          font-size: .3rem;
          color: #333;
          line-height: .4rem;
          margin-top: .3rem;
          padding-bottom: .3rem;
        }
        .btn3{
          text-align: center;
          font-size: .4rem;
          color: #fff;
          font-weight: 700;
          margin-top: .4rem;
          background-color: #4cd964;
          width: 100%;
          line-height: .9rem;
          border-radius: 0 0 .2rem .2rem;
        }
      }
    }

  }

</style>
