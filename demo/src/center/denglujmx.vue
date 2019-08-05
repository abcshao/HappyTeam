<<<<<<< HEAD
=======
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
        <van-field  placeholder="账号" v-model="landingA_c"/>
      <!--密码框-->
        <section class="one">
          <span >
            <input :type="checked ? 'text':'password'" placeholder="密码" style="font-size: 0.64rem; color: rgb(150,151,145); padding-left: 0.7rem" v-model="passwordA_c">
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
             <van-field placeholder="验证码" v-model="verifyA_c"></van-field>
          </span>
        </section>


      </van-cell-group>

      <p class="p">温馨提示：未注册过的账户，登录时将自动注册</p>
      <p class="p">注册过的用户可凭账户密码登录</p>
      <!--登录按钮-->
      <!--<router-link :to="{path:'/minejmx'}">-->
        <van-button type="primary" size="large" @click="postLanding_c">登录</van-button>

      <!--</router-link>-->


      <span class="two_s1">
               <img :src="picture" style="display: inline-block;">
            </span>
      <span @click="postPic" class="two_s2">
               <p > 看不清</p>
               <p class="pp">换一张</p>
            </span>
      <router-link :to="{path:'/Reset'}">重置密码 ?</router-link>
      <div class="empty"></div>
      <transition name="fade" enter-active-class="animated bounceIn"
                  :duration="400">
        <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
      </transition>
    </div>
</template>

<script>
  import {yzmjmx, landing_c} from "../serivice/api"
  import Pop_c from "../components/Cpm_c/Pop_c"
    export default {
        name: "denglujmx",
      components: {Pop_c},
      data(){
          return{
            //登录名
            landingA_c:"",
            passwordA_c:"",
            verifyA_c:'',
            checked:false,
          //  获取提取到的验证码图片信息
            picture:"",
            show: false,
            popKuang:"",
          }

      },
      methods:{
        postPic(){
          yzmjmx().then((result)=>{
            this.picture=result.code
          })
        },
        onClickLeft(){
          this.$router.go(-1);
        },
        postLanding_c(){
          //判断用户名是否为空
          if(this.landingA_c == ""){
            this.show = true;
            this.popKuang = "请输入手机号/邮箱/用户名";
            return;
          }
          // 判断密码是否为空
          if(this.passwordA_c == ""){
            this.show = true;
            this.popKuang = "请输入密码";
            return;
          }
          //判断验证码输入是否为空
          if(this.verifyA_c == ""){
            this.show = true;
            this.popKuang = "请输入验证码";
            return;
          }
          landing_c({username:this.landingA_c,password:this.passwordA_c,captcha_code:this.verifyA_c}).then((result)=>{

            //判断密码是否错误
            if(result.type == "ERROR_PASSWORD"){
              this.show = true;
              this.popKuang = "密码错误";
            }

            //判断验证码是否正确
            if(result.type=="ERROR_CAPTCHA"){
              this.postPic();
              this.show = true;
              this.popKuang = "验证码不正确";
            }
            console.log(result);
          }).catch((error)=>{
            console.log(error);
          })

        },
        btntxt_c(show){
          this.show = show;
        }
      },
      mounted(){
        yzmjmx().then((result)=>{
          this.picture=result.code
        })
      }
    }

</script>

<style scoped>
.denglu{
position: relative;
}
  a {
    color: rgb(59,149,233);
    font-size: 0.6rem;
    float: right;
    margin-top: 0.7rem;
    margin-right: 0.5rem;
  }
  .tex{
    font-size: 0.6rem;
  }
  .one{
    padding: 0.26rem 0;
    border-bottom: 1px solid rgb(241,241,241);
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
    margin-bottom: 0.6rem;
  }
  .van-nav-bar__title {
    color: white;
    font-size: 0.8rem;
  }
  :before{
    color: white;
    text-align: center;
    font-size: 0.6rem;
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
    color: rgb(59,149,233);
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
  .empty {
    clear: both;
  }

</style>
>>>>>>> 73e11ccb43a14b9237de04fb271ccb1afa04aef4
