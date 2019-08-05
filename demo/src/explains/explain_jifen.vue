<template>
          <div class="explain">
            <van-nav-bar
              title="积分问题"
              left-arrow
              @click-left="onClickLeft"
            />
            <h3>Q1: 怎么获得积分？</h3>
            <p>在线支付的订单将获得订单积分奖励：</p>

            <h3>Q2: 积分用来做什么？</h3>
            <p>可以在积分商城兑换各种礼品。</p>

            <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
            <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
            <h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
            <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
          </div>
        </template>

        <script>
          export default {
            name: "explain_jifen",
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
