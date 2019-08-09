<template>
    <div class="reset_c">
      <div class="s-header clear">
        <i class="iconfont txtQ_c" @click="btnLogoA_c">&#xe606;</i>
        <span>重置密码</span>
      </div>
      <div class="box_c">
        <input type="text" placeholder="账号" v-model="nameA_c">
        <input type="text" placeholder="旧密码" v-model="oldPasswordA_c">
        <input type="password" placeholder="请输入新密码" v-model="newPasswordA_c">
        <input type="password" placeholder="请输入新密码" v-model="newPasswordB_c">
        <input type="text" placeholder="验证码" v-model="verificationA_c">
        <span class="two_c1">
               <img :src="picture" style="display: inline-block;">
            </span>
        <span @click="postPic" class="two_c2">
               <p > 看不清</p>
               <p class="pp">换一张</p>
            </span>
      </div>
      <div class="button_c">
      <button class="btnConfirm_c" @click="btnAmend_c">确认修改</button>
      </div>
      <transition name="fade" enter-active-class="animated bounceIn"
                  :duration="400">
      <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
      </transition>
    </div>
</template>

<script>
  import {yzmjmx, amend_c} from "../serivice/api"
  import Pop_c from "../components/Cpm_c/Pop_c"
    export default {
        name: "resetPassword_c",
      components: {Pop_c},
      data(){
          return {
            picture:"",
            nameA_c:"",
            oldPasswordA_c:"",
            newPasswordA_c:"",
            newPasswordB_c:"",
            verificationA_c:"",
            show: false,
            popKuang:"",
          }
      },
      methods:{
        postPic() {
          yzmjmx().then((result) => {
            this.picture = result.code
          })
        },
        btnLogoA_c(){
          this.$router.go(-1);
        },
        btnAmend_c(){
          this.postPic();
          if(this.nameA_c==""){
            this.show=true;
            this.popKuang="请输入正确的账号"
            return;
          }
          if(this.newPasswordA_c==""){
            this.show=true;
            this.popKuang="请输入新密码"
            return;
          }
          if(this.newPasswordB_c==""){
            this.show=true,
              this.popKuang="请输入确认密码"
            return;
          }
          if(this.verificationA_c==""){
            this.show=true,
              this.popKuang="请输验证码"
            return;
          }

          amend_c({username:this.nameA_c,oldpassWord:this.oldPasswordA_c,newpassword:this.newPasswordA_c,confirmpassword:this.newPasswordB_c,captcha_code:this.verificationA_c}).then((result)=>{
            console.log(result);
            //验证码判断
            if(result.type == "ERROR_CAPTCHA"){
              this.show = true;
              this.popKuang = "验证码不正确"
            }
            //修改成功
            if(result.status == 1){
              this.show = true;
              this.popKuang = "密码修改成功"
            }
            //新密码判断
            if(result.type == "ERROR_QUERY"){
              this.show = true;
              this.popKuang = "两次输入的密码不一致"
            }
            //确认密码判断
            //旧密码判断
            if(this.oldPasswordA_c==""){
              this.show=true;
              this.popKuang="请输入旧密码"
            }
            if(result.type == "ERROR_PASSWORD"){
              this.show=true;
              this.popKuang="密码不正确"
            }
            //用户名判断
            if(result.type == "USER_NOT_FOUND"){
              this.show=true,
                this.popKuang="未找到当前用户"
            }
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
      },
    }
</script>

<style scoped lang="less">
  .reset_c {
    position: relative;
    .s-header {
      background-color: #3190e8;
      width: 100%;
      height: 1.95rem;
      color: white;
      font-size: 0.8rem;
      line-height: 1.95rem;
      text-align: center;
      span {
        margin-right: 1.1rem;
      }
    }
    .box_c {
      margin-top: 0.6rem;
      input {
        width: 100%;
        padding: 0 0.6rem;
        font-size: 0.7rem;
        height: 2rem;
        border: 1px solid #f1f1f1;
      }
      p{
        font-size: 0.3rem;
      }
      .pp{
        color: rgb(59,149,233);
      }
      .two_c1 {
        position: absolute;
        right: 3rem;
        top: 10.9rem
      }
      .two_c2 {
        position: absolute;
        right: 1rem;
        top: 10.9rem;
      }
    }
    .button_c {
      padding: 0.5rem;
      margin-top: 0.4rem;
      .btnConfirm_c {
        width: 99%;
        padding: 0.5rem;
        font-size: 0.7rem;
        color: white;
        border-radius:0.2rem;
        text-align: center;
        background: rgb(76, 217, 100);
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
    .txtQ_c {
      float: left;
      margin-left: 0.5rem;
    }

  }
</style>
