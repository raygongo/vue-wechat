// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ajax from './Ajax/ajax'
import store from './store'
import * as type from './store/mutation'


Vue.config.productionTip = false
Vue.prototype.$ajax = Ajax;
require('./styles/reset.css')
require('./styles/transition.less')

// // simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to, from, next) => {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    if (toIndex) {
        if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
            store.commit(type.SET_DIRECTION, 'forward')
        } else {
            store.commit(type.SET_DIRECTION, 'reverse')
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit(type.SET_DIRECTION, 'forward')
    }
    next();

})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})