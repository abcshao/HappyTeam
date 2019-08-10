<template>
  <!--推荐有奖组件-->
  <div class="commend">
    <!--导航栏-->
    <van-nav-bar
      title="推荐有奖"
      left-text=" "
      arrow-left
      left-arrow
      @click-left="onClickLeft"
    />

    <img src="http://cangdu.org/elm/static/img/activity.png" alt="" class="bigImag">

    <!--微信 qq 面对面邀请-->
    <div class="invite">
      <div>
        <img :src="weixin" alt="">
        <p>邀请微信好友</p>
      </div>
      <div>
        <img :src="qq" alt="">
        <p>邀请QQ好友</p>
      </div>
      <div>
        <img :src="mdm" alt="">
        <p>面对面邀请</p>
      </div>
    </div>


    <!--累计收益 和 成功邀请-->
    <div class="win clearfix">
      <div>
        <p>累计收益</p>
        <p><b class="Fred">0</b>元</p>
      </div>
      <div>
        <p>成功邀请</p>
        <p><b>0</b>人</p>
      </div>
    </div>

    <!--收益明细-->
    <p class="detail">-收益明细-</p>
    <div class="lhb">
      <img :src=lhb alt="" >
      <p>还不赶紧去邀请好友</p>
    </div>

  </div>
</template>

<script>
  const weixin=require ("../../../../src/assets/img/weixin.png");
  const qq=require ("../../../../src/assets/img/qq.png");
  const mdm=require ("../../../../src/assets/img/mdm.png");
  const lhb=require ("../../../../src/assets/img/Lhb.png");
  export default {
    name: "commend",
    data(){
      return{
        weixin,
        qq,
        mdm,
        lhb
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped lang="less">
  /*导航栏*/
  .van-nav-bar{
    background: #3190e8;
    color: white;

    :before{
      color: white;
      height: 0.2344rem;
      font-size: 0.25rem;
      font-weight:200;
      margin-left: -0.1rem;
      margin-top: -0.1rem;
    }
    span,div{
      color: white;
    }
    div{
      font-weight: 800;
      font-size: 0.1875rem;
    }
  }
  /*大图*/
  .bigImag{
    width: 100%;
  }

  /*qq微信邀请*/

  .invite{
    font-size: 0.0234375rem;
    padding: 0.234375rem 0;
    box-sizing: border-box;
    background: white;
    text-align: center;
    margin-top: 0.05rem;

    div{
      width: 1.23rem;
      height: 0.802rem;
      background: white;
      display: inline-block;

      img{
        width: 0.59rem;
      }
      p{
        font-size: 0.117188rem;
        margin-top: 0.06rem;
      }
    }
  }
  /*累计收益*/
  .win{
    text-align: center;
    margin-top: 0.23438rem;
    >div:nth-child(1){
      border-right: 0.5px solid #e4e4e4;
    }
    div{
      width: 1.87rem;
      height: 0.3766rem;
      display: inline-block;
      /*background: papayawhip;*/
      float: left;
      font-size: 0.117188rem;
      color: #666666;
      >p:nth-child(1),>p:nth-child(3){
        line-height: 0.152rem;
      }
      >p:nth-child(2),>p:nth-child(4){
        line-height: 0.224rem;

        b{
          font-size: 0.1875rem;
          font-weight: 700;
        }
      }
    }
  }
  .Fred{
    color: red;
  }
  /*收益明细*/
  .detail{
    color: #666666;
    font-size: 0.117188rem;
    margin-top: 0.23438rem;
    text-align: center;

  }
  .lhb{
    margin-top: 0.23438rem;
    text-align: center;
    color: #999999;
    font-size: 0.117188rem;
    img{
      width: 0.3046rem;
      margin-bottom: 0.08rem;

    }
  }

</style>
