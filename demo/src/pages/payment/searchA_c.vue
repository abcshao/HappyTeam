<template>
    <div class="search">
      <div class="s-header clear">
        <i class="iconfont txtQ_c" @click="btnReturnB_c">&#xe606;</i>
        <span>搜索</span>
        <div class="empty"></div>
      </div>
      <div class="searchM_c">
      <form action="">
        <input type="search" placeholder="请输入小区/写字楼/学校等" class="searchQ_c" v-model="searchQ_C">
        <button class="btnSearch_C" @click="btnSearchA_c">搜索</button>
      </form>
      <ul>
        <!--<router-link :to="{path:'/site',query:{textN_c:pro.name}}" v-for="(pro, index) in searchCity_c" :key="index">-->
        <li v-for="(pro, index) in searchCity_c" :key="index"  @click="btnText_c(pro.name)">
          <p class="textL_c">{{pro.name}}</p>
          <p class="textK_c">{{pro.address}}</p>
        </li>
        <!--</router-link>-->
      </ul>
      </div>
      <div class="boxA_c" v-if="textM_c">
        <p>找不到地址 ?</p>
        <p>尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号等）可稍后输入哦</p>
      </div>
    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {getSearchCity} from "../../serivice/api";
    export default {
        name: "searchA_c",
      data(){
          return {
            searchQ_C:"",  //想搜的内容
            cityA_c:1,   //城市id
            searchCity_c:[],   //存储搜索到的数据
            textM_c:true,
            textN_c:"",    //存储搜索到的地址

          }
      },
        methods: {
          ...mapActions(['SET_SEARCH_ADDRESS_NAME','GET_CITY']),
          btnReturnB_c() {
            this.$router.go(-1);  //返回上一层
          },
          btnSearchA_c() {
            let params_c = {city_id: Number(this.cityA_c), keyword: this.searchQ_C, type: 'search'};
            getSearchCity(params_c).then((result) => {
              this.searchCity_c = result;
              // this.textN_c = this.searchCity_c.name
              // console.log(this.textN_c);
              if(result.name == "ERROR_QUERY_TYPE"){
                this.textM_c = true;
              }else{
                this.textM_c = false;
              }
              console.log(this.searchCity_c);
            })
          },
          btnData(){

          },
          btnText_c(p){
            this.SET_SEARCH_ADDRESS_NAME(p);
            this.$router.push({path:'/sitec'})
            // this.$store.dispatch('setsearchAddressName',p)
          }
        }
    }
</script>

<style scoped lang="less">
.search {
  width: 100%;
  height: 100%;
  background: white;
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
  .searchM_c{
    height: 93%;
    /*background: red;*/
  }
  .searchQ_c {
    font-size: 0.7rem;
    width: 70%;
    height: 1.5rem;
    margin: 0.7rem 0.7rem;
    padding: 0 0.4rem;
    background: #F5F5F5;
    border-radius: 0.2rem;
  }
  .btnSearch_C {
    background: #3190e8;
    color: white;
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
  }
  ul {
    width: 100%;
    height: 90%;
    padding: 0.5rem 0.6rem;
    overflow: auto;
    li {
      width: 100%;
      padding: 0.7rem 0;
      .textL_c {
        font-size: 0.8rem;
        color: #555;
      }
      .textK_c {
        font-size: 0.7rem;
        color: #999;
      }
    }
  }
  .boxA_c {
    width: 100%;
    font-size: 0.5rem;
    text-align: center;
    position: absolute;
    top: 13rem;
    color: #aaa;
  }
}
</style>
