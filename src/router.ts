import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import demoRoutes from './demoRoutes.js'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new Router({
  mode: 'history',
  routes
})


if (process.env.NODE_ENV === 'development') {
  //@ts-ignore
  import('vue-book')
    .then((VueComponentTree) => {
      router.addRoutes([
        VueComponentTree.createRoute({
          //@ts-ignore
          requireContext: require.context('./components', true, /Demo(.*).vue$/),
          path: '/demo',
          hideFileExtensions: false, // optional, hides file extensions in list.
        })
      ])
    });
}

export default router

