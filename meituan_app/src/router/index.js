import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from "@/layout/DefaultPage.vue";
import Index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'default',
    component: DefaultPage,
    redirect: '/index',
    children: [{
        path: 'index',
        name: 'index',
        component: Index
    }, {
        path: 's/:name',
        name: 'goods',
        component: () =>
            import ('@/views/GoodsList.vue')
    }, {
        path: '/changecity',
        name: 'changecity',
        component: () =>
            import ('@/views/ChangeCity.vue')
    }]
}, {
    path: '/changeCity',
    redirect: 'changeCity',
    name: 'changeCity',
    component: () =>
        import ('@/views/ChangeCity.vue')
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('@/views/Login')
}, {
    path: '/register',
    name: 'register',
    component: () =>
        import ('@/views/Register')
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;