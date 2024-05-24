import {
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from '../action'

const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return { loading: true }
    case DELETE_PRODUCT_SUCCESS:
      return { loading: false, success: true }
    case DELETE_PRODUCT_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default productDeleteReducer
