import Vue from 'vue'
import Router from 'vue-router'
import DL from "../center/denglujmx"
import MineJmx from  "../center/minejmx"
import balabce from "../center/balance"
import explain from "../center/explain"
import discounts from "../center/discounts"
import ResetA_c from "../center/resetPassword_c"
import explainHb from "../explains/explain_hb"
import yve from "../explains/explain_ye"
import jifen from "../center/jifen-jmx"
import jifenSM from "../explains/explain_jifen"
import indent from "../center/indent"
import serve from "../center/serve"
import svip from "../center/svipQuestion"
import router_c from "../pages/payment/payment_c"
import select from "../pages/payment/select_c"
import site from "../pages/payment/site_c"
import search_c from "../pages/payment/searchA_c"
import remark from "../pages/payment/remark_c"
import invoice_c from "../pages/payment/invoice_c"
import member_c from "../center/member_c"
const home = ()=>import("@/pages/home/home")
const searchAddress = ()=>import("@/pages/searchAddress/searchAddress")
const shophome = ()=>import("@/pages/shophome/shophome")
const restaurant = ()=>import("@/pages/restaurant/restaurant")
const restaurantgoodslist = ()=>import("@/pages/restaurant/children/restaurantgoodslist")
const restaurantrate = ()=>import("@/pages/restaurant/children/restaurantrate")

Vue.use(Router)
import Filtrate from "../pages/Filtrate/FootFiltrate"
export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
       path:'/searchaddress/:city/:guessCity',
      name:'searchaddress',
      component:searchAddress
    }
    ,
    {
      path:'/shophome/:geohash',
      name:'shophome',
      component:shophome
    },
    {
      path:"/filtrate",
      component:Filtrate
    },
    {
      path: '/dl',
      component:DL
    },
    {
      path:'/minejmx',
      component:MineJmx
    },
    {
      path:"/balabce",
      component:balabce
    },
    {
      path:"/explain",
      component:explain
    },
    {
      path:"/discounts",
      component:discounts
    },
    {
      path:"/Reset",
      component:ResetA_c
    },
    {
      path:"/explain_hb",
      component:explainHb
    },
    {
      path:"/explain_ye",
      component:yve
    },
    {
      path:"/jifen",
      component:jifen
    },
    {
      path:"/jifenshuoming",
      component:jifenSM
    },
    {
      path:"/indent",
      component:indent
    },
    {
      path:"/serve",
      component:serve
    },
    {
      path:"/svip",
      component:svip
    },
    {
      path:"/restaurant",
      component:restaurant,
      children:[
        {
           path:'',
          redirect:"restaurantgoodslist"
        },
        {
          path:'restaurantgoodslist',
          name:'restaurantgoodslist',
          component:restaurantgoodslist
        },
        {
          path:'restaurantrate',
          name:'restaurantrate',
          component:restaurantrate
        },
       ]
        },
    {
      path:'/order',
      component:router_c
    },
    {
      path:'/select',
      component:select
    },
    {
      path:'/site',
      component:site
    },
    {
      path:'/searchA_c',
      component:search_c
    },
    {
      path:'/remark',
      component:remark
    },
    {
      path:'/invoice',
      component:invoice_c
    },
    {
      path:'/member',
      component:member_c
    }


  ]
})
