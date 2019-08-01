<template>
  <div class="s-city-search">
    <div class="s-city-search-list">
      <el-row class="s-input-search">
        <el-input v-model="searchValue" placeholder="输入学校、商务楼、地址" size="small" clearable></el-input>
      </el-row>
      <el-row class="s-input-btn">
        <el-button type="primary" size="small" @click.stop="searchCity">提交</el-button>
      </el-row>
    </div>
    <h3 v-if="isShow" class="s-city-message">搜索历史</h3>

    <ul class="s-city-search-result">
      <template v-if="isShowHistory" >

        <li v-for="(item,index) in searchHisotryList" :key="index"   @click="dirmisteHistory(item)" >
          <h3>{{item.name}}</h3>
          <p>{{item.address}}</p>
        </li>
        <p class="clear-all" @click="clearAllSearchList" v-if="isShowClear">清空所有</p>
      </template>
      <li
        v-for="(item,index) in searchPoisList"
        :key="index"
        @click="dirmiste(index)"

      >
        <h3>{{item.name}}</h3>
        <p>{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getSearchCity} from "../../serivice/api"
  import {setStore,getStore,removeStore}  from "../../config/mUtils"
  export default {
    name: "searchAddress",
    data(){
      return {
        searchValue:'',
        isShow:true,
        isShowHistory:true,
        isShowClear:false,
        search_city_id:"",
        searchPoisList:[],  // 搜索的相关地点位置
        searchHisotryList:[], //搜索历史记录信息
        latitude: "",
        longitude: "",//获取经纬度详细定位
      }
    },
    methods:{
      searchCity(){
        this.isShowHistory=false;
        let params={city_id:Number(this.search_city_id),keyword:this.searchValue,type:'search'};
        getSearchCity(params).then((response)=>{
          if(response.length>0){
            this.isShow=false;
            this.searchPoisList=response;
          }

        })
      },
      //设置历史记录 如果没有的话直接存储，如果有则不用存储,
      setHistory(index){
        let self = this;
        if(this.searchHisotryList.length>0){
          let is_exist= this.searchHisotryList.filter((item)=>{
            return item.name== this.searchPoisList[index].name;
          });
          if(is_exist.length==0){
            this.searchHisotryList.push(this.searchPoisList[index]);
            setStore("searchHistoryList",this.searchHisotryList);
          }
        }else{
          this.searchHisotryList.push(this.searchPoisList[index]);
          setStore("searchHistoryList",this.searchHisotryList);
        }

      },
      //跳转点击地址跳转到对应的页面
      dirmiste(index){

         this.latitude=this.searchPoisList[index].latitude;
         this.longitude= this.searchPoisList[index].longitude;
         this.setHistory(index);
        this.$router.push({path:'/shophome'})
      },
      //点击历史记录进行跳转
      dirmisteHistory(value){
        this.latitude=value.latitude;
        this.longitude= value.longitude;
        this.$router.push({path:'/shophome'})

      },

      //获取搜索历史记录方法
      getSearchHistoryList(){
        if(getStore("searchHistoryList")){
          this.isShowClear=true;
          this.searchHisotryList =JSON.parse(getStore("searchHistoryList"));
        }
      },
      //清除所有的历史记录
      clearAllSearchList(){
        this.isShowClear=false;
        removeStore("searchHistoryList");
        this.searchHisotryList=[];
      }


    },
    created(){
      this.search_city_id=this.$route.params.city;
    },
    mounted(){
      //获取搜索历史记录
      this.getSearchHistoryList();
    }
  }
</script>

<style scoped lang="less">
  .s-city-search{
    .s-city-search-list{
      margin-top: 2.5rem;
      background-color: white;
      border-top: 1px solid #DCDFE6;
      border-bottom: 1px solid #DCDFE6;
      padding:0.5rem 0;
      .s-input-search{
        width: 90%;
        margin: 0 auto;
      }
      .s-input-btn{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.2rem;
        .el-button{
          width: 100%;
          span{
            color: white;
          }
        }
      }

    }
    .s-city-message{
      font-size: 0.4rem;
      padding-left: 0.75rem;
      border-bottom: 1px solid #DCDFE6;
      color: #999999;
    }
    .s-city-search-result{
      background-color: white;
      .clear-all{
        text-align: center;
        color: #999999;
        line-height: 1.8rem;
        font-size: 0.8rem;
      }
      li{
        line-height: 1.0rem;
        padding: 0.5rem 0.75rem ;
        border-bottom: 1px solid #DCDFE6;
        h3{
          font-size: 0.6rem;
        }
        p{
          color: #999999;
          font-size: 0.4rem;
        }
      }
    }
  }
</style>
