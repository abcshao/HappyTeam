import Vue from 'vue'
import Router from 'vue-router'
import DL from "../center/denglujmx"
import MineJmx from  "../center/minejmx"
import balabce from "../center/balance"
import explain from "../center/explain"
import discounts from "../center/discounts"
const home = ()=>import("@/pages/home/home")
const searchAddress = ()=>import("@/pages/searchAddress/searchAddress")
const shophome = ()=>import("@/pages/shophome/shophome")

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
       path:'/searchaddress/:city',
      name:'searchaddress',
      component:searchAddress
    }
    ,
    {
      path:'/shophome',
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
    }
  ]
})
