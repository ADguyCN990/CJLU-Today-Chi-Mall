import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/goods',
        children: [
            {
                path: '/goods',
                component: () => import('../views/Goods'),
                redirect: '/index',
                children: [
                    {
                        path: '/index',
                        component: () => import('../views/DefaultResult')
                    },
                    {
                        path: '/searchResult',
                        component: () => import('../views/SearchResult')
                    }
                ]
            },
            {
                path: '/goodsDetail/:id',
                component: () => import('../views/GoodsDetail')
            },
            {
                path: '/cart',
                component: () => import('../views/Cart')
            },
            {
                path: '/login',
                component: () => import('../views/Login')
            },
            {
                path: '/register',
                component: () => import('../views/Register')

            },
            {
                path: '/personal',
                component: () => import('../views/Personal'),
                redirect: '/personalManage',
                children: [
                    {
                        path: '/personalManage',
                        component: () => import('../components/PersonalManage'),
                    },
                    {
                        path: '/orderManage',
                        component: () => import('../components/OrderManage'),
                    },
                    {
                        path: '/storeManage',
                        component: () => import('../components/StoreManage'),
                    },
                    {
                        path: '/system/seller',
                        component: () => import('../components/SystemManage/SystemSeller'),
                    },
                    {
                        path: '/system/category',
                        component: () => import('../components/SystemManage/SystemCategory'),
                    },
                    {
                        path: '/system/recommend',
                        component: () => import('../components/SystemManage/SystemRecommend'),
                    },
                    {
                        path: '/system/carousel',
                        component: () => import('../components/SystemManage/SystemCarousel'),
                    },
                ]
            },
        ]

    },
]

const router = new VueRouter({
    routes
})

export default router
