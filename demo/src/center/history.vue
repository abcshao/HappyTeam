<template>
    <div class="history">
      <van-nav-bar
        title="我的"
        left-arrow
        fixed
        @click-left="onClickLeft"
      />

      <ul>
        <li v-for="(value,index) in newarrayH" :key="index">
          <section class="all">
            <!--左边优惠金额-->
            <div class="div1">
              <span class="span1">¥</span>
              <span class="span2">{{value.numberMoney.num1}}</span>
              <span class="span3">.</span>
              <span class="span4">{{value.numberMoney.num2}}</span>
              <p class="p1">满{{value.sum_condition}}元可用</p>
            </div>

            <!--中间详细信息-->
            <div class="div2">
              <p class="p2">{{value.name}}</p>
              <p class="p3">{{value.end_date}}到期</p>
              <p class="p4">限收货手机号为 {{value.phone}}</p>
            </div>

            <!--剩余日期-->
            <div class="div3">
              <!--<img src="http://www.w3.org/1999/xlink" alt="">-->
            </div>
          </section>
          <div class="bottom">
            <p class="p">{{value.limit_map==undefined ? "":value.limit_map.restaurant_flavor_ids}}</p>
          </div>
        </li>

      </ul>
    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {gethistory} from "../serivice/api"
    export default {
        name: "history",
      data(){
        return{
          arrayH:[],
          allinfo:[],
        };
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),
        onClickLeft(){
          this.$router.go(-1);
        },

      },
      mounted(){
        // this.allinfo=JSON.parse(localStorage.getItem('allinfo'));
        // console.log(this.allinfo.user_id);
        gethistory(this.userinfo.user_id).then((result)=>{
          this.arrayH=result
        });

      },
      computed:{
        ...mapState(['userinfo']),
        newarrayH(){
          this.arrayH.forEach((item)=>{
            let nn =item.amount.toString().split(".");
            if(nn[1]==undefined){
              nn[1]="0";
            }
            item.numberMoney={num1:nn[0],num2:nn[1]};
          });
          return this.arrayH;
        }

      },
    }
</script>

<style scoped>
  .van-nav-bar {
    background-color: #3190e8;
  }
  .van-nav-bar__title {
    color: white;
    font-weight: 400;
  }
  :before{
    color: white;
    text-align: center;
  }
  ul{
    margin-top: 3rem;
  }
  .div1{
    font-size: 0;
    border-right: 0.1rem dotted #ccc;
    padding-right:.5rem ;
    position: absolute;
    left: .7rem;
    top: 0.7rem;
  }
  .div2{
    font-size: 0;
    margin-left: .5rem;
    position: absolute;
    left: 4.5rem;
    top: 0.9rem;
    line-height: .8rem;
  }
  .span1{
    font-size: .9rem;
    color: #ccc;
    font-weight: 900;
  }
  .span2{
    font-size: 1.5rem;
    color: #ccc;
  }
  .span3{
    font-size: .8rem;
    color: #ccc;
    font-weight: 900;
  }
  .span4{
    font-size: .8rem;
    color: #ccc;
    font-weight: 900;
  }
  .p1{
    font-size: .4rem;
    color: #999;
    letter-spacing:.1rem;
  }
  li{
    background: white;
  }
  .p2{
    font-size: .7rem;
    color: #666;
  }
  .p3,.p4{
    font-size: .4rem;
    color: #999;
  }
  .div3{
    font-size: .75rem;
    color: #ff5340;
    position: absolute;
    top: 0.9rem;
    right: .4rem;

  }
  .all{
    margin-top: 0.7rem;
    padding: 2rem .5rem;
    position: relative;
  }
  li{
    width: 92%;
    border-radius:2%;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    background-size: .5rem .2rem;
    margin: 0.5rem 4%;
  }
  .bottom{
    background-color: #f9f9f9;
    padding:0 .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .p{
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
    line-height: 1.2rem;
  }
</style>
