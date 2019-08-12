<template>
  <!--弹出框-->
  <transition name="fade" enter-active-class="animated bounceIn "
              :duration="500">
    <div class="MyAlter"v-if="show">
      <svg t="1564970482842" class="icon AT" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2031" width="70" height="70"><path d="M508.8 44.8c-256 0-464 208-464 464s208 464 464 464 464-208 464-464-208-464-464-464z m0 880c-230.4 0-416-185.6-416-416s185.6-416 416-416 416 185.6 416 416-185.6 416-416 416z" fill="#F8CB86" p-id="2032"></path><path d="M521.6 652.8c12.8 0 22.4-9.6 22.4-22.4V201.6c0-12.8-9.6-22.4-22.4-22.4-12.8 0-22.4 9.6-22.4 22.4v428.8c-3.2 9.6 9.6 22.4 22.4 22.4zM486.4 748.8a1.1 1.1 0 1 0 70.4 0 1.1 1.1 0 1 0-70.4 0z" fill="#F8CB86" p-id="2033"></path></svg>

      <p>{{popKuang}}</p>
      <div @click="yes">确认</div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "Pop_c",
        props:["popKuang"],
        data(){
          return {
            show:true,
          }
        },
      methods:{
        yes(){
          this.show= !this.show;
          this.$parent.btntxt_c(this.show)
        },
      }
    }
</script>

<style scoped lang="less">
  /*弹出提示框*/
  .MyAlter{
    width: 12.1rem;
    line-height: 40%;
    background: white;
    position: absolute;
    top:8rem;
    border-radius: 0.2rem;
    left: 1.86rem;
    box-sizing: border-box;
    padding-top: 0.14rem;
    text-align: center;
  /*提示图片*/
  .AT{
    width: 3.2rem;
    margin-top: 0.7rem;
  }
  /*请输入正确的账号*/
  p{
    margin-top: 0.9rem;
    font-size: 0.7rem;
  }
  /*确认*/
  div{
    background: rgb(76, 217, 100);
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    margin-top: 0.8rem;
    height: 1.7rem;
    line-height: 1.7rem;
    box-sizing: border-box;
    border-radius: 0 0 0.2rem 0.2rem;
  }
  }
</style>
