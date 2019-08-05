
<template>

  <div class="option_c">
    <!--筛选组件-->
    <div class="s_all">
        <div class="s-header clear">
          <div class="arrow left">
            <i class="iconfont"  @click="$router.go(-1)">&#xe606;</i>
          </div>
          <div class="arrow-r left">
            <span class="center">{{title}}</span>
          </div>
        </div>
        <div class="foot_c left all_c" @click="btnScreen_c(1)">
          <span >{{newtitle}}</span>
            <span class="arrow " :class="{arrowrotate:classifyB_c==1}"><i class="iconfont">&#xe608;</i></span>
        </div>
      <transition name="fade" enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                  :duration="300">
        <div class="classifyA_c" v-show='classifyB_c==1'>
          <Classify :restaurant_category_list="restaurant_category_list"  :restaurant_category_id="restaurant_category_id"    v-if="restaurant_category_list.length>0"></Classify>
        </div>
      </transition>
        <div class="sork_c left all_c"  @click="btnScreen_c(2)">
          <span>排序</span>
          <span class="arrow" :class="{arrowrotate:classifyB_c==2}"><i class="iconfont">&#xe608;</i></span>
        </div>
      <transition name="fade" enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                  :duration="300">
          <div class="sorkA_c" v-show='classifyB_c==2'>
            <Sork></Sork>
          </div>
      </transition>

      <div class="screen_c left all_c"  @click="btnScreen_c(3)">
          <span>筛选</span>
          <span class="arrow" :class="{arrowrotate:classifyB_c==3}"><i class="iconfont">&#xe608;</i></span>
        </div>
      <transition name="fade" enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                  :duration="300">
      <div class="screenA_c" v-show='classifyB_c==3'>
        <Screen :activity_list="activity_list" :delivery_list="delivery_list"></Screen>
      </div>
      </transition>

    </div>
    <div class="shoplist">
      <shoplist
        :geohash="geohash"
        :restaurant_category_id="restaurant_category_id"
        :restaurant_category_ids="restaurant_categoryids"
        :orderbytype="orderbytype"
        :delivery_mode="delivery_mode"
        :support_ids="support_ids"
        :is_change="is_change"
      ></shoplist>
    </div>
  </div>

</template>

<script>
  import Classify from "../../pages/Filtrate/chidren_c/Classify_c";
  import Sork from "../../pages/Filtrate/chidren_c/Sork_c";
  import Screen from "../../pages/Filtrate/chidren_c/Screen_c";
  import Shoplist from "../shophome/children/shoplist";
  import {get_restaurant_category,get_delivery_modes,get_activity_attributes} from "../../serivice/api"
  import {mapActions,mapState} from "vuex"
    export default {
        name: "FootFiltrate",
        data(){
          return {
            classifyB_c:0,
            title:'',//获取标题
            geohash:'',//获取坐标
            restaurant_category_id:'',//商店类型id
            orderbytype:"",
            activity_list:[],//商家活动列表
            delivery_list:[],//获取配送方式类表
            restaurant_category_list:[], //店铺分类列表
            delivery_mode:null,//配送方式id
            support_ids:[],//餐馆支持特权的id
            is_change:0,//用于判断筛选时的数据,是否发生变化


          }
        },
        components: {Shoplist, Classify,Sork,Screen},
        methods:{
          ...mapActions(['SET_RESTAURANT_CATEGORY_IDS']),

          //获取子组件传来的排序方式
          getorderbytype(val){
            this.orderbytype=val;
          },
          //获取子元素传来的值
          getClassify(data,titlename){
               this.classifyB_c=data;
               this.title=titlename;
          },
          //获取子元素传来的值
          getSork(data){
            this.classifyB_c=data;
          },
          //获取子元素传来的值
          getScreen(delivery_mode,support_id){

            this.classifyB_c=0;
            this.delivery_mode=delivery_mode;
            this.support_ids=support_id;
            this.is_change++;
          },
          //导航条点击显示操作
          btnScreen_c(val){
            if(this.classifyB_c ==val){
              this.classifyB_c =0
            }else{
              this.classifyB_c =val
            }
          },

          //获取所有商铺分类列表
         async get_restaurant_category_list(){
            let restaurant_category_list = await get_restaurant_category({
              latitude:this.geohash.split(",")[0],
              longitude:this.geohash.split(",")[1],
            });
            this.restaurant_category_list=restaurant_category_list;
         },

          //获取商家活动类表
         async get_activity_list(){
                this.activity_list=await get_activity_attributes({
                  latitude:this.geohash.split(",")[0],
                  longitude:this.geohash.split(",")[1],
                });
         },
         //获取配送方式
          async get_delivery_list(){
                this.delivery_list=await get_delivery_modes({
                  latitude:this.geohash.split(",")[0],
                  longitude:this.geohash.split(",")[1],
                })
          }

        },
      computed:{
        ...mapState(['restaurant_categoryids']),

        //点击切换分类文字
         newtitle(){
            if( this.classifyB_c==1){
              return "分类";
            }else{
              return this.title;
            }
         }
      },
      created(){
          this.title=this.$route.query.title;
          this.geohash=this.$route.query.geohash;
          this.restaurant_category_id=this.$route.query.restaurant_category_id;
          this.restaurant_category_ids=this.restaurant_categoryids
      },
      mounted(){
          this.get_restaurant_category_list();
          this.get_activity_list();
          this.get_delivery_list();
      }





    }
</script>

<style scoped lang="less">
.option_c{
  .arrow{
    transition: all 0.5s;
    .iconfont{
      font-size: 0.2rem;
    }
  }
  .arrowrotate{
    display: inline-block;
    transform: rotate(180deg);
  }
  .s-header{
    background-color: #3190e8;
    width: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 1.95rem;
    padding: 0 0.75rem;
    font-size: 1.0rem;
    color: white;
    .left{
      width: 40%;
      .iconfont{
        font-size: 1.2rem;
      }
    }
  }
  .s_all {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    background: white;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 1.95rem;
    border-bottom: 1px solid silver;
    .all_c {
      width: 5.33rem;
      height: 1.3rem;
      line-height: 1.3rem;
      margin-top: 0.3rem;
      border-right: 1px solid silver;
      text-align: center;
      font-size: 0.7rem;
      .el-icon-caret-bottom {
        font-size: 0.2rem;
      }
    }
    .screen_c {
      border: 0;

    }
    .classifyA_c {
      width: 100%;
      position: absolute;
      z-index:-1000;
      top: 2rem;
      left: 0;
    }

      .sorkA_c {
        width: 100%;
        height: 12.5rem;
        line-height: 100%;
        background: white;
        position: absolute;
        top: 2rem;
        left: 0;
        text-align: left;
      }

    .screenA_c {
      width: 100%;
      height: 11rem;
      background: white;
      position: absolute;
      top: 2rem;
      left: 0;
      font-size: 0.6rem;
    }
  }
  .shoplist{
    margin-top:3.9rem ;
    background-color: white;
  }
}

  .empty {
    clear: both;
  }
</style>
