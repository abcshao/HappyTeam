<template>
    <div class="member">
      <van-nav-bar
        title="会员中心"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="all">
        <p class="p">为账户
        <span class="span">123456</span>
          购买会员
        </p>
        <div class="vip">
          <router-link :to="{}">
            <span class="span1">会员特权</span>
            <span class="span2">会员说明<i class="iconfont">&#xe714;</i></span>
          </router-link>
          <div class="center">
            <img src="../imags/e72f0e5a3d4d2cbb3a53b316019c96e.png" alt="" class="img">
            <div class="div1">
              <h4>减免配送费</h4>
              <p class="p1">每月减免30单，每日可减免3单，每单最高减4元</p>
              <p class="p1">蜂鸟专送专享</p>
            </div>

          </div>


          <div class="center">
            <img src="../imags/58a495e68c5e3348e6bcb82580f244d.png" alt="" class="img">
            <div class="div1">
              <h4>减免配送费</h4>
              <p class="p1">每月减免30单，每日可减免3单，每单最高减4元</p>
              <p class="p1">蜂鸟专送专享</p>
            </div>

          </div>

        </div>

        <!--开通会员-->
        <div class="open">
          <div class="open1">开通会员</div>
          <div class="open2">
            <div class="open3">
              <span class="span3">一个月</span>
              <span class="span4">￥20</span>
            </div>
            <router-link :to="{path:'/countdown'}">
              <div class="open4" >购买</div>
            </router-link>

          </div>
        </div>
        <div class="bottom">
          <router-link :to="{}">
            <span class="span1">兑换会员</span>
            <span class="span2">使用卡号卡密<i class="iconfont">&#xe714;</i></span>
          </router-link>
        </div>

        <div class="bottom">
          <router-link :to="{}">
            <span class="span1">购买记录</span>
            <span class="span2">开发票<i class="iconfont">&#xe714;</i></span>
          </router-link>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "member",
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
      },
    }
</script>

<style scoped>
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
  .p{
    font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
  }
  .span{
   color: #333;
    font-weight: 700;
  }
  .vip{
    background: white;
    padding-left: .7rem;
    margin-bottom: .5rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }
  .span1{
    font-size: .7rem;
    color: #333;
  }
    .span2{
      float: right;
      font-size: .6rem;
      color: #999;
      margin-right: .2rem;
      margin-top: 0.1rem;
    }
  .center{
    border-top: 1px solid #f5f5f5;
    padding: .8rem 0;
    position: relative;
  }
  .img{
    width: 1.6rem;
    margin-right: .6rem;
  }
h4{
  font-size: .7rem;
  color: #333;
  font-weight: 400;
  line-height: 0.8rem;
}
.p1{
  font-size: .5rem;
  color: #999;
  line-height: 0.6rem;
}
  .div1{
    padding: 0;
    margin: 0;
    position: absolute;
    left: 2.2rem;
    top: 0.9rem;
  }
  .open{
    background: white;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }
  .open1{
    font-size: .7rem;
    color: #333;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }
  .open2{
    padding-right: .7rem;
    font-size: .7rem;
    line-height: 2.6rem;
    position: relative;
  }
  .open3{
    color: #333;
    font-weight: 400;

  }
  .open4{
    border: .025rem solid #f60;
    border-radius: .2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: .6rem;
    color: #f60;
    position: absolute;
    right: 0.7rem;
    top: .6rem;

  }
  .span4{
    font-weight: 700;
    color: #f60;
  }
  .bottom{
    background: white;
    padding-left: .7rem;
    margin-bottom: .5rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }
</style>
