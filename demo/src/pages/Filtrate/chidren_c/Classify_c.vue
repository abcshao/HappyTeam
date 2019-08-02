<template>
  <div>
  <div class="leftA_c left">
    <ul>
      <li v-for="(pro, index) in shop" :key="index">{{pro}}</li>
    </ul>
  </div>
  <div class="rightA_c right">
    <ul>
      <li>香锅砂锅</li>
      <li>麻辣烫</li>
      <li>饺子混沌</li>
      <li>汉堡</li>
      <li>生煎锅贴</li>
      <li>黄焖鸡米饭</li>
      <li>烧腊饭</li>
      <li>煲仔饭</li>
      <li>咖喱饭</li>
      <li>咖喱饭</li>
      <li>咖喱饭</li>
    </ul>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Classify_c",
      data(){
          return {
            shop:["异国料理","快餐便当","小吃夜宵","果蔬生鲜","商店超市","烧烤"],
          }
      },
    }
</script>

<style scoped lang="less">
  .leftA_c {
    width: 50%;
    height: 20rem;
    line-height: 100%;
    background: cyan;
    overflow:auto;
  ul {
    height: 100%;
    line-height: 100%;
  li {
    height: 10%;
    line-height: 2rem;
  }
  }
  }
  .rightA_c {
    width: 50%;
    height: 20rem;
    line-height: 100%;
    background: white;
    overflow:auto;
    ul {
      height: 100%;
      line-height: 100%;
      li {
        height: 10%;
        line-height: 2rem;
      }
    }
  }
  .empty {
    clear: both;
  }
</style>
