<template>
    <div class="awardA_c">
      <div class="s-header clear">
        <i class="iconfont txtQ_c">&#xe606;</i>
        <span>推荐有奖</span>
      </div>
      <div >
        <img src="../images/activity.png" class="imgLogoA_c">
      </div>
      <div class="boxA_c">
        <div class="logoA_c" @click="btnTallA_c">
          <img src="../images/weixin.png">
          <p>邀请微信好友</p>
        </div>
        <div class="logoA_c" @click="btnTallA_c">
          <img src="../images/qq.png">
          <p>邀请QQ好友</p>
        </div>
        <div class="logoA_c" @click="btnTallA_c">
          <img src="../images/fenxiang.png">
          <p>面对面邀请</p>
        </div>
      </div>
      <div class="earnings_c">
        <div class="countA_c">
        <p>累计收益</p>
        <p><span>0</span><span>元</span></p>
      </div>
        <div class="countA_c countB_c">
          <p>成功邀请</p>
          <p><span>0</span><span>人</span></p>
        </div>
      </div>
      <p class="incomeA_c">-收益明细-</p>
      <div class="inviteA_c">
        <img src="../images/qianbao.png">
        <p>还不赶紧去邀请好友</p>
      </div>
      <transition name="fade" enter-active-class="animated bounceIn"
                  :duration="400">
        <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
      </transition>
    </div>
</template>

<script>
    import Pop_c from "../components/Cpm_c/Pop_c";
    export default {
        name: "awardA_c",
      components: {Pop_c},
      data(){
          return {
            show:false,
            popKuang:"",
          }
      },
      methods:{
        btntxt_c(show){
          this.show = show;
        },
        btnTallA_c(){
          this.show = true;
          this.popKuang = "请在饿了么APP中打开";
          return;
        }
      }
    }
</script>

<style scoped lang="less">
.awardA_c {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
  .imgLogoA_c {
    width: 100%;
  }
  .boxA_c {
    display: flex;
    padding: 1rem 0;
    background: #fff;
    .logoA_c {
      flex: 1;
      text-align: center;
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
      p {
        font-size: .5rem;
        color: #333;
      }
    }
  }
  .earnings_c {
    display: flex;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
    .countA_c {
      flex: 1;
      text-align: center;
    }
    .countB_c {
      border-left: .025rem solid #ddd;
    }
  }
  .incomeA_c {
    text-align: center;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
  }
  .inviteA_c {
    text-align: center;
    margin-top: 1rem;
    font-size: .5rem;
    color: #999;
    img {
      width: 30.5px;
    }
  }
}
</style>
