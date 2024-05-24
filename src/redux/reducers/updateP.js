import {
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
} from '../action'

const initialState = {
  product: null,
  loading: false,
  error: null,
}

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      }
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default updateReducer
