<template>
<div>
    <ul>
      <li><i class="iconfont">&#xe68d;</i><p class="wireA_c">智能排序</p></li>
      <li><i class="iconfont">&#xe600;</i><p>距离最近</p></li>
      <li><i class="iconfont hotA_c">&#xe651;</i><p>销量最高</p></li>
      <li><i class="iconfont moneyA_c">&#xe604;</i><p>起送价最低</p></li>
      <li><i class="iconfont speedA_c">&#xe635;</i><p>配送速度最快</p></li>
      <li><i class="iconfont gradeA_c">&#xe69d;</i><p>评分最高</p></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Sork_c",
    }
</script>

<style scoped lang="less">
  .sorkA_c {
    width: 100%;
    height: 15rem;
    line-height: 100%;
    background: white;
    position: absolute;
    top: 2rem;
    left: 0;
    text-align: left;
  ul {
    height: 100%;
  li {
  i {
    margin-left:0.5rem;
    font-size: 0.8rem;
    color: rgb(68,167,216);
  }
  .hotA_c{
    color: rgb(243,141,141);
  }
  .moneyA_c {
    color: rgb(233,191,55);
  }
  .speedA_c {
    color: rgb(55,199,183);
  }
  .gradeA_c {
    color: rgb(242,199,132);
  }
  p {
    display: inline-block;
    width: 88%;
    font-size: 0.65rem;
    margin-left: 0.5rem;
    border-top: 1px solid silver;
  }
  .wireA_c {
    border: 0;
  }
  height: 16.7%;
  line-height: 2.5rem;

  }
  }
  }
  .empty {
    clear: both;
  }
</style>
