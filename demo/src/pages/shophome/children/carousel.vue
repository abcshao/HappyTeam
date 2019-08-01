<template>
  <van-swipe :autoplay="0" indicator-color="white">

    <van-swipe-item >
      <ul>
        <li  v-for="(item,index) in listone" :key="index">
          <router-link :to="{}">
            <img :src="item.image_url" alt="">

          </router-link>
        </li>
      </ul>
    </van-swipe-item>
    <van-swipe-item>
      <ul>
        <li  v-for="(item,index) in listtwo" :key="index">{{item.title}}</li>
      </ul>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
    export default {
        name: "carousel",
        props:['list'],

      computed:{

          //把数据一分8
          listone(){
            console.log(this.list);
           return  this.list.slice(0,7);
          },
        //把数据一分8
          listtwo(){
             return this.list.slice(8,15);
          }
      }
    }
</script>

<style scoped>

</style>
