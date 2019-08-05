<template>
    <div class="indent">
      <van-nav-bar
        title="我的订单"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
</template>

<script>
    export default {
        name: "indent",
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
</style>
