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
import account from "../center/account"
import history from "../center/history"
import past from "../center/past"
import amend from "../center/amendusername"
import site from "../center/site"
import add from "../center/add"
import member from "../center/member"
import redact from "../center/redact"
import countdown from "../center/countdown"
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
      path:'/account',
      component:account
    },
    {
      path:'/history',
      component:history
    },
    {
      path:'/past',
      component:past
    },
    {
      path:'/amend',
      component:amend
    },
    {
      path:'/site',
      component:site
    },
    {
      path:'/add',
      component:add
    },
    {
      path:'/member',
      component:member
    },
    {
      path:'/redact',
      component:redact
    },
    {
      path:'/countdown',
      component:countdown
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
    }

  ]
})
