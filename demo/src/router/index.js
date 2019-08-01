import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Filtrate from "../pages/Filtrate/FootFiltrate"
export default new Router({
  routes: [
    {path:"/", component:Filtrate},
  ]
})
