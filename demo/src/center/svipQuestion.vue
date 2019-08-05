<template>
    <div class="svip">
      <div class="top">
        <span @click="onClickLeft"><i class="iconfont">&#xe606;</i></span>
        <span>{{getQuery1}}</span>
      </div>
      <p>{{getQuery2}}</p>
    </div>
</template>

<script>

    export default {
        name: "svipQuestion",
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
      },
      computed:{
        getQuery1(){
        return  this.$route.query.tit;
        },
        getQuery2(){
          return  this.$route.query.question;
        },
      },
    }
</script>

<style scoped>

.svip{
  background: white;
  height: 100%;
  /*margin-top: 1.9rem;*/
}
  .top{
    width: 100%;
    background-color: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 2rem;
    text-align: center;
    padding-left: 0.2rem;
  }
.top span{
  color: white;
  font-size: 1rem;
}
  .iconfont{
    float: left;
    font-size: .9rem;
    z-index: 10;
  }
  p{
    padding: 2rem 0.7rem 0.3rem 0.7rem;

  }
</style>
