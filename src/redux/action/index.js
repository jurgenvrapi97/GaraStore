export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE'

export const logout = () => ({
  type: LOGOUT,
})

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const login = (email, password) => {
  return (dispatch) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Login failed')
        }
      })
      .then((data) => {
        console.log('Received data:', data)
        dispatch(loginSuccess(data))
      })
      .catch((error) => {
        console.log('Caught error:', error)
        dispatch(loginFailure(error.toString()))
      })
  }
}

//prodotti
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
})

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
})

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
})

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    fetch('/api/products')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to fetch products')
        }
      })
      .then((data) => {
        dispatch(fetchProductsSuccess(data))
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.toString()))
      })
  }
}
export const addProductRequest = () => ({
  type: ADD_PRODUCT_REQUEST,
})

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
})

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
})

export const addProduct = (product, token) => {
  return (dispatch) => {
    dispatch(addProductRequest())
    fetch('/api/products', {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
      },
      body: product,
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to add product')
        }
      })
      .then((data) => {
        dispatch(addProductSuccess(data))
      })
      .catch((error) => {
        dispatch(addProductFailure(error.toString()))
      })
  }
}

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    ...product,
    quantity: 1,
  },
})

export const clearCart = () => ({
  type: CLEAR_CART,
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
})

export const updateProduct = (id, updates, token) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT })

  try {
    const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(updates),
    })

    if (!response.ok) {
      throw new Error('Failed to update product')
    }

    const data = await response.json()

    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILURE, error: error.toString() })
  }
}

export const deleteProduct = (id, token) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT })

  try {
    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete product')
    }

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id })
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, error: error.toString() })
  }
}
