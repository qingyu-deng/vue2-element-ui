import Vue from 'vue';
import Router from 'vue-router';
// import { resolve } from 'core-js/fn/promise';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            hidden: true,
            // component: Home
            component: () => import('@/components/Login')  //官方推荐的路由懒加载
            // component: resolve => require(['@/components/Home'], resolve)  //异步组件的加载
        },
        {
            path: '*',
            name: '404',
            hidden: true,
            component: () => import('@/components/404')
        },
        {
            path: '/login',
            name: 'Login',
            hidden: true,
            component: () => import('@/components/Login')
        },
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa fa-users',
            redirect: '/home/student', //重定向
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/views/students/StudentList')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/views/students/InfoList')
                },
                // {
                //     path: '/home/infos',
                //     name: '信息管理',
                //     iconClass: 'fa fa-list',
                //     component: () => import('@/views/students/InfoLists')
                // },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/views/students/WorkList')
                },
                // {
                //     path: '/home/works',
                //     name: '作业管理',
                //     iconClass: 'fa fa-list-ul',
                //     component: () => import('@/views/students/WorkMent')
                // }
            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/views/dataAnalys/DataView')
                },
                {
                    path: '/home/map',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/views/dataAnalys/MapView')
                },
                {
                    path: '/home/scoremap',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/views/dataAnalys/ScoreMap')
                },
                {
                    path: '/home/work',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/views/dataAnalys/TraveMap')
                }
            ]
        },
        {
            path: '/home',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/users',
                    name: '权限配置',
                    iconClass: 'fa fa-user',
                    component: () => import('@/views/users/User')
                }
            ]
        }
    ],
    mode: 'history'
})