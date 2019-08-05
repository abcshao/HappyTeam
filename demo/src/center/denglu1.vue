<template>
  <div class="denglu">
    <!--头部-->
    <van-nav-bar
      title="密码登录"

      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group>

      <!--用户名框-->
      <input1  placeholder="请输入用户名" v-model="username"/>
      <!--密码框-->
      <section class="one">
          <span >
            <input :type="checked ? show1:show2" placeholder="请输入密码" style="font-size: 0.64rem; color: rgb(150,151,145); padding-left: 0.7rem" v-model="password">
          </span>
        <span class="right">
            <span class="tex">abc...</span>
           <van-switch
             v-model="checked"
             size="0.9rem"
             active-color="#07c160"
             inactive-color="#ccc"
           />
          </span>
      </section>

      <!--验证码框-->
      <section class="two">
          <span>
             <input placeholder="验证码" ></input>
          </span>
      </section>


    </van-cell-group>

    <p class="p">温馨提示：未注册过的账户，登录时将自动注册</p>
    <p class="p">注册过的用户可凭账户密码登录</p>

    <!--登录按钮-->
    <!--<router-link :to="{path:'/minejmx'}">-->
    <van-button type="primary" size="large" >登录</van-button>

    <!--</router-link>-->


    <span class="two_s1">
               <img :src="picture" alt="" style="display: inline-block;">
            </span>
    <span @click="postPic" class="two_s2">
               <p > 看不清</p>
               <p class="pp">换一张</p>
            </span>

  </div>
</template>

<script>
  import {yzmjmx} from "../serivice/api"
  export default {
    name: "denglu1",
    data(){
      return{

        checked:"false",
        show1:'password',
        show2:'text',
        username:"",
        password:"",
        captcha_code:"",

        //  获取提取到的验证码图片信息
        picture:"",
      }
    },
    methods:{
      // postPic(){
      //   yzmjmx().then((result=>{
      //     this.picture=result.code
      //   }))  // this.picture=result.code
      // }
      // postPic(){
      //   this.$http({
      //     method:'post',
      //     url:"https://elm.cangdu.org/v1/captchas",
      //     withCredentials:true,
      //   }).then((result=>{
      //     this.picture=result.code
      //   }))
      // },

      // postMessage(){
      //   this.$http({
      //     method:'post',
      //     url:"https://elm.cangdu.org/v2/login",
      //     withCredentials:true,
      //     data:{
      //     //  用户名
      //       username:input1.value,
      //       password:input2.value,
      //       captcha_code:input3.value,
      //     }
      //   }).then((result=>{
      //
      //   }))
      // }
      onClickLeft(){
        this.$router.go(-1);
      }
    },
    mounted(){
      yzmjmx().then((result=>{
        this.picture=result.code
      }))
    }
  }
</script>

<style scoped>
  .denglu{
    position: relative;
  }
  .tex{
    font-size: 0.6rem;
  }
  .one{
    padding: 0.1rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .right{
    /*position: relative;*/
    right: 2rem;
  }
  .tex{
    position: absolute;
    right: 1rem;
    z-index: 1;
    margin: 0.3rem 0;
  }
  .van-switch {
    position: absolute;
    right: 0.8rem;
    margin: 0.3rem 0;
  }
  .van-nav-bar {
    background-color: #3190e8;
    margin-bottom: 1rem;
  }
  .van-nav-bar__title {
    color: white;
  }
  :before{
    color: white;
    text-align: center;
  }
  .p{
    color: red;
    font-size: 0.5rem;
    margin: 0.5rem 0.3rem;
  }
  .van-button{
    width: 90%;
    /*text-align: center;*/
    /*height: 1.5rem;*/
    margin-left: 5%;

  }

  p{
    font-size: 0.3rem;
  }
  .pp{
    color: blue;
  }
  .two_s1{
    position: absolute;
    right: 3rem;
    top:6.8rem
  }
  .two_s2{
    position: absolute;
    right: 1rem;
    top:6.8rem;
  }
</style>
