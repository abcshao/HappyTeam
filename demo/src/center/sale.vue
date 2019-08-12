<template>
    <div class="sale">
      <van-nav-bar
        title="我的优惠"
        left-text=" "
        arrow-left
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="div1">
        <div class="div2">
          <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
            购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
            注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
        </div>

        <div class="div3">
          <h3>Q1: 特权介绍</h3>
          <ul>
            <li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
            <li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
            <li>更多特权，敬请期待！</li>
          </ul>
        </div>


        <div class="div3">
          <h3>Q2: 资费介绍</h3>
          <ul>
            <li>饿了么会员卡：20元</li>
          </ul>
        </div>

        <div class="div3">
          <h3>Q3: 使用说明</h3>
          <ul>
            <li>当用户满足以下任一条件，会员服务自动失效：</li>
          </ul>
          <ul>
            <li>自绑定之日起超过31天；</li>
            <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
          </ul>
        </div>

        <div class="div3">
          <h3>Q4: 购卡说明</h3>
          <ul>
            <li>在线购买：饿了么App>我的>饿了么会员卡</li>
          </ul>
        </div>

        <div class="div3">
          <h3>Q5: 温馨提示</h3>
          <ul>
            <li>用户在当前会员服务失效前，无法购买新卡。</li>
            <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
          </ul>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "sale",
    methods:{
      onClickLeft(){
        this.$router.go(-1);
      }
    },
    }
</script>

<style scoped lang="less">
  .van-nav-bar {
    background-color: #3190e8;
    position: fixed;
    width: 100%;
  }
  .van-nav-bar__title {
    color: white;
    font-weight: 400;
  }
  :before{
    color: white;
    text-align: center;
  }
  .div1{
    color: #333;
    font-weight: 400;
    padding: 2.5rem 0.5rem;

  }
  p{
    margin: 0 3rem;
    font-size: 0.5rem;
  }
  h3{
    margin-top: .666667rem;
    margin-bottom: .2rem;
    font-size: .7rem;
    font-weight: 600;
    color: #333;
  }
  li{
    color: #666;
    margin-bottom: .2rem;
    font-size: 0.5rem;
  }
</style>
