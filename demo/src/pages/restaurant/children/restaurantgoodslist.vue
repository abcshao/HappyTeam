<template>
  <div class="s-content">

    <div class="s-content-tab clear">
      <section class="s-tab-list left" ref="tabmenu">
      <ul >

        <li class="s-tab-li"
            v-for="(item,index) in foods_category_list"
            :class="{s_tab_li_active:index==menuIndex}"
            :key="index"
            @click="chooseMenu(index)"
        >{{item.name}}
          <span class="category_num"  v-if="categoryGoodsNum[index]>0">{{categoryGoodsNum[index]}}</span>

        </li>
      </ul>
      </section>
      <section class="s-content-list left"  ref="tabfootlist">
      <ul >
          <li  v-for="(item,index) in foodsList">
            <div class="s-content-list-title" :key="index">
              <b>{{item.name}}</b>
              <span>{{item.description}}</span>
            </div>
            <ul class="s-goods-list">
              <li class="s-goods-list-li clear" v-for="(val,key) in item.foods" :key="key">
                <div class="goods-img left">
                  <img :src="'//elm.cangdu.org/img/'+val.image_path" alt="">
                </div>
                <ul class="goods-message left">
                  <li class="goods-name">{{val.name}}</li>
                  <li class="goods-desc">{{val.description}}</li>
                  <li >月售{{val.month_sales}}份 好评率{{val.satisfy_rate}}%</li>
                  <li class="clear">
                    <div class="price left">
                      <span>¥</span>
                      <span>{{val.specfoods[0].price}}</span>
                    </div>
                    <span v-if="val.specifications.length">起</span>
                    <div class="btn right">
                      <div v-if="val.specifications.length">
                         <span v-show="allNum(val)>0">
                            <i class="iconfont" style="font-size: 0.7rem" @touchstart="reducemoreCar()" >&#xe656;</i><span class="num">{{allNum(val)}}</span>
                         </span>
                        <button class="get-rule"  @touchstart="alertTip(val)">选规格</button>
                      </div>
                      <div v-else>
                          <span v-show="val.specfoods[0].goodsnum>0">
                                <i class="iconfont" style="font-size: 0.7rem;color: #3190e8;"  @touchstart="reduceCar(val)">&#xe656;</i>
                                <span class="num">{{val.specfoods[0].goodsnum}}</span>
                          </span>
                        <i class="iconfont" style="font-size: 0.75rem;color: #3190e8;" @touchstart="btnss(val)">&#xe60d;</i>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
      </ul>
      </section>
    </div>
    <buy-cart :foods_message="foods_message" v-if="isalerttip" :shopid="id" ></buy-cart>
    <div class="zhezhao"  v-if="iszhezhao"></div>
    <transition
      appear
      @after-appear = 'afterEnter'
      @before-appear="beforeEnter"
      v-for="(item,index) in showMoveDot"
      :key = index
    >
            <span class="move_dot" v-if="item">
                <div class="qiu"></div>
            </span>
    </transition>
  </div>
</template>

<script>
  import  {get_restaurant_goods_list}  from "../../../serivice/api";
  import {mapActions,mapState,mapGetters} from "vuex"
  import Bscroll from 'better-scroll'
  import BuyCart from "../buyCart";
  export default {
    name: "restaurantgoodslist",
    components: {BuyCart},
    props:['restaurant_goods_list','shopid'],
    data(){
           return{

             foodsList:[],//商店食品信息
             foods_category_list:[],//获取商品分类信息
             menuIndexChange: true,//解决选中index时，scroll监听事件重复判断设置index的bug
             foods_message:{},//点击规格商品时，把数据传输到弹窗组件中
             shoplisttop:[],//每个分类食物列表对顶部top的距离
             menuscroll:null,//菜单滑轮
             foodsrcoll:null,//商品食物列表滑轮
             menuIndex:0,//表示被选中的菜单项
             isalerttip:false,
             iszhezhao:false,//判断遮罩层是否开启
             goods_num:[],//商品数量
             showMoveDot: [], //控制下落的小圆点显示隐藏
             elLeft:'',
             elBottom:'',
             windowHeight:null,
           }
        },
        methods:{
          ...mapActions(['SET_SHOP_CAR_LIST','REMOVE_SHOP_CAR_LIST','SET_RESTAURANT_GOODS','UPDATE_RESTAURANT_GOODS']),
             //计算总数量
             allNum(val){
                var allnum=0;
                val.specfoods.forEach(item=>{
                  if(item.goodsnum>0){
                    allnum=item.goodsnum+allnum;
                  }
                })
               return allnum;
             },
           //点击弹框叉号关闭遮照层和弹框
          btnclearAlert(){
            this.isalerttip=false;
            this.iszhezhao=false;
            this.foods_message={};
          },
          //设置是否弹出窗口
          alertTip(val){
            this.isalerttip=true;
            this.iszhezhao=true;
            this.foods_message=val;
          },

          async getIntData(){
            // this.foodsList=await get_restaurant_goods_list({restaurant_id:this.id});
            let result =     this.restaurantgoods.filter((item)=>{
                return  item.restaurant_id==this.shopid;
            });
            if(result.length==0){
              // this.foodsList=await get_restaurant_goods_list({restaurant_id:this.id});
              this.foodsList=this.restaurant_goods_list;
              //判断vuex 是否有数据 然后进行修改
              this.SET_RESTAURANT_GOODS({id:this.shopid,data:this.foodsList});
            }else{
              this.foodsList = result;
            }



            //dom结构加载结束(nextTick这个接口是计算dom相关的,要确保原生dom已经渲染了)
            this.$nextTick(()=>{
              this.getAllFoodHeight();
            });
            this.foods_category_list=this.foodsList.map((item)=>{
              return {
                name:item.name,
              }
            });
          },
          //添加购物车
          btnss(val){


            if(val.specfoods[0].goodsnum!=undefined ){
              val.specfoods[0].goodsnum=val.specfoods[0].goodsnum+1;
            }else{
              this.$set(val.specfoods[0],'goodsnum',1);
            }
             //小球动画
             this.elLeft = event.target.getBoundingClientRect().left;
             this.elBottom = event.target.getBoundingClientRect().bottom;
             this.showMoveDot.push(true);

              //更新vuex数据
              this.UPDATE_RESTAURANT_GOODS();
          },
          //小球动画设置
          beforeEnter(el){
            el.style.transform = `translate3d(0,${37 + this.elBottom - this.windowHeight}px,0)`;
            el.children[0].style.transform = `translate3d(${this.elLeft - 30}px,0,0)`;
            el.children[0].style.opacity = 0;
          },
          afterEnter(el){
            el.style.transform = `translate3d(0,0,0)`;
            el.children[0].style.transform = `translate3d(0,0,0)`;
            el.style.transition = 'transform .55s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
            el.children[0].style.transition = 'transform .55s linear';
            this.showMoveDot = this.showMoveDot.map(item => false);
            el.children[0].style.opacity = 1;
          },
          //删除对应的购物车
          reduceCar(val){
            if(val.specfoods[0].goodsnum!=undefined  && val.specfoods[0].goodsnum>0 ){
              val.specfoods[0].goodsnum=val.specfoods[0].goodsnum-1;
            }
            this.UPDATE_RESTAURANT_GOODS();

          },
          //多规格商品不能直接删除来个提醒
          reducemoreCar(){
            alert("多规格商品只能在购物车删除");
          },
          //获取食物列表每个分类的的offsetTop，赋给对应的数组
          getAllFoodHeight(){
             const listcontent = this.$refs.tabfootlist;
            const listArr  = Array.from(listcontent.children[0].children) ;
            listArr.forEach((item, index) => {
                this.shoplisttop[index] = item.offsetTop;
              });
            this._initScroll();
          },
          // 添加对应的bscroll 事件内容
          _initScroll(){
            const menuHeight = this.$refs.tabmenu.clientHeight;
            this.menuscroll = new Bscroll(this.$refs.tabmenu,{
              click: true,
            });
            this.foodsrcoll = new Bscroll(this.$refs.tabfootlist,{
              probeType: 3, //动画运行过程中实时派发 scroll 事件。
              deceleration: 0.001,
              bounce: false,
              swipeTime: 2000,
              click: true,
            });
            this.foodsrcoll.on("scroll",(pos)=>{
              this.shoplisttop.forEach((item, index) => {
                if ( this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item ) {
                  this.menuIndex = index;
                  const menuList=this.$refs.tabmenu.querySelectorAll('.s_tab_li_active');
                  const el = menuList[0];
                  this.menuscroll.scrollToElement(el, 800, 0, -(menuHeight/2 - 50));
                }
              })
            })
          },
          //点击的时候显示对应的数据
          //点击左侧食品列表标题，相应列表移动到最顶层
          chooseMenu(index){
            const menuHeight = this.$refs.tabmenu.clientHeight;
            this.menuIndex = index;
            this.menuIndexChange=false;
            const menuList=this.$refs.tabmenu.querySelectorAll('.s_tab_li_active');
            const el = menuList[0];
            this.menuscroll.scrollToElement(el, 800, 0, -(menuHeight/2 - 50));
            this.foodsrcoll.scrollTo(0, -this.shoplisttop[index], 400);
            this.foodsrcoll.on('scrollEnd', () => {
              this.menuIndexChange=true;
            })
          },
        },
        mounted(){
          // this.id=this.$route.query.id;
          this.getIntData();
          this.windowHeight = window.innerHeight;
        },
        computed:{
          ...mapState(['shopCarList','restaurantgoods']),
          ...mapGetters(['shopcard','allcategorynum']),
          cardata(){
            return this.shopcard(this.shopid);
          },
          //获取不同栏目添加购物车的数量
          categoryGoodsNum(){
            return this.allcategorynum(this.shopid);
          }
        },
          watch:{
            restaurant_goods_list(){
              this.getIntData();
            }
          }

    }
</script>

<style scoped lang="less">
  .move_dot{
    position: fixed;
    bottom: 30px;
    left: 30px;

    .qiu{
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: #3190e8;
    }
  }
  .zhezhao{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 17;
  }
  .s-content{
    width: 100%;


    /*margin-top: 5.3rem;*/
    .s-content-tab{

      .s-tab-list{
        width: 30%;
        font-size: .6rem;
        color: #666;
        height: 21rem;
        overflow: auto;
        .s-tab-li{
          position: relative;
          line-height: 1.3rem;
          padding: 0.65rem;
          border-bottom: .025rem solid #ededed;
          box-sizing: border-box;
          border-left: .15rem solid #f8f8f8;
          .category_num{
            position: absolute;
            top: .1rem;
            right: .1rem;
            background-color: #ff461d;
            line-height: .6rem;
            text-align: center;
            border-radius: 50%;
            border: .025rem solid #ff461d;
            min-width: .6rem;
            height: .6rem;
            font-size: .5rem;
            color: #fff;
            font-family: Helvetica Neue,Tahoma,Arial;
          }
        }
        .s_tab_li_active{
          box-sizing: border-box;
          border-left:.15rem solid #3190e8;
          background-color: white;
          font-weight: bold;
        }
      }
      .s-content-list{
        width: 70%;
        height: 21rem;
        overflow: auto;
        .s-content-list-title{
          padding:0 0.4rem;
          font-size: 0.5rem;
          line-height: 1.65rem;
          b{
            font-size: 0.65rem;
          }
          span{
            font-size: 0.45rem;
          }
        }
        .s-goods-list{
          font-size: 0.5rem;
          line-height: 0.7rem;
          background-color: white;
          .s-goods-list-li{
            padding: .6rem .4rem;
            border-bottom: 1px solid #f8f8f8;

            .goods-img{
              width: 25%;
              padding-top: 0.3rem;
              img{
                width: 1.65rem;
              }
            }
            .goods-message{
              li{
                padding-top: 0.3rem;
              }
              width: 75%;
              .price{
                font-size: .7rem;
                color: #f60;
                font-weight: 700;
                margin-right: .3rem;
              }
              .btn{
                .num{
                   display: inline-block;
                   width: 1rem;
                  text-align: center;
                };
                .get-rule{
                  display: inline-block;
                  font-size: .55rem;
                  color: #fff;
                  padding: .1rem .2rem;
                  background-color: #3190e8;
                  border-radius: .2rem;
                  border: 1px solid #3190e8;

                }

              }

            }
          }
        }
      }
    }

  }
</style>
