// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ajax from './Ajax/ajax'
import store from './store'
import * as type from './store/mutation'

// allowTouch

// const vueAlloyTouch = require('./lib/alloy_touch.vue');
// Vue.use(vueAlloyTouch);
var AlloyTouch = require('./lib/alloy_touch.js');
var Transform = require('./lib/transform.js');

function _getOption(value, defaultValue) {
    return value == undefined ? defaultValue : value
}

function noop() {

}

function getAlloyTouchConfig(el, value) {

    var options = value.options || {}
    var methods = value.methods || {};
    var result = {
        touch: el, //反馈触摸的dom
        target: el, //运动的对象
        bindSelf: _getOption(options.bindSelf, false),
        property: _getOption(options.property, 'translateY'), //被运动的属性
        vertical: _getOption(options.vertical, 1), //不必需，默认是true代表监听竖直方向touch
        min: _getOption(options.min, 0), //不必需,运动属性的最小值
        max: _getOption(options.max, 0), //不必需,滚动属性的最大值
        sensitivity: _getOption(options.sensitivity, 1), //不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: _getOption(options.factor, 1), //不必需,表示触摸位移与被运动属性映射关系，默认值是1
        spring: _getOption(options.spring, 1), //不必需,是否有回弹效果。默认是true
        step: _getOption(options.step, 45), //用于校正到step的整数倍
        tap: methods.tap || noop,
        pressMove: methods.pressMove || noop,
        change: methods.change || noop,
        touchEnd: methods.touchEnd || noop,
        touchStart: methods.touchStart || noop,
        touchMove: methods.touchMove || noop,
        touchCancel: methods.touchCancel || noop,
        reboundEnd: methods.reboundEnd || noop,
        animationEnd: methods.animationEnd || noop,
        correctionEnd: methods.correctionEnd || noop
    }
    if (value.min != undefined) {
        result.min = value.min;
    }
    if (value.max != undefined) {
        result.max = value.max;
    }
    if (!!options.touch) {
        var touchEl = el.querySelector(options.touch);
        result.touch = touchEl || el;
    }

    if (!!options.target) {
        var target = el.querySelector(options.target);
        result.target = target || el;
    }

    return result;
}

let directiveBinding = {
    bind: function(el, binding) {
        //注册时的赋值 value, el已经挂载
        var options = getAlloyTouchConfig(el, binding.value);
        Transform(options.target);
        el.__alloytouch__handle = new AlloyTouch(options);
    },
    update: function(el, binding) {
        var value = binding.value;
        if (!el.__alloytouch__handle) {
            return;
        }
        if (value.min != undefined) {
            el.__alloytouch__handle.min = value.min;
        }
        if (value.max != undefined) {
            el.__alloytouch__handle.max = value.max;
        }
    },
    unbind: function(el) {
        el.__alloytouch__handle = null;
    }
}
Vue.directive('alloytouch', directiveBinding)


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