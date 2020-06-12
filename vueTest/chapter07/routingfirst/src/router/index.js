import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Admin from '../views/admin/Admin.vue'
import ProductList from '../views/admin/ProductList.vue'
import ProductInsert from '../views/admin/ProductInsert.vue'
import ProductEdit from '../views/admin/ProductEdit.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      { path: 'list', name: 'productlist', component: ProductList},
      { path: 'insert', name: 'productinsert', component: ProductInsert},
      { path: 'edit/:id', name: 'productedit', component: ProductEdit}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
