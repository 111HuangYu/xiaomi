import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/welcome'
    },{
        path: '/welcome',
        name: 'Welcome',
        meta: { show: true },
        component: () => import('@/pages/welcome'),
    },{
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home'),
    },{
        path: '/book',
        name: 'Book',
        component: () => import('@/pages/book'),
    },{
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: () => import('@/pages/shoppingCart'),
    }
]

const router = new VueRouter({
    routes
})

export default router