<template>
  <div class="order" v-if="orderresult">
    <div class="s-header clear" >
      <i class="iconfont txtQ_c" @click="btnReturnA_c">&#xe606;</i>
      <span>确认订单</span>
      <i class="iconfont txtW_c">&#xe601;</i>
      <div class="empty"></div>
    </div>
    <router-link :to="{path:'/order/select',query:{id:orderid,sig:sig}}">
    <div class="site_c">
      <div class="leftB_c">
      <i class="iconfont txtE_c">&#xe600;</i>
        <div class="leftName_c">
          <div v-if="useraddress">
      <div class="name_c">
        <span class="txtX_c ellipsis">{{useraddress.name}}</span>
        <span v-if="useraddress.sex==1">先生</span>
        <span v-else-if="useraddress.sex==2">女士</span>
        <span>{{useraddress.phone}}</span>
      </div>
      <div class="shop_c">
        <span class="txtZ_c" >{{useraddress.tag}}</span>
        <span>{{useraddress.address_detail}}</span>
      </div>
          </div>
          <div v-else>
            <div class="name_c">
              <span class="txtX_c ">添加一个收获地址</span>

              <span></span>
            </div>
            <div class="shop_c">
              <span class="txtZ_c" ></span>
              <span></span>
            </div>

          </div>
        </div>
      </div>
      <i class="iconfont txtR_c">&#xe714;</i>
      <div class="empty"></div>
    </div>
    </router-link>
    <div class="time_c">
      <div class="leftBox_c"></div>
      <span>送达时间</span>
      <div class="predict_c">
        <p>尽快送达 | 预计 {{orderresult.delivery_reach_time}}</p>
        <p>蜂鸟专送</p>
        <div class="empty"></div>
      </div>
      <div class="empty"></div>
    </div>
    <div class="payA_c">
      <div class="payB_c" @click="btnPayA_c">
        <span>支付方式</span>

        <span >在线支付</span>
        <i class="iconfont txtLogoA_c">&#xe714;</i>
        <div class="empty"></div>
      </div>
      <div class="redBig_c">
        <span>红包</span>
        <span>暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <div class="cost_c">
      <ul>
        <li class="shopA_c">
          <img :src="'http://elm.cangdu.org/img/'+business_license_image" class="imgLogo_c">
          <span>{{restaurant_info.name}}</span>
        </li>
        <li class="moneyA_c" v-for="(item,index) in  orderresult.cart.groups[0]  ">
          <p>12</p>
          <div>
            <span>x {{item.quantity}}</span>
            <span>￥{{item.price}}</span>
          </div>
        </li>
        <li v-for="(item,index) in orderresult.cart.extra">
          <p>{{item.name}}</p>
          <div>

            <span class="moneyB_c">￥{{item.price}}</span>
          </div>
        </li>
        <li>
          <p>配送费</p>
          <div>
            <span class="moneyC_c">￥{{orderresult.cart.deliver_amount}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="allSum_c">
      <p>订单 ￥{{orderresult.cart.total}}</p>
      <span>待支付 ￥{{orderresult.cart.total}}</span>
      <div class="empty"></div>
    </div>
    <div class="txtP_c">
      <router-link :to="{path:'/order/remark',query:{id:orderid,sig:sig}}">
      <span class="txtI_c">订单备注</span><span class="txtU_c">{{remarks==""?'口味、偏好等':remarks }}</span> <i class="iconfont txtLogoB_c">&#xe714;</i>
      </router-link>
    </div>
    <div class="txtO_c">
      <router-link :to="{path:'/order/invoice'}">
      <span class="txtY_c">发票抬头</span><span class="txtU_c">不需要开发票</span> <i class="iconfont txtLogoB_c">&#xe714;</i>
      </router-link>
    </div>
    <div class="buttonA_c">
      <p>待支付 ￥{{orderresult.cart.total}}</p><p @click="xiadanBtn">确认下单</p>
    </div>
    <div class="payQ_c" v-show="payA_c">
      <div class="wayB_c" @click="btnPayB_c"></div>
    <div class="wayA_c" >
      <p>支付方式</p>
      <ul>
        <li   v-for="(item,index) in orderresult.payments" :class="{moneyP_c:item.select_state==1}"><span>{{item.name}}( {{item.description}} )</span><i class="iconfont  right" :class="{txtV_c:item.select_state==1}">&#xe619;</i></li>
      </ul>
    </div>
  </div>
    <transition name = 'fade'>
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from "vuex"
  import {get_restaurant_send_order,postaddB,get_xia_orders} from "../../serivice/api"
    export default {
        name: "payment_c",
        data(){
          return {
            payA_c:false,
            geohash:"",//经纬度
            shopid:'',//商店id
            userid:'',//用户id
            orderresult:"",
            address:[],//获取收货地址
            sig:'',
            orderid:'',
            address_id:'',
            goods_group:[],
            restaurant_info:[],
            business_license_image:'',

          }
        },
       async created(){
          console.log(this.orderresult);
          if(Object.keys(this.userinfo).length==0){
             this.$router.push({path:'dl'});
             return ;
          }
          this.userid=this.userinfo.user_id;
          this.geohash=this.$route.query.geohash;
          this.shopid=this.$route.query.shopid;

       },
      async mounted(){
        if(this.geohash){
          //发起订单请求
          this.orderresult  =await get_restaurant_send_order({
            geohash:this.geohash,
            restaurant_id:this.shopid,
            entities:[this.entities],
            come_from: "web"
          });
          // 获取收货地址

          this.address = await postaddB(this.userid);
          this.CHOSE_ADDRESS({address:this.address[0],index:0});
          this.address_id=this.useraddress.id;
          this.goods_group =this.orderresult.cart.groups;
          this.sig=this.orderresult.sig;
          this.orderid=this.orderresult.id;
          this.restaurant_info=this.orderresult.cart.restaurant_info;
          this.business_license_image=this.restaurant_info.license.business_license_image
        }




      },
        methods:{
          ...mapActions(['CHOSE_ADDRESS']),
          btnPayA_c(){
            this.payA_c = true;
          },
          btnPayB_c(){
            this.payA_c = false;
          },
          btnReturnA_c(){
            this.$router.go(-1);  //返回上一层
          },
          //下单操作
        async  xiadanBtn(){
            console.log(1);
            var result = await get_xia_orders(this.userid,this.shopid,{
              address_id:this.address_id,
              deliver_time:"",
              description:"",
              entities:this.goods_group,
              geohash:this.geohash,
              paymethod_id:1,
              sig:this.sig
            });

            if(result.status==1){
              console.log(1);
              this.$router.push("/")
            }
          }
        },
        computed:{
          ...mapState(['userinfo','remarks','useraddress']),
          ...mapGetters(['allcartlist']),
          //获取对应的商店的购物车数据
          allcartdata(){
             return this.allcartlist(this.shopid)
          },
          // 购物车数据[{attrs:[],extra:{},id:食品id,name:食品名称,
          //   packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}]
          //购物车数据拼接
          entities(){
             var arr = [];
              this.allcartdata.forEach(item=>{
                arr.push({
                  attrs:[],
                  extra:{},
                  id:item.food_id,
                  name:item.ds,
                  packing_fee:item.packing_fee,
                  price:item.price,
                  quantity:item.goodsnum,
                  sku_id:item.sku_id,
                  specs:item.specs,
                  stock:item.stock,
                })
              })
            return arr;
          },

        }
    }
</script>

<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease-out;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
.order {
  position: relative;
  overflow: auto;
  .s-header {
  background-color: #3190e8;
  width: 100%;
  height: 1.95rem;
  color: white;
  font-size: 0.8rem;
  line-height: 1.95rem;
  text-align: center;
    position: fixed;
    top: 0;
    .txtQ_c {
      float: left;
      margin-left: 0.5rem;
    }
    span {
      margin-right: 0.4rem;
      font-weight: bold;
    }
    .txtW_c {
      float: right;
      margin-right: 0.6rem;
      font-weight: bold;
    }
  }
  .site_c {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background: white;
    font-size: 0.6rem;
    margin-top: 1.95rem;
    /*border-bottom: 2px dashed ;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
    .leftB_c {
      width: 80%;
      display: inline-block;
      height: 3.5rem;
      box-sizing: border-box;
      color: black;
      .txtE_c {
        margin-left: 0.8rem;
        color: rgb(60, 144, 232);
        vertical-align: 0.4rem;
        /*line-height: 3.5rem;*/
      }
      .leftName_c{
        display: inline-block;
        margin-left: 0.3rem;
      }
      .name_c {
        width: 10rem;
        line-height: 1rem;
        margin-top: 0.7rem;
        .txtX_c {
          width: 2rem;
          display: inline-block;
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
      .shop_c {
        /*display: inline-block;*/
        width: 5rem;
        line-height: 0.7rem;
        font-size: 0.5rem;
        .txtZ_c {
          background: rgb(255,87,34);
          color: white;
          border-radius:0.2rem;
          padding: 0 0.3rem;
        }
        :nth-child(2){
          color: rgb(119,119,119);
        }
      }
    }
    .txtR_c {
      float: right;
      margin-right: 0.3rem;
      color: rgb(153,153,153);
      /*font-weight: 100;*/
      font-size: 1.2rem;
    }
  }
  .time_c {
    width: 100%;
    height: 4rem;
    background: white;
    margin-top: 0.3rem;
    span {
      /*line-height: 4rem;*/
      vertical-align: 1.9rem;
      font-size: 0.8rem;
      font-weight: bold;
      margin-left: 0.8rem;
    }
    .leftBox_c {
      width: 0.2rem;
      height: 4rem;
      background: rgb(49,144,232);
      display: inline-block;
    }
    .predict_c {
      display: inline-block;
      text-align: right;
      font-size: 0.7rem;
      float: right;
      margin-top: 0.7rem;
      margin-right: 0.5rem;

      :nth-child(1){
        color: rgb(109,144,236);
        width: 7rem;
      }
      :nth-child(2){
        background: rgb(49,144,232);
        font-size: 0.55rem;
        width: 2.4rem;
        float: right;
        color: white;
        margin-top: 0.56rem;
        /*padding-right: 0.1rem;*/
        padding: 0.1rem;
        border-radius:0.1rem;
      }
    }
  }
  .payA_c {
    width: 100%;
    height: 4rem;
    line-height: 2rem;
    background: white;
    margin-top: 0.3rem;
    font-size: 0.6rem;
    color: rgb(170,170,170);
    .payB_c {
      width: 97%;
      margin-left: 3%;
      text-align: right;
      border-bottom: 1px solid #f5f5f5;

      :nth-child(1){
        color: #666;
        font-size: 0.7rem;
        float: left;
      }
      .txtLogoA_c {
        margin-right: 0.4rem;
      }
    }
    .redBig_c {
      margin-left: 3%;
      :nth-child(2){
        float: right;
        margin-right: 0.5rem;
      }
    }
  }
  .cost_c {
    width: 100%;
    margin-top: 0.3rem;
    background: white;
    .imgLogo_c {
      width: 1.2rem;
      margin-left: 3%;
      vertical-align: -0.3rem;
    }
    ul {
      font-size: 0.7rem;
      color: #666;
      border-bottom: 1px solid #f5f5f5;
      li {
        height: 2rem;
        line-height: 2rem;
        p {
          display: inline-block;
          margin-left: 3%;
          width: 70%;
        };
        div {
          display: inline-block;
        }
      }
      .shopA_c {
        border-bottom: 1px solid #f5f5f5;
        height: 2.8rem;
        line-height: 2.8rem;
        font-size: 0.8rem;
        span {
          margin-left: 0.3rem;
          color: #333;
        }
      }
      .moneyA_c {
        div {
          :nth-child(1){
            color: #f60;
          }
          :nth-child(2){
            margin-left: 0.3rem;
          }
        }
      }
    }

  }
  .allSum_c {
    width: 100%;
    height: 3.6rem;
    background: white;
    font-size: 0.7rem;
    color: #666;
    p {
      width: 70%;
      /*height: 3.5rem;*/
      line-height: 1.8rem;
      margin-left: 3%;
      float: left;
    }
    span {
      width: 27%;
      float: left;
      line-height: 1.8rem;
      color: #f60;
    }
  }
  .txtP_c {
    width: 100%;
    background: white;
    margin-top: 0.3rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.73rem;
    padding: 0 3% 0 3%;

    a {
      border-bottom: 1px solid #f5f5f5;
      display: inline-block;
      width: 100%;
      height: 2rem;
      color: #666;
      .txtLogoB_c {
        vertical-align: -0.1rem;
        color: #ccc;
      }
    }
    .txtI_c{
      display: inline-block;
      width: 2.93rem;
      /*margin-left: 3%;*/
    }
    .txtU_c{
      display: inline-block;
      width: 10rem;
      text-align: right;
      font-size: 0.65rem;
      margin-left: 5%;
      color: #aaa;
    }
  }
  .txtO_c {
    width: 100%;
    background: white;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.65rem;
    padding: 0 3% 0 3%;
    margin-bottom: 3rem;
    a {
      border-bottom: 1px solid #f5f5f5;
      display: inline-block;
      width: 100%;
      height: 2rem;
      color: #666;
      .txtY_c {
        display: inline-block;
        width: 2.93rem;
      }
      .txtU_c{
        display: inline-block;
        width: 10rem;
        text-align: right;
        font-size: 0.65rem;
        margin-left: 5%;
        color: #aaa;
      }
      .txtLogoB_c {
        vertical-align: -0.1rem;
        color: #ccc;
      }
    }
  }
  .buttonA_c {
    width: 100%;
    height: 2rem;
    background: #3c3c3c;
    position: fixed;
    left: 0;
    bottom: 0;
    p {
      display: inline-block;
      font-size: 0.75rem;
      line-height: 2rem;
      color: white;
    }
    :nth-child(1){
       width: 72%;
       margin-left: 3%;
     }
    :nth-child(2){
      width: 25%;
      text-align: center;
      background: #56d176;
    }
  }
  .payQ_c{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
  }
  .wayB_c {
    width: 100%;
    height: 62%;
  }
  .wayA_c {
    width: 100%;
    height: 38%;
    position: fixed;
    bottom: 0;
    background: white;
    font-size: 0.7rem;
    color: #ccc;
    position: fixed;
    bottom: 0;
    z-index: 200;
    p {
      text-align: center;
      line-height: 2rem;
      background: #fafafa;
    }
    ul {
      padding: 0 0.6rem;
      li {
        height: 2.5rem;
        line-height: 2.5rem;
        i{
          background: #ccc;
          border-radius: 50%;
          font-size: 0.6rem;
          color: white;
          padding: 0.05rem 0.13rem;
         text-align: right;
          height: 0.9rem;
          line-height: 0.9rem;
          margin-top: 0.8rem;
          width: 0.9rem;
        }
        .txtV_c {
          background: #4cd964;
        }
      }
      .moneyP_c {
        color: #333;
      }
    }
  }
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
  .empty {
    clear: both;
  }
</style>
