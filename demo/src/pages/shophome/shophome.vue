<template>
    <div class="s-shop-home">
        <carousel :list="getcarousellist"></carousel>
    </div>
</template>

<script>
    import carousel from "./children/carousel";
    import {getEntryList} from "../../serivice/api"
    export default {
        name: "shophome",
      components: {carousel},
      data(){
           return{
             getcarousellist:[],
           }
      },
      mounted() {

         // this.getInitData();
        getEntryList().then((response)=>{
          this.getcarousellist=response;

        })

      },
      methods:{
          // 加载页面获取食品分类列表
        //  getInitData(){
        //    console.log(1);
        //    getEntryList().then((response)=>{
        //      console.log(response);
        //    })
        // }
      }

    }
</script>

<style scoped>

</style>
