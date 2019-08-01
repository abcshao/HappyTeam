import Vue from 'vue'
import Router from 'vue-router'

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
    {path:"/",
      component:Filtrate},

  ]
})
