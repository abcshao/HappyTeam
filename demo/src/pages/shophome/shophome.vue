<template>

     <div>
       <div class="s-header">
        <div class="search left" slot="search">
          <router-link to="/" class="el-icon-search"> </router-link>
        </div>
        <div class="title left ellipsis">
          <router-link to="/"> <span>{{localaddress}}</span></router-link>
        </div>
         <div class="right">
           <router-link :to="{path:'/dl'}">
         <span>
        <i class="iconfont">&#xe607;</i>
      </span>
           </router-link>
         </div>
       </div>
    <div class="s-shop-home" style="margin-top: 1.8rem">
        <carousel :list="getcarousellist" :geohash="geohash"></carousel>
      <div class="shop_list_container">
           <header class="shop_header">
             <i class="el-icon-s-shop" ></i>
               附近商家
           </header>
          <shoplist v-if="hasGetData" :geohash="geohash"></shoplist>
      </div>
    </div>
       <Sfooter></Sfooter>
     </div>
</template>

<script>
    import carousel from "./children/carousel";
    import {getEntryList,pois} from "../../serivice/api";
    import Sheader from "../../components/Sheader/Sheader";
    import shoplist from "./children/shoplist"
    import Sfooter from "../../components/Sfooter/Sfooter";
    export default {
      name: "shophome",

      components: {Sfooter, carousel,Sheader,shoplist},
      data(){
           return{
             getcarousellist:[],
             latitude: "",
             longitude: "",//获取经纬度详细定位
             localaddress:"",
             restaurantsList:[],//附近商品列表
             geohash:'',
             hasGetData:false,//判断地理位置是否有相关的数据，如果没有的话不显示附近的商铺
           }
      },
     async mounted() {

        //获取轮播图数据
       this.getcarousellist =await getEntryList();
        // 接收坐标数据
        this.geohash=this.$route.params.geohash;

         let location= this.$route.params.geohash.split(",");
        this.latitude=location[0];
        this.longitude=location[1];
        //根据经纬度坐标获取对应的地理位置  把获取的地址上传到头部
        var item =  await pois(location);
        this.localaddress=item.name;
        this.hasGetData=true;
      },
      methods:{
        // 获取商品列表
        // async getInitData(){
        //   //获取附近商家的信息
        //  var restaurantsList = await getrestaurants({latitude:this.latitude,longitude:this.longitude});
        //   console.log(restaurantsList)
        //
        // }
      }

    }
</script>

<style scoped lang="less">
  .iconfont{
    color: white;
    font-size: 1rem;
  }
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

  .search{
    width: 1rem;
    line-height: 1.95rem;
    .el-icon-search{
      color: white;
    }
  }
  .title{
    color: #000;
    width: 50%;
    line-height: 1.95rem;
    text-align: center;
    margin-left: 2rem;

    color: white;
    a{
      font-size: 0.75rem;
      color: white;
    }

  }
  .s-shop-home{
    .shop_list_container{
      margin-top: 0.7rem;

      background-color: white;
      .shop_header{
        color: #999999;
        font-size: .55rem;
        line-height: 1.75rem;
        .el-icon-s-shop{
          padding:0 .4rem

        }
      }



    }

  }

</style>
