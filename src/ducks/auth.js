const AUTO_LOGIN = 'AUTH/AUTH_AUTO_LOGIN'
const SIGNUP_REQUEST = 'AUTH/SIGNUP_REQUEST'
const SIGNUP_SUCCESS = 'AUTH/SIGNUP_SUCCESS'
const SIGNUP_FAILURE = 'AUTH/SIGNUP_FAILURE'
const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE'
const LOGOUT = 'AUTH/LOGOUT'

const initialState = {
  user: null,
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTO_LOGIN:
      return {
        ...state, isLoading: false, error: action.error
      };
    case SIGNUP_REQUEST:
      return {
        ...state, isLoading: false, error: action.error
      };
    case LOGIN_REQUEST:
      return {
        ...state, isLoading: false, error: action.error
      };
    case SIGNUP_SUCCESS:
      return {
        ...state, isLoading: false, error: action.error
      };
    case LOGIN_SUCCESS:
      return {
        ...state, isLoading: false, error: action.error
      };
    case SIGNUP_FAILURE:
      return {
        ...state, isLoading: false, error: action.error
      };
    case LOGIN_FAILURE:
      return {
        ...state, isLoading: false, error: action.error
      };
    case LOGOUT:
      return {
        ...state, user: null
      };
    default:
      return state;
  }
}

export const signup = (email, password) => ({
  type: SIGNUP_REQUEST,
  email,
  password
})

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  email,
  password
})

export const logout = () => ({
  type: LOGOUT
})