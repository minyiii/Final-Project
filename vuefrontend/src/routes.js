import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Posts from './views/Posts'
import Login from './views/Login2'
import Logout from './views/Logout'
import Register from './views/Register'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts,
            meta: {
                requiresLogin: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
    ]
})