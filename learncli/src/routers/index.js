import vueRouter from "vue-router"
import vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/Name'

vue.use(vueRouter)

const router = new vueRouter({
  routes : [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path : '/user/:name',
      component:User
    }
  ]
})

export default router