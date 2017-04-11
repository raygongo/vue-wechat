import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue'
import Two from '@/page/two.vue'
import Three from '@/page/three.vue'
import Four from '@/page/four.vue'
import ArticleDetail from '@/page/ArticleDetail.vue'
Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
    console.log(savedPosition);
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
        return position
    }
}

export default new Router({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
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
        },
        {
            path: '/detail',
            name: 'detail',
            component: ArticleDetail,
            meta: {
                scrollToTop: true
            }
        }
    ]
})