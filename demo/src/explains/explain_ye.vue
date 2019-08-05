<template>
      <div class="explain">
        <van-nav-bar
          title="代金券说明"
          left-arrow
          @click-left="onClickLeft"
        />
        <h3>Q1: 什么是商家代金券？</h3>
        <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>

        <h3>Q2: 怎么获得商家代金券？</h3>
        <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
        <p>
          「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。
        </p>

        <h3>Q3: 商家代金券使用条件</h3>
        <p>商家代金券仅限在指定商家使用</p>
        <p>商家代金券仅限在线支付使用</p>
        <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>

        <h3>Q4:为什么会提现失败？</h3>
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
      </div>
    </template>

    <script>
      export default {
        name: "explain_ye",
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
