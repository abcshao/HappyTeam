<template>
    <div class="denglu">
      <!--头部-->
      <van-nav-bar
        title="密码登录"
        left-arrow
      />

      <van-cell-group>

        <!--用户名框-->
        <van-field  placeholder="请输入用户名" />
      <!--密码框-->
        <section class="one">
          <span >
            <input :type="checked ? show1:show2" placeholder="请输入密码" style="font-size: 0.64rem; color: rgb(150,151,145); padding-left: 0.7rem">
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
        <van-field placeholder="验证码"></van-field>

      </van-cell-group>

      <p>温馨提示：未注册过的账户，登录时将自动注册</p>
      <p>注册过的用户可凭账户密码登录</p>

      <!--登录按钮-->
      <van-button slot="button" size="small" type="primary">登录</van-button>
    </div>
</template>

<script>
    export default {
        name: "denglujmx",
      data(){
          return{
            checked:"false",
            show1:'password',
            show2:'text',
          }
      }
    }
</script>

<style scoped>

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
  }
  .van-nav-bar__title {
    color: white;
  }
  :before{
    color: white;
  }
p{
  color: red;
  font-size: 0.5rem;
  margin: 0.5rem 0.3rem;
}
  .van-button{
    width: 80%;
    text-align: center;
  }
</style>
