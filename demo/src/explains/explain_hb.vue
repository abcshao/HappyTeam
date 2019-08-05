
<template>
  <div class="explain">
    <van-nav-bar
      title="红包说明"
      left-arrow
      @click-left="onClickLeft"
    />
    <h3>Q1: 怎么获得红包？</h3>
    <p>通过邀请好友获得</p>
    <p>在下单返红包的商家下单获得</p>
    <p>抢微信朋友分享的红包获得</p>

    <h3>Q2: 红包可以做什么？</h3>
    <p>可以抵扣在线支付时的实际支付金额。</p>

    <h3>Q3: 红包的门槛金额按照什么金额计算？</h3>
    <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>

    <h3>Q4: 一个红包能拆开多次使用吗？</h3>
    <p>不能，一个红包只能一次性使用，不能分开使用。</p>

    <h3>Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3>
    <p>会的，订单无效后红包会自动返还到您的账户里。</p>
    <h3>Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
    <p>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
  </div>
</template>

<script>
  export default {
    name: "explain_hb",
    methods:{
      onClickLeft(){
        this.$router.go(-1);
      }
    }
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
  .explain{
    background: white;
    height: 100%;
  }
  h3{
    padding: .5rem;
    font-size: .7rem;
    color: #333;
  }
  p{
    /*padding-top: .1rem;*/
    /*padding-bottom: .1rem;*/
    padding-left: .5rem;
    font-size: .6rem;
    color: #666;
    line-height: 1rem;
  }
</style>



