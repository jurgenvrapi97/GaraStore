import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from '../action'

const initialState = {
  loading: false,
  product: {},
  error: '',
}

const productAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: '',
      }
    case ADD_PRODUCT_FAILURE:
      return {
        loading: false,
        product: {},
        error: action.payload,
      }

    default:
      return state
  }
}

export default productAddReducer
