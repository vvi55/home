import vueRouter from "vue-router"
import vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'

vue.use(vueRouter)

const router = new vueRouter({
  routes : [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    }
  ]
})

export default router