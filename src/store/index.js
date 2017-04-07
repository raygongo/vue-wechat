import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as type from './mutation'
import cart from './modules/cart'
import homeList from './modules/homeList'

Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    data:'我是状态管理vuex上的数据aaaa',
    loading: false,
    direction: 'forward',
  },
  actions,
  getters,
  mutations:{
    addCount(state,payload){
      state.data += payload.name;
    },
    [type.SET_DIRECTION](state,direction){
      state.direction = direction
    }
  },
  modules: {
    cart,
    homeList
  }
})
