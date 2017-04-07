import * as types from './mutation'

export const addToCart = ({commit},product)=>{
  commit(types.ADD_CART,{number:product.number})
}
