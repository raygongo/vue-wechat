import * as type from '../mutation';

const mutations = {
    [type.ADD_CART](state,payload){
      state.count += payload.number;
    }
}
const state ={
    count:100
}
export default {
  mutations,
  state
}
