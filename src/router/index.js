import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Hub from '../views/Hub.vue'
import Class from '../views/Class.vue'
import Stream from '../views/Stream.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/hub',
    name: 'Hub',
    component: Hub
  },
  {
    path: '/class/:id',
    name: 'Class',
    component: Class
  },
  {
    path: '/stream/:id',
    name: 'Stream',
    component: Stream
  }
]

const router = new VueRouter({
  routes,
  beforeEnter: (to, from, next) => {
    const cr = router.currentRoute
    console.log(to, from)
    if (cr != '/' || cr != '/login') {
      if (this.$auth.currentUser) {
        next()
        return;
      } else {
        router.push('/login')
        next()
      }
    }
  }
})

export default router
