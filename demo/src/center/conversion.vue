<template>
  <div class="conversion">
    <!--导航部分-->
    <van-nav-bar
      title="兑换红包"
      left-text=" "
      arrow-left
      left-arrow
      @click-left="onClickLeft"
    />

    <!---->
    <div class="content">

      <input type="text" placeholder="请输入兑换码" v-model="exchangecode" class="input" @input="inputfirst">

     <div class="div1">
       <input type="text" placeholder="验证码" v-model="captchacode" class="input1">
       <!--验证码-->
       <div class="yzm">
         <img :src=code1 alt="">
         <div @click="look" class="div2">
           <p class="p">看不清</p>
           <p class="p1">换一张</p>
         </div>

       </div>

     </div>
    </div>
      <div class="convert" @click="exchange" :class="{convert1:cheack1}">兑换</div>

    <transition name="fade" enter-active-class="animated bounceIn"
                :duration="400">
      <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
    </transition>

  </div>
</template>

<script>
 import {postconversion,yzmjmx} from "../serivice/api";
 import {mapActions,mapState} from "vuex"
 import Pop_c from "../components/Cpm_c/Pop_c"
  export default {
    name: "conversion",
    components:{Pop_c},
    data(){
      return{
        code1:"",
        allInfo1:[],
        exchangecode:"",
        userid:"",
        captchacode:"",
        show:false,
        popKuang:"",
        cheack1:false,
      }
    },
    methods: {
      ...mapActions(['SET_USER_INFO']),
      btntxt_c(show){
        this.show = show;
      },
      //输入框内的有值的时候，按钮改变颜色
      // inputfirst(){
      //   if(this.exchangecode>0 || this.captchacode.length=4){
      //               this.cheack1=true;
      //         } else{
      //           this.cheack1=false;
      //         }
      // },
      exchange(){
        postconversion({
          user_id:this.userinfo.user_id,
          exchange_code:this.exchangecode,
          captcha_code:this.captchacode,
        }).then((result)=>{
            console.log(result);
          if(result.message == "无效的兑换码"){
            this.show = true;
            this.popKuang = "无效的兑换码";
            return;
          }
        });
      },
      onClickLeft() {
        this.$router.go(-1);
      },
      look(){
        yzmjmx().then((result)=>{
          this.code1=result.code
        })
      },
    },
    created(){
      //获取验证码
      yzmjmx().then((result)=>{
        this.code1=result.code
      });

    //  当输入框内有相应的值的时候改变按钮的颜色
    //     if (this.exchangecode.length>0 || this.captchacode.length=4){
    //           this.cheack1=true;
    //     } else{
    //       this.cheack1=false;
    //     }
    },
    computed:{
      ...mapState(['userinfo']),

    },
  }
</script>

<style scoped lang="less">
  /*@import "_changePackage";*/
  /*导航栏*/
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
  .content {
    margin-top: .7rem;
    padding: 0 .5rem;
  }
    input{
      border: 0.1px solid grey;
    }

    .input{
      width: 100%;
      font-size: .7rem;
      color: #666;
      padding: .6rem .4rem;
      border-radius: .15rem;
    }
    .input1{
      font-size: .7rem;
      color: #666;
      padding: .4rem;
      border-radius: .15rem;
    }
    .p{
      font-size: .25rem;
      color: #666;
    }
  .p1{
    color: #3b95e9;
    font-size: 0.2rem;
    z-index: 10;
  }
    .convert{
      background-color: #ccc;
      font-size: .7rem;
      color: #fff;
      text-align: center;
      margin: .7rem .7rem;
      line-height: 1.8rem;
      border-radius: .2rem;
    }
  .convert1{
    background-color: #ccc;
    font-size: .7rem;
    color: #4cd964;
    text-align: center;
    margin: .7rem .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
  }
  /*验证码*/
  .yzm {
    width: 100%;
    font-size: .7rem;
    color: #666;
    padding: .4rem;
    border-radius: .15rem;
    position: relative;
  }
    img {
      width: 3.5rem;
      height: 1.5rem;
      margin-right: .2rem;
      display: flex;
      position: absolute;
      right: 2.5rem;
    }
  .div1{
    height: 2.2rem;
    display: flex;
    flex: 2;
    margin-top: .7rem;
  }
  .div2{
    display: flex;
    flex-wrap: wrap;
    width: 2rem;
    justify-content: center;
    position: absolute;
    top: 0.5rem;
    right: 0.2rem;
  }
</style>
