<template>
  <van-swipe :autoplay="0" >
   <!--  数据重新进行 解析  可以是 一个数组中有两条大的数组，一条中含有8条数据-->
    <van-swipe-item >
      <ul class="s-one-goods clear">
        <li v-for="(item,index) in listone" :key="index" class="left">
          <router-link :to="{path:'/filtrate',query:{geohash:geohash,title:item.title,restaurant_category_id:item.id}}">
            <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
             <h3>{{item.title}}   </h3>
          </router-link>
        </li>
      </ul>
    </van-swipe-item>
    <van-swipe-item>
      <ul class="s-one-goods clear">
        <li v-for="(item,index) in listtwo" :key="index" class="left">
          <router-link  :to="{path:'/filtrate',query:{geohash:geohash,title:item.title,restaurant_category_id:item.id}}">
            <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
            <h3>{{item.title}}</h3>
          </router-link>
        </li>
      </ul>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
    export default {
        name: "carousel",
        props:['list','geohash'],
      computed:{
          //把数据一分8
          listone(){
            return  this.list.slice(0,8);
          },
        //把数据一分8
          listtwo(){
             return this.list.slice(8,16);
          }
          // 数据解析
      }
    }
</script>

<style scoped lang="less">
 .s-one-goods{
   background-color: white;
   li{
     width: 25%;
     box-sizing: border-box;
     a{
       width: 100%;
       display: inline-block;
       box-sizing: border-box;
       text-align: center;
       padding: 0.5rem 0;
       img{
         width: 50%;
       }
       h3{
         color: #000;
         font-size: 0.5rem;
         text-align: center;
       }
     }
   }

 }

</style>
