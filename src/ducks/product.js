// src/ducks/product.js
const GET_PRODUCTS_REQUEST = 'PRODUCT/GET_PRODUCTS_REQUEST'
const GET_PRODUCTS_SUCCESS = 'PRODUCT/GET_PRODUCTS_SUCCESS'
const GET_PRODUCTS_FAILURE = 'PRODUCT/GET_PRODUCTS_FAILURE'

const initialState = {
  products: null,
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state, isLoading: true, error: null
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state, isLoading: false, user: action.products
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state, isLoading: false, error: action.error
      };
    default:
      return state;
  }
}

export const getProducts = () => ({
  type: GET_PRODUCTS_REQUEST
})