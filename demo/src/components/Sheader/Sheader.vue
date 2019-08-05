<template>



    <div class="s-header clear">
       <div class="right">
          <router-link :to="{}">登录</router-link>|<router-link :to="{}">注册</router-link>
       </div>
       <slot name="changecity"></slot>
    </div>
</template>

<script>
    export default {
        name: "Sheader",
    }
</script>

<style scoped lang="less">

 .s-header{

   background-color: #3190e8;
   position: fixed;
   z-index: 100;
   left: 0;
   top: 0;
   width: 100%;
   height: 1.95rem;
   padding: 0 0.75rem;
   font-size: 0.65rem;
   .right{
     line-height: 1.95rem;
     color: white;

     a{
       color: white;
     }
   }
 }
</style>
