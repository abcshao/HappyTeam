<template>
  <div class="searchP_c">
    <div class="s-header clear">
      <i class="iconfont txtQ_c">&#xe606;</i>
      <span>搜索</span>
    </div>
    <form action="" class="submitA_c">
      <input type="search" placeholder="请输入商家或美食名称" class="searchL_c" v-model="textJ_c">
      <input type="submit" class="submitL_c" @click.stop.prevent="btnSearch_C">
    </form>
    <div class="merchantA_c" v-if="btnTextA_c">
      <h4>商家</h4>
      <ul>
        <li class="clear" v-for="(pro, index) in latitudeJ_c" :key="index" @click="btnSkipA_c(pro.id)">
          <div class="left"><img :src="'//elm.cangdu.org/img/'+pro.image_path" class="imgLogoA_c"></div>
          <div class="left textB_c">
            <p>{{pro.name}}<span class="textM_c">支付</span></p>
            <p>月售 {{pro.recent_order_num}} 单</p>
            <p>{{pro.float_minimum_order_amount}} 元起送 / 距离{{pro.distance}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="historyA_c" v-if="btnTextB_c" >
      <h4 v-if="latitude.length!=0">搜索历史</h4>
      <ul class="searchM_c" >
        <li class="clear" v-for="(arr, inde) in this.latitude" :key="inde">
          <span @click="btnSearchP_C(arr)">{{arr}}</span>
          <i class="iconfont txtZ_c right" @click="btnDelate_c(inde)">&#xe62d;</i>
        </li>
        <div class="emptyA_c" v-if="latitude.length!=0" @click="btnDeleteAll_c">清空搜索历史</div>
      </ul>
    </div>
    <Sfooter></Sfooter>
  </div>
</template>

<script>
  import {searchT_c} from "../../serivice/api";
  import {mapActions,mapState} from "vuex"
  import Sfooter from "../../components/Sfooter/Sfooter";

  export default {
        name: "searchP_c",
    components: {Sfooter},
    data(){
          return {
            textJ_c:"",
            btnTextA_c:false,   //商户信息
            btnTextB_c:true,    //搜索历史
            latitudeJ_c:[],
          }
        },
        methods:{
          ...mapActions(['SET_USER_INFO','SET_SEARCH_RESTAURANT','DELETE_SEARCH','DELETE_ALL_SEARCH']),
          btnSearch_C(){
            // console.log(this.latitude)
            let params = {geohash:this.geohash,keyword:this.textJ_c};
            searchT_c(params).then((result)=>{
              console.log(result);
              if(this.textJ_c!=""){
                this.SET_SEARCH_RESTAURANT(this.textJ_c);
                this.latitudeJ_c = result;
                this.btnTextB_c = false;
                this.btnTextA_c = true;
              }
            })
          },
          btnDelate_c(p){
            this.DELETE_SEARCH(p)
          },
          btnDeleteAll_c(){
            this.DELETE_ALL_SEARCH()
          },
          btnSearchP_C(v){
            let params = {geohash:this.geohash,keyword:v};
            searchT_c(params).then((result)=>{
              console.log(result);
              //   this.SET_SEARCH_RESTAURANT(this.textJ_c);
                this.latitudeJ_c = result;
                this.btnTextB_c = false;
                this.btnTextA_c = true;

            })
          },
          btnSkipA_c(id){
            this.$router.push({path:'/restaurant',query:{id:id}})
          }
        },
        computed:{
          ...mapState(['geohash','latitude']),
        },
        watch: {
          textJ_c() {
            if (this.textJ_c == "") {
              this.btnTextA_c = false
              this.btnTextB_c = true
            }
          }
        }
    }
</script>

<style scoped lang="less">
.searchP_c {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
  .submitA_c {
    background: white;
    padding: .5rem;
    display: flex;
    input {
      height: 1.5rem;
    }
    .searchL_c {
      flex: 4;
      border: .025rem solid #e4e4e4;
      font-size: .65rem;
      color: #333;
      border-radius: .125rem;
      background-color: #f2f2f2;
      font-weight: 700;
      /*height: 21.8rem;*/
      padding: 0 .6rem;
      /*overflow: auto;*/
    }
    .submitL_c {
      flex: 1;
      border: .025rem solid #3190e8;
      margin-left: .2rem;
      font-size: .65rem;
      color: #fff;
      border-radius: .125rem;
      background-color: #3190e8;
      font-weight: 700;
    }
  }
  .historyA_c {
    color: #333;
    font-weight: 400;
    box-sizing: border-box;

    h4 {
      font-size: .6rem;
      line-height: 2rem;
      text-indent: .5rem;
      font-weight: 700;
      color: #666;
    }
    .searchM_c{
      height: 21.8rem;
      overflow: auto;

      li {
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;

        line-height: 2rem;
        padding: 0 .6rem;
        font-size: 0.8rem;
      }
      span {
        display: inline-block;
        width: 80%;
        font-weight: 400;
      }
      .txtZ_c {
        width: 1.5rem;
        height: 100%;
        font-size: .4rem;
        text-align: right;
        color: #aaa;
      }
      .emptyA_c {
        background-color: #fff;
        color: #3190e8;
        font: .7rem/2rem Microsoft YaHei;
        font-weight: 700;
        text-align: center;

      }
    }

  }
  .merchantA_c {
    color: #333;
    font-weight: 400;
    height: 21.8rem;
    box-sizing: border-box;
    overflow: auto;

    h4 {
      font-size: .6rem;
      line-height: 2rem;
      text-indent: .5rem;
      font-weight: 700;
      color: #666;
    }
    li {
      width: 100%;
      background: white;
      padding: .5rem;
      border-bottom: .025rem solid #e4e4e4;
      font-size: .55rem;
      .imgLogoA_c {
        width: 1.7rem;
        height: 1.7rem;
      }
      .textB_c{
        width: 87%;
        margin-left: 0.2rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #e4e4e4;
        p {

          width: 100%;
          line-height: .9rem;
        }
      }

    }
  }
}
.textM_c {
  display: inline-block;
  border: 1px solid rgb(255, 96, 0);
  color: rgb(255, 96, 0);
  font-size: 0.05rem;
  margin-left: 0.2rem;
  line-height: 0.55rem;
  transform: skew(-20deg);
  box-shadow: 0 0.1rem 0 rgb(255, 96, 0);
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
</style>
