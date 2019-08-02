<template>
  <!--<div class="screenA_c" v-if=screenB_c>-->
  <div>
    <p>配送方式</p>
    <ul>
      <li><i class="iconfont">&#xe632;</i><span>蜂鸟专送</span></li>
    </ul>
    <p>商家属性( 可以多选 )</p>
    <ul class="property_c">
      <li><span class="txtA_c">品</span><span>品牌商家</span></li>
      <li><span class="txtB_c">保</span><span>外卖保</span></li>
      <li><span class="txtA_c">准</span><span>准时达</span></li>
      <li><span class="txtC_c">新</span><span>新店</span></li>
      <li><span class="txtC_c">付</span><span>在线支付</span></li>
      <li><span class="txtB_c">票</span><span>开发票</span></li>
      <div class="empty"></div>
    </ul>
    <div class="bottomA_c">
      <button class="btnEmpty_c">清空</button>
      <button class="btnConfirm_c">确定</button>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
    export default {
        name: "Screen_c",
    }
</script>

<style scoped lang="less">
  p {
    text-align: left;
    margin-left: 0.4rem;
  }
  ul {
    width: 100%;
  li {
    text-align: left;
    border: 1px solid silver;
    width: 4.8rem;
    margin-left: 0.4rem;
    margin-bottom: 0.3rem;
    border-radius: 0.1rem;
  i {
    margin-left: 0.2rem;
    color: rgb(0,137,207);
  }
  span {
    margin-left: 0.2rem;
  }
  }
  }
  .property_c {
  li {
    float: left;
  span:nth-child(1){
    padding: 0 0.1rem;
    border-radius: 0.2rem;
  }
  .txtA_c {
    color: rgb(63,135,280);
    border: 1px solid rgb(63, 189, 230);
  }
  .txtB_c {
    color: rgb(153, 153, 153);
    border: 1px solid rgb(153, 153, 153);
  }
  .txtC_c {
    color: rgb(232, 132, 45);
    border: 1px solid rgb(232, 132, 45);
  }
  }
  }
  .bottomA_c {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    margin-top: 0.37rem;
    background:rgb(241,241,241);
    text-align: left;
  .btnEmpty_c {
    width: 46%;
    background: white;
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
  }
  .btnConfirm_c {
    width: 45%;
    background: rgb(86,209,118);
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
  }
  }
  .empty {
    clear: both;
  }
</style>
