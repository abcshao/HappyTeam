<template>
  <div class="s-rate" >

    <header class="rating_header">
      <section class="rating_header_left">
        <p>{{ Number(ratescore.food_score).toFixed(1)}}</p>
        <p>综合评价</p>
        <p>高于周边商家{{(Number(ratescore.compare_rating)*100).toFixed(1)}}%</p>
      </section>
      <section class="rating_header_right">
        <div class="rating_container">


          <section class="star_container">
            <p><span class="fuwu_tidu">服务态度</span></p>
            <p>
              <van-rate
                v-model="ratescore.service_score"
                gutter="0px"
                size="0.5rem"
                allow-half
                color="#ff6000"
                readonly
                class="left"
              />
            </p>
            <p><span class="rating_num">{{ratescore.service_score.toFixed(1)}}</span></p>
          </section>
          <section class="star_container">
            <p><span class="fuwu_tidu">菜品评价</span></p>
            <p>
              <van-rate
                v-model="ratescore.overall_score"
                gutter="0px"
                size="0.5rem"
                allow-half
                color="#ff6000"
                readonly
                class="left"
              />
            </p>
            <p><span class="rating_num">{{ratescore.overall_score.toFixed(1)}}</span></p>
          </section>
        </div>
        <p class="send_time">
          <span>送达时间</span>
          <span class="delivery_time">{{ratescore.deliver_time}}分钟</span>
        </p>
      </section>
    </header>
    <ul class="tag_list_ul">
      <li :class="{tagActivity:index==0,unsatisfied:item.unsatisfied }"  :key="index"    v-for="(item,index) in ratetags">{{item.name}}({{item.count}})</li>

    </ul>
    <ul class="rating_list_ul">
      <li class="rating_list_li"  v-for="(item,index) in ratelist">

        <img :src="getImgPath(item.avatar)" alt="" class="user_avatar" >
        <section class="rating_list_details">
          <header>
            <section class="username_star">
              <p class="username">{{item.username}}</p>
              <p class="star_desc">
              <div class="rating_container">
                <section class="star_container">
                  <van-rate
                    v-model="4.7"
                    gutter="0px"
                    size="0.5rem"
                    allow-half
                    color="#ff6000"
                    readonly
                    class="left"
                  />
                </section>
                <div class="star_overflow" style="width: 2rem;">
                </div>
              </div>
              <p><span class="time_spent_desc">{{item.time_spent_desc}}</span></p>
            </section>
            <time class="rated_at">{{item.rated_at}}</time>
          </header>
          <ul class="food_img_ul">
            <li v-for="(it,index) in item.item_ratings">
              <img :src="getImgPath(it.image_hash)" v-if="it.image_hash">
            </li>
          </ul>
          <ul class="food_name_ul">
            <li class="ellipsis" v-for="(it,index) in item.item_ratings">
              {{it.food_name}}
            </li>
          </ul>
        </section>
      </li>


    </ul>


  </div>
</template>

<script>
  import {loadMore} from '../../../config/mixin'

  export default {
    name: "restaurantrate",
    props:['ratelist','ratescore','ratetags'],
    methods:{
      getImgPath(path){
        //传递过来的图片地址需要处理后才能正常使用
        let suffix;
        if (!path) {
          return '//elm.cangdu.org/img/default.jpg'
        }
        if (path.indexOf('jpeg') !== -1) {
          suffix = '.jpeg'
        } else {
          suffix = '.png'
        }
        let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
        return 'https://fuss10.elemecdn.com' + url
      },
    }
  }
</script>

<style scoped lang="less">
  .s-rate {
    height: 29rem;
    overflow: auto;
    .rating_header {
      display: flex;
      background-color: #fff;
      padding: .8rem .5rem;
      margin-bottom: .5rem;

      .rating_header_left {
        flex: 3;
        text-align: center;

        p {
          &:first-of-type {
            font-size: 1.2rem;
            color: #f60;
          }

          &:nth-of-type(2) {
            font-size: .65rem;
            color: #666;
            margin-bottom: .1rem;
          }

          &:nth-of-type(3) {
            font-size: .4rem;
            color: #999;
          }

        }
      }

      .rating_header_right {
        flex: 4;
        font-size: 0.65rem;
        color: #666;

        .star_container {
          display: flex;
          font-size: 0.65rem;
          align-items: center;

          .fuwu_tidu {
            color: #666;
            margin-right: 0.5rem;
          }

          .rating_num {
            width: 3rem;
            font-size: .55rem;
            color: #f60;
          }
        }

        .send_time {
          .delivery_time {
            font-size: .4rem;
            color: #999;
          }
        }
      }
    }

    .tag_list_ul {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      padding: .5rem;

      li {
        font-size: .6rem;
        color: #6d7885;
        padding: .3rem;
        background-color: #ebf5ff;
        border-radius: .2rem;
        border: 1px;
        margin: 0 .4rem .2rem 0;
      }

      .tagActivity {
        background-color: #3190e8;
        color: #fff;
      }

      .unsatisfied {
        background-color: #f5f5f5;
        color: #aaa;
      }
    }

    .rating_list_ul {
      background-color: #fff;
      padding: 0 .5rem;

      .rating_list_li {
        border-top: 1px solid #f1f1f1;
        display: flex;
        padding: .6rem 0;

        .user_avatar {
          width: 1.5rem;
          height: 1.5rem;
          border: .025rem;
          border-radius: 50%;
          margin-right: .8rem;
        }

        .rating_list_details {
          flex: 1;

          header {
            display: flex;
            flex: 1;
            justify-content: space-between;
            margin-bottom: .3rem;

            .username_star {
              font-size: .55rem;
              color: #666;

              .username {
                color: #666;
                margin-bottom: .2rem;
              }

              .star_desc {
                display: flex;
                align-items: center;

                .rating_container {
                  position: absolute;
                  display: -ms-flexbox;
                  display: flex;
                  width: 2rem;
                  height: .4rem;
                  top: .02rem;
                  left: .02rem;
                }

                .star_overflow {
                  overflow: hidden;
                  position: relative;
                  height: 100%;
                }

                .time_spent_desc {
                  font-size: .55rem;
                  color: #666;
                  margin-left: .15rem;
                }
              }
            }

            .rated_at {
              font-size: .4rem;
              color: #999;
            }
          }

          .food_img_ul {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: .4rem;

            li {
              img {
                width: 3rem;
                height: 3rem;
                margin-right: .4rem;
                display: block;
              }
            }
          }

          .food_name_ul {
            display: flex;
            flex-wrap: wrap;

            li {
              font-size: .55rem;
              color: #999;
              width: 2.2rem;
              padding: .2rem;
              border: .025rem solid #ebebeb;
              border-radius: .15rem;
              margin-right: .3rem;
              margin-bottom: 4px;
            }
          }
        }
      }
    }
  }
</style>
