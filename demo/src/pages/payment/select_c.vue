<template>
<div class="select">
  <div class="s-header clear">
    <i class="iconfont txtQ_c" @click="btnReturn_c">&#xe606;</i>
    <span>选择地址</span>
    <div class="empty"></div>
  </div>


  <div class="skipB_c">
    <ul style=" margin-top: 1.95rem;" v-if="address && userid">
      <li v-for="(item,index) in address" :key="index"  @click="selectzhi(item,index)" >
        <div class="site_c">
          <div class="leftB_c">
            <i class="iconfont txtE_c" v-if="index==useraddressindex">&#xe619;</i>
            <i class="iconfont txtE_c"  style="color: #fff;  background: #fff;" v-else>&#xe619;</i>
            <div class="leftName_c">
              <div class="name_c">
                <span class="txtX_c">{{item.name}}</span>
                <span>{{item.sex==1?'先生':'女士'}}</span>
                <span>{{item.phone}}</span>
              </div>
              <div class="shop_c">
                <span class="txtZ_c">{{item.tag}}</span>
                <span>{{item.address_detail}}</span>
              </div>
            </div>
          </div>
          <div class="empty"></div>
        </div>
      </li>

    </ul>
  </div>
  <router-link :to="{path:'/order/select/sitec'}" class="skip_c">
    <i class="iconfont txtL_c">&#xe60e;</i>
    <span>新增收货地址</span>
  </router-link>
  <router-view></router-view>
</div>
</template>

<script>
  import  {mapActions,mapState} from "vuex"
  import {postaddB} from "../../serivice/api"
  export default {
      name: "select_c",
      data(){
        return{
           userid:'',
          orderid:null,
          sig:null,
          address:'',
        }
      },
      methods:{
        ...mapActions(['CHOSE_ADDRESS']),
        btnReturn_c(){
          this.$router.go(-1);
        },
        selectzhi(item,index){
          this.CHOSE_ADDRESS({address:item,index:index});
          this.$router.go(-1);
        },
        async  getinitdata(){
          this.address = await postaddB(this.userid);

        }
      },
      created(){
        this.userid=this.userinfo.user_id;
        this.orderid=this.$route.query.id;
        this.sig=this.$route.query.sig;

      },
      computed:{
         ...mapState(['userinfo','useraddress','useraddressindex','addStatus']),
      },
      mounted() {
        // 获取收货地址
         this.getinitdata();
     },
    watch:{
      addStatus(){
        this.getinitdata();

      }
    }

    }
</script>

<style scoped lang="less">
  .select {
    background-color: white !important;
    position: fixed;
    top: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    color: #333;
    z-index:5;
  .s-header {
    z-index: 100;
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
    margin-right: 0.9rem;
    font-weight: bold;
  }
  }




    .skipB_c {
      width: 100%;
      /*margin-top: 1.95rem;*/
      position: absolute;
      height: 90%;
      overflow: auto;
      z-index: 0;
    }
    .site_c {
      width: 100%;
      height: 3.5rem;
      line-height: 3.5rem;
      /*background: white;*/

      font-size: 0.6rem;
      /*border-bottom: 2px dashed ;*/
      background-color: #fff;
      background-size: auto .12rem;
      .leftB_c {
        width: 10rem;
        display: inline-block;
        height: 3.5rem;
        box-sizing: border-box;
        color: black;
        .txtE_c {
          margin-left: 0.8rem;
          color: white;
          background: #4cd964;
          font-size: 0.6rem;
          border-radius: 50%;
          padding: 0.1rem 0.15rem;
          vertical-align: 0.5rem;
        }
        .leftName_c{
          display: inline-block;
          margin-left: 0.3rem;
        }
        .name_c {
          width: 7rem;
          line-height: 1rem;
          margin-top: 0.7rem;
          .txtX_c {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
        .shop_c {
          /*display: inline-block;*/
          width: 5rem;
          line-height: 0.7rem;
          font-size: 0.5rem;
          margin-top: 0.2rem;
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
    }
    .skip_c {
      width: 100%;
      position: fixed;
      text-align: center;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #3190e8;
      font-size: 0.7rem;
      bottom: 0;
      .txtL_c {
        font-size: 0.9rem;
        background: white;
        border-radius: 50%;
        vertical-align: -0.06rem;
        border: 1px solid #3190e8;
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
</style>
