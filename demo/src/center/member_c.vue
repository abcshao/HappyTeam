<template>
    <div class="member">
      <div class="s-header clear">
        <i class="iconfont txtQ_c" @click="btnReturnQ_c">&#xe606;</i>
        <span>兑换会员</span>
      </div>
      <p class="textA_c">成功兑换后将关联到当前账号 : <span>{{userinfo.username}}</span></p>
      <form action="">
        <input type="text" placeholder="请输入10位卡号" v-model="exchangecode" maxlength="10">
        <input type="text" placeholder="请输入6位卡密" v-model="captchacode" maxlength="6">
      </form>
      <div class="btnAffirmP_C" @click="btnAffirmL_c" :class="{btnAffirmP_C1:cheack1}">兑换</div>
      <div class="footer_c">
        <h3>——温馨提示——</h3>
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡 : 30次减免配送费</p>
        <p>季卡 : 90次减免配送费</p>
        <p>年卡 : 360次减免配送费</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </div>
      <transition name="fade" enter-active-class="animated bounceIn"
                  :duration="400">
        <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
      </transition>
    </div>
</template>

<script>
  import Pop_c from "../components/Cpm_c/Pop_c"
  import {mapActions,mapState} from "vuex"
    export default {
        name: "member_c",
      components:{Pop_c},
      data(){
          return{
            exchangecode:"",
            captchacode:"",
            show:false,
            popKuang:"",
            cheack1:false,
          }
      },
        methods:{
          ...mapActions(['SET_USER_INFO']),
          btntxt_c(show){
            this.show = show;
          },
          btnReturnQ_c(){
            this.$router.go(-1);
          },
          btnAffirmL_c(){
            if(this.exchangecode.length!=10 && this.captchacode.length!=6){
              this.show = true;
              this.popKuang = "无效的卡号";
              return;
            }else {
              this.show = true;
              this.popKuang = "无效的卡号";
              return;
            }
          }
        },
      watch:{
        exchangecode(){
          if(this.exchangecode.length==10 && this.captchacode.length==6){
            this.cheack1=true;
          }else{
            this.cheack1=false;
          }
        },
        captchacode(){
          if(this.exchangecode.length==10 && this.captchacode.length==6){
            console.log(1);
            this.cheack1=true;
          }else{
            this.cheack1=false;
          }
        }

      },
      computed:{
        ...mapState(['userinfo']),
      },
    }
</script>

<style scoped lang="less">
.member {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #333;
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
  margin-left: 0.4rem;
}
span {
  margin-right: 0.5rem;
  font-weight: bold;
}
}
  .textA_c {
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
    span {
      font-weight: 700;
    }
  }
  form {
    width: 100%;
    input {
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: 2rem;
      font-size: .65rem;
      color: #999;
      padding-left: .7rem;
    }
  }
  .btnAffirmP_C {
    width: 91%;
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    margin: 0.7rem auto;
    font-weight: 700;
    border-radius: .2rem;

  }
  .btnAffirmP_C1 {
    width: 91%;
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    margin: 0.7rem auto;
    font-weight: 700;
    border-radius: .2rem;

  }
  .footer_c {
    text-align: center;
    font-weight: 400;
    font-size: .65rem;
    color: #aaa;
    margin-bottom: .6rem;
    p {
      text-align: left;
      font-size: .5rem;
      margin-left: 2rem;
      line-height: .8rem;
    }
  }
}
</style>
