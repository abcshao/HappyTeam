<template>
  <div class="s-home">
    <div class="div1">
      <router-link :to="{path:'/home'}"></router-link>
      <span class="span1">ele.me</span>
         <span class="span2">
                 <router-link :to="{path:'/dl'}" v-if="islogin">

           <span  >登陆/注册</span>
                         </router-link>
          <router-link v-else :to="{path:'/minejmx'}">
                       <i class="iconfont" >&#xe607;</i>
          </router-link>
         </span>

    </div>
    <div class="s-local-city">
      <van-cell-group >
        <van-cell title="当前定位城市:" value="定位不准时，请在列表中选择" value-class="fontss" />
        <van-cell :title="guessCity" is-link :to="{name:'searchaddress',params:{city:guessCityid,guessCity:guessCity} }" title-class="fonttt"/>
      </van-cell-group>
    </div>
    <div class="s-hot-city">
      <h3 class="s-group-city-title"   >
          热门城市
        <span class="zimu" ></span>
      </h3>
      <ul class="s-group-city-list clear" >
        <li class="left ellipsis" style="color:#3190E8;" @click="goSearch(value)"  v-for="(value,index) in hotcity" :key="index">{{value.name}}</li>
      </ul>

    </div>
    <div class="s-group-city">
      <template v-for="(item,index) in getOrderCity">
            <h3 class="s-group-city-title" :key="index"  >
              {{index}}
              <span class="zimu" v-if="index=='A' ">(按字母排序)</span>
            </h3>
            <ul class="s-group-city-list clear" >
              <li class="left ellipsis" @click="goSearch(value)"  v-for="(value,key) in item" :key="key">{{value.name}}</li>
            </ul>
      </template>

    </div>
  </div>

</template>

<script>
  import {cityGuess,hotcity,groupcity} from "@/serivice/api"
  import {mapActions,mapState} from "vuex"
  export default {
        name: "home",
        data(){
          return{
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
            show:false,
          }
        },
        mounted(){
          //定位城市
          cityGuess().then((response)=>{

            this.guessCity=response.name;
            this.guessCityid=response.id;

          });
          //热门城市
          hotcity().then((response)=>{
            this.hotcity=response;

          });
          //全部城市
          groupcity().then((response)=>{
            this.groupcity=response;
          })
        },
        computed:{
          ...mapState(['userinfo']),
          getOrderCity(){
            //存储的必须是对象，这个可以用字符串作为对象
             var arr= {};
              for (var i=65;i<=90;i++){
                if(this.groupcity[String.fromCharCode(i)]){
                  arr[String.fromCharCode(i)]=this.groupcity[String.fromCharCode(i)];
                }
              }
              return arr;
          },
          islogin(){
            if(Object.keys(this.userinfo).length ==0){
              return true;
            }else{
              return false;
            }
          }
        },
    methods:{
      ...mapActions(['SET_USER_INFO']),
          //点击跳转到对应的城市地址搜索页面
      goSearch(value){
        this.$router.push({name:'searchaddress',params:{city:value.id,guessCity:value.name} })
      }

    }


    }
</script>

<style scoped lang="less">
   .fontss{
     font-size: 0.7rem;
   }
  .s-home{
    .s-local-city{

      .fonttt span{
        color: #3190E8;
      }
    }
    .s-hot-city{
      background-color: white;
      margin-top: 0.5rem;

      .s-group-city-title{
        padding:0 0.75rem;
        border-bottom: 1px solid #e4e4e4;
        border-top: 1px solid #e4e4e4;
        color: #7D7E80;
        font-size: 0.5rem;
        line-height: 1.5rem;
        .zimu{
          font-size: 0.5rem;
        }
      }
      .s-group-city-list{
        text-align: center;
        li{
          width: 25%;
          font-size: 0.5rem;
          line-height: 1.95rem;
          box-sizing: border-box;
          border-bottom: 1px solid #e4e4e4;
          border-right: 1px solid #e4e4e4;
          color: #7D7E80;
          &:nth-child(4n){
            border-right: 0;
          }
        }
      }


    }
    .s-group-city{
      background-color: white;
      margin-top: 0.5rem;

      .s-group-city-title{
        padding:0 0.75rem;
        border-bottom: 1px solid #e4e4e4;
        border-top: 1px solid #e4e4e4;
        color: #7D7E80;
        font-size: 0.5rem;
        line-height: 1.5rem;
        .zimu{
          font-size: 0.5rem;
        }
      }
      .s-group-city-list{
        text-align: center;
           li{
             width: 25%;
             font-size: 0.5rem;
             line-height: 1.95rem;
             box-sizing: border-box;
             border-bottom: 1px solid #e4e4e4;
             border-right: 1px solid #e4e4e4;
             color: #7D7E80;
             &:nth-child(4n){
               border-right: 0;
             }
           }
       }
    }
  }
  .div1{
    width: 100%;
    height: 2rem;
    background: #3190e8;
    text-align: center;
    position: relative;
  }
.span1{
  font-size: .7rem;
  color: #fff;
 position: absolute;
  left: .5rem;
  top: 0.5rem;
}
.iconfont{
  color: white;
  font-size: 1rem;
}
  .span2{
    position: absolute;
    right: .5rem;
    top: 0.2rem;
    a{
      color: #fff;
      font-size: 0.7rem;
    }
  }
</style>
