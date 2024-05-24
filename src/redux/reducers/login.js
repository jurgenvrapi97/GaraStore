import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action'

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
}

const loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: true,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

export default loginreducer
