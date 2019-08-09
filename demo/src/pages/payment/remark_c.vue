<template>
    <div class="remark">
      <div class="s-header clear">
        <i class="iconfont txtQ_c" @click="btnReturnB_c">&#xe606;</i>
        <span>订单备注</span>
      </div>
      <div class="boxQ_c">
        <p>快速备注</p>
        <ul class="ul" >
          <li v-for="(pro, index) in remark_c" :key="index" class="remarkP_c">
            <span v-for="(arr, inde) in pro" :key="inde" :class="{colorA_c:inde==0,last:inde == arr.length - 1,choosed:remarkText[index]&&(remarkText[index][0] == inde)}" @click="active(index,inde,arr)">{{arr}}</span>
          </li>
        </ul>
      </div>
      <div class="boxW_c">
        <p>其他备注</p>
        <textarea  rows="5" class="textH_c" placeholder="请输入备注内容(可不填)"></textarea>
      </div>
      <div class="btnAffirm_C" @click="btnAffirmA_c">确定</div>
    </div>
</template>

<script>
    export default {
        name: "remark_c",
        data(){
          return {
            remarkText:{},
            remark_c:[["不要辣","少点辣","多点辣"],["不要香菜"],["不要洋葱"],["少点醋"],["多点葱"],["去冰","少冰"]],
            show:false
          }
        },
        methods:{
          btnReturnB_c(){
            this.$router.push({path:'/order'})
          },
          // selectSort_c(p){
          //   console.log(p)
          //   this.active=!this.active;
          // },
          btnAffirmA_c(){
          },
          active(index,inde,text){

            this.remarkText[index] = [inde,text];
            this.remarkText = Object.assign({},this.remarkText);
            // this.show=true
          },

        }
    }
</script>

<style scoped lang="less">
.remark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #333;
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
  margin-right: 0.4rem;
  font-weight: bold;
}
}
  .boxQ_c {
    width: 100%;
    background: white;
    margin-top: 0.4rem;
    padding: 0 0.7rem 1rem 0.7rem;
    font-size: 0.7rem;
      p{
        line-height: 2rem;
      }
      .remarkP_c {
        display: inline-block;
        margin-right: 0.4rem;
        border: .025rem solid #3190e8;
        border-radius: 0.2rem;
        margin-bottom: 0.4rem;
        span {
          padding: 0.2rem 0.4rem;
          display: inline-block;
          border-left: .025rem solid #3190e8;
        }
        .last {
          border-top-right-radius: .2rem;
          border-bottom-right-radius: .2rem;
        }
        .colorA_c {
          border-left: 0.025rem solid #3190e8;
          border-top-left-radius: .2rem;
          border-bottom-left-radius: .2rem;
        }
        .choosed {
          color: #fff;
          background-color: #3190e8;
        }
        :nth-child(1){
          border: 0;
        }
      }
  }
  .boxW_c {
    width: 100%;
    background: white;
    margin-top: 0.4rem;
    padding: 0 0.7rem 1rem 0.7rem;
    font-size: 0.7rem;
      p {
        line-height: 2rem;
      }
    .textH_c {
      width: 100%;
      background: #f9f9f9;
      border: .025rem solid #eee;
      border-radius: .2rem;
      font-size: .6rem;
      color: #666;
      padding: .5rem;
      resize:none;
    }
  }
  .btnAffirm_C {
    width: 91%;
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    margin: 0 auto;
    border-radius: .2rem;

  }
}

  .blue{
    background: cornflowerblue;
  }
</style>
