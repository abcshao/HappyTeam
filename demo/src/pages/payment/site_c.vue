<template>
<div class="site">

  <div class="s-header clear">
    <i class="iconfont txtQ_c" @click="btnReturnA_c">&#xe606;</i>
    <span>添加地址</span>
    <div class="empty"></div>
  </div>
  <div class="message_c">
    <div class="linkman_c">
      <span class="textA_c">联系人</span>
      <input type="text" placeholder="你的名字" class="nameA_c" v-model="nameA_c">
      <div class="selectA_c">
        <i class="iconfont textC_c" :class="{'textB_c':active == true}" @click="selectSort_c(0)">&#xe619;</i>
        <span>先生</span>
        <i class="iconfont textC_c textD_c" :class="{'textB_c':txtL_c == true}" @click="selectSort_c(1)">&#xe619;</i>
        <span>女士</span>
      </div>
      <div class="empty"></div>
    </div>
    <div class="phoneA_c clear">
      <span class="left">联系电话</span>
      <div class="right textP_c">
      <input type="text" placeholder="你的手机号" v-model="phoneA_c">
      <i class="iconfont" @click="btnShow_c">&#xe60e;</i>
      </div>
      <input type="text" placeholder="备选电话" class="right" v-show="showB_c" v-model="phoneB_c">
    </div>
    <div class="siteB_c clear">
      <span>送餐地址</span>
      <div>
        <router-link :to="{path:'/order/select/sitec/searchA_c'}">
          <input type="text" class="siteQ_c" v-model="searchAddressName" disabled placeholder="小区/写字楼/学校等">
        </router-link>
      <input type="text" placeholder="详细地址( 如门牌号等 )" v-model="siteO_c">
    </div>
    </div>
    <div class="label_c">
      <span>标签</span>
      <input type="text" placeholder="无/家/学校/公司" v-model="labelB_c">
    </div>
  </div>
  <div class="btnA_c"@click="btnConfirm_c">确定</div>
  <transition name="fade" enter-active-class="animated bounceIn"
              :duration="400">
    <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
  </transition>
  <transition name="fade">

  <router-view></router-view>
  </transition>

</div>
</template>

<script>
  import {mapActions,mapState,} from "vuex"
  import {postadd} from "../../serivice/api"

  import Pop_c from "../../components/Cpm_c/Pop_c";
    export default {
        name: "site_c",
      components: {Pop_c},
      data(){
          return {
            active:true,
            txtL_c:false,
            showB_c:false,
            show:false,
            popKuang:"",
            nameA_c:"",   //收货人姓名名
            phoneA_c:"",  //手机号
            // searchAddressName:"",   //地址
            siteO_c:"",   //详细地址
            labelB_c:"",  //标签
            userId_c:null,   //用户id
            coordinate_c:"",  //经纬度
            sexA_c:1,    //性别
            phoneB_c:"",  //备注电话
            labelC_c:"2", //标签类型
          }
        },
      created(){
        this.userId_c=this.userinfo.user_id;
        this.coordinate_c=this.geohash;
      },
      computed:{
        ...mapState(['searchAddressName','userinfo','geohash']),
        showPro(){
          return this.$route.query.textN_c
        }
      },
        methods:{
          ...mapActions(['ADD_STATUS']),
          btntxt_c(show){
            this.show = show;
          },

          btnReturnA_c(){
            this.$router.go(-1);
          },
          selectSort_c(index){
            if (index == 0){
              this.active = true;
              this.txtL_c = false;
              this.sexA_c=1;
            }else if(index == 1){
              this.active = false;
              this.txtL_c = true;
              this.sexA_c=2;

            }
          },
          btnConfirm_c(){
            if(this.nameA_c == ""){
              this.show = true;
              this.popKuang = "请输入姓名";
              return;
            }else if(this.phoneA_c == ""){
              this.show = true;
              this.popKuang = "请输入电话号码";
              return;
            }else if(this.siteP_c == ""){
              this.show = true;
              this.popKuang = "请选择地址";
              return;
            }else if(this.siteO_c == ""){
              this.show = true;
              this.show = true;
              this.popKuang = "详细地址信息错误";
              return;
            }else if(this.labelB_c == ""){
              this.show = true;
              this.popKuang = "标签错误";
              return;
            }
            let params = {sex:this.sexA_c,address:this.searchAddressName,address_detail:this.siteO_c,geohash:this.coordinate_c,name:this.nameA_c,phone:this.phoneA_c,tag:this.labelB_c,phone_bk:this.phoneB_c,tag_type:this.labelC_c}
            postadd(this.userId_c,params).then((result)=>{
              if(result.status==1){
                this.ADD_STATUS(1);
                // 传输一个vuex值判断是否传值，如果传值则直接更新下运行调用下接口
                 this.$router.go(-1);
               }
            })

          },
          btnShow_c(){
              this.showB_c = true;
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
.site {
  position: fixed;
  top: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 100;
  overflow: auto;

  .s-header {
    background-color: #3190e8;
    width: 100%;
    height: 1.95rem;
    color: white;
    font-size: 0.8rem;
    line-height: 1.95rem;
    text-align: center;

    .txtQ_c {
      float: left;
      margin-left: 0.5rem;
    }
    span {
      margin-right: 0.9rem;
      font-weight: bold;
    }
  }
  .message_c {
    width: 100%;
    background: white;
    padding: 0 4%;
    .linkman_c {
      font-size: 0.7rem;
      border-bottom: 1px solid #f5f5f5;
      .textA_c {
        width: 28%;
        height: 5rem;
        display: inline-block;
        float: left;
        line-height: 2.4rem;
      }
      .nameA_c {
        width: 70%;
        height: 2.5rem;
        border-bottom: 1px solid #f5f5f5;
        float: right;
      }
      .selectA_c {
        display: inline-block;
        width: 70%;
        height: 2.5rem;
        line-height: 2.5rem;
        float: right;
        .textC_c {
          background: #ccc;
          border-radius: 50%;
          font-size: 0.6rem;
          color: white;
          padding: 0.05rem 0.1rem;
        }
        .textD_c {
          margin-left: 0.9rem;
        }
        .textB_c {
          background: #4cd964;
        }
      }
    }
    .phoneA_c {
      font-size: 0.7rem;
      line-height: 2.5rem;
      /*height: 3rem;*/
      border-bottom: 1px solid #f5f5f5;
      span {
        width: 28%;
        line-height: 2.5rem;
        display: inline-block;
      }
      .textP_c {
        width: 72%;
        border-bottom: 1px solid #f5f5f5;
        input {
          width: 86%;
        }
      }
      input {
        width: 72%;
        height: 2.5rem;
        display: inline-block;
      }
      i {
        font-size: 1.1rem;
        color: rgb(16,150,235);
        vertical-align: -0.2rem;
      }
    }
    .siteB_c {
      font-size: 0.7rem;
      height: 5rem;
      border-bottom: 1px solid #f5f5f5;
      span {
        width: 28%;
        height: 5rem;
        display: inline-block;
        float: left;
        line-height: 2.5rem;
      }
      div{
        display: inline-block;
        width: 70%;
        height: 5rem;
        float: right;
        .siteQ_c {
          width: 100%;
          display: inline-block;
          height: 50%;
          background: white;
          line-height: 2.5rem;
          color: #999;
        }
        input {
          height: 50%;
          width: 100%;
        }
      }

    }
    .label_c {
      font-size: 0.7rem;
      line-height: 2.5rem;
      height: 2.5rem;
      span {
        width: 28%;
        display: inline-block;
      }
      input {
        width: 70%;
      }
    }
  }
  .btnA_c {
    width: 90%;
    background: #4cd964;
    color: #fff;
    border-radius: 0.1rem;
    margin: 0.6rem auto;
    text-align: center;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.7rem;
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
