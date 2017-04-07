/**
 * Created by Administrator on 2017/4/5 0005.
 */
import * as type from '../mutation';
import Ajax from '../../Ajax/ajax';
// 数据
const state ={
  topicsData : [],
}
// 操作
const mutations = {
  [type.SET_TOPICS_DATA](state,payload){
    console.log('mutations datas')
    state.topicsData = state.topicsData.concat(payload.topicsData);
  }
}
// 发送请求
const actions = {
  [type.ADD_TOPICS_DATA](context){
    console.log(context)
    Ajax({
      url:'/topics',
      success:(res)=>{
        context.commit(type.SET_TOPICS_DATA,{topicsData:res.data.data})
      }
    })
  }
}
export default {
  state,
  mutations,
  actions,
}
