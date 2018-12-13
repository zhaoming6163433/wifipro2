import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home' //首页路由
import info from '@/view/info'
import infoen from '@/view/infoen'
import searchtimezone from '@/view/searchtimezone'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/info',
            name: 'info',
            component: info
        },
        {
            path: '/infoen',
            name: 'infoen',
            component: infoen
        },
        {
            path: '/searchtimezone',
            name: 'searchtimezone',
            component: searchtimezone
        }
    ]
})
