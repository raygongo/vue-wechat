import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue'
import Two from '@/page/two.vue'
import Three from '@/page/three.vue'
import Four from '@/page/four.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/two',
            name: 'Two',
            component: Two
        },
        {
            path: '/three',
            name: 'three',
            component: Three
        },
        {
            path: '/four',
            name: 'Four',
            component: Four
        }

    ]
})