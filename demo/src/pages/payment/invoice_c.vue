<template>
    <div class="invoice">
      <div class="s-header clear">
        <i class="iconfont txtQ_c" @click="btnReturnC_c">&#xe606;</i>
        <span>选择发票抬头</span>
      </div>
      <div class="invoiceA_c clear">
        <span class="left">不需要开发票</span>
        <i class="iconfont textC_c right" :class="{'textB_c':active}" @click="selectSort_c">&#xe619;</i>
      </div>
      <div class="btnB_c" @click="btnQ_c">确定</div>
    </div>
</template>

<script>
    export default {
        name: "invoice_c",
        data(){
          return {
            active:false,
          }
        },
        methods:{
          btnReturnC_c(){
            this.$router.push({path:'/order'})
          },
          selectSort_c(){
            this.active = !this.active
          },
          btnQ_c(){
            this.$router.push({path:'/order'})
          }
        }
    }
</script>

<style scoped lang="less">
.invoice {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #333;
  .s-header {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    color: white;
    font-size: 0.8rem;
    line-height: 1.95rem;
    text-align: center;
    .txtQ_c {
      float: left;
      margin-left: 0.5rem;
    }
    span {
      margin-right: 0.4rem;
      font-weight: bold;
    }
  }
  .invoiceA_c {
    width: 100%;
    background: white;
    margin-top: 0.5rem;
    padding: 0 0.7rem;
    font-size: 0.75rem;
    height: 2.5rem;
    line-height: 2.5rem;
    span {
      color: #555;
    }
    .textC_c {
      color: white;
      background: #ccc;
      font-size: 0.5rem;
      border-radius: 50%;
      line-height: .9rem;
      margin-top:.8rem;
      width: .9rem;
      text-align: center;
    }
    .textB_c {
      background: #4cd964;
    }
  }
  .btnB_c {
    width: 90%;
    background: #4cd964;
    color: #fff;
    border-radius: 0.1rem;
    margin: 0.6rem auto;
    text-align: center;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.7rem;
  }
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
