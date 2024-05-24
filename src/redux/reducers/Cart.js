import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../action'

const initialState = {
  cart: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { payload } = action
      const cartCopy = [...state.cart]

      const productIndex = cartCopy.findIndex(
        (product) => product.id === payload.id
      )

      if (productIndex !== -1) {
        cartCopy[productIndex].quantity -= 1
      } else {
        cartCopy.push(payload)
      }

      return {
        ...state,
        cart: cartCopy,
      }
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      }
    }

    default:
      return state
  }
}

export default cartReducer
