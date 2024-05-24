import { configureStore, combineReducers } from '@reduxjs/toolkit'

import loginreducer from '../reducers/login'
import productReducer from '../reducers/product.js'
import productAddReducer from '../reducers/addProduct.js'
import cartReducer from '../reducers/Cart.js'
import updateReducer from '../reducers/updateP.js'
import productDeleteReducer from '../reducers/deleteProduct.js'

const mainReducer = combineReducers({
  login: loginreducer,
  product: productReducer,
  addProduct: productAddReducer,
  cart: cartReducer,
  update: updateReducer,
  delete: productDeleteReducer,
})
const store = configureStore({
  reducer: mainReducer,
})

export default store
