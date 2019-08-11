<template>
    <div class="s-footer">
      <ul class="s-footer-ul clear">
               <router-link :to="{path:'msite',query:{geohash:'geohash'}}">
                 <li class="s-footer-li left">
                 <h4><i class="iconfont">&#xe603;</i></h4>
                 <p>外卖</p>
               </li>
               </router-link>
               <router-link to="/">
               <li class="s-footer-li left">
                 <h4><i class="iconfont">&#xe60a;</i></h4>
                 <p>搜索</p>
               </li>
               </router-link>
               <router-link to="/">
               <li class="s-footer-li left">
                 <h4><i class="iconfont">&#xe602;</i></h4>
                 <p>订单</p>
               </li>
               </router-link>
               <router-link to="/shopname">
               <li class="s-footer-li left">
                 <h4><i class="iconfont">&#xe601;</i></h4>
                 <p>我的</p>
               </li>
               </router-link>
             </ul>

    </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "Sfooter",
        data(){
            return {

            }
        },

      computed:{
          ...mapState(['geohash']),

      }
    }
</script>

<style scoped lang="less">
  .s-footer{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding: 0.4rem 0;
    display: -ms-flexbox;
    display: flex;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    text-align: center;
    font-size: 0.5rem;
    .s-footer-ul{
      width: 100%;
      a{
        color: #666666;
        li{
          width: 25%;
          box-sizing: border-box;
        }
      }
    }
  }
  .router-link-active h4{
    color:#3190e8;
  }
</style>
