<template>
  <div class="s-home">
    <div class="s-local-city">
      <van-cell-group >
        <van-cell title="当前定位城市:" value="定位不准时，请在列表中选择" value-class="fontss" />
        <van-cell :title="guessCity" is-link :to="{name:'searchaddress',params:{city:guessCityid} }" title-class="fonttt"/>
      </van-cell-group>
    </div>
    <div class="s-hot-city">
      <van-cell title="热门城市"  />
      <van-grid >
        <van-grid-item
          v-for="(value,index) in hotcity"
          :key="index"
          :text="value.name"
          @click="goSearch(value)"

        />
      </van-grid>
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

  export default {
        name: "home",
        data(){
          return{
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
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
          getOrderCity(){
            //存储的必须是对象，这个可以用字符串作为对象
             var arr= {};
              for (var i=65;i<=90;i++){
                if(this.groupcity[String.fromCharCode(i)]){
                  arr[String.fromCharCode(i)]=this.groupcity[String.fromCharCode(i)];
                }
              }
              return arr;
          }
        },
    methods:{
          //点击跳转到对应的城市地址搜索页面
      goSearch(value){
        this.$router.push({name:'searchaddress',params:{city:value.id} })
      }

    }


    }
</script>

<style scoped lang="less">
  .s-home{
    .s-local-city{
      .fontss{
        font-size: 0.2rem;
      }
      .fonttt span{
        color: #3190E8;
      }
    }
    .s-hot-city{
      margin-top: 0.5rem;
      .fontss{
        font-size: 0.2rem;
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


</style>
