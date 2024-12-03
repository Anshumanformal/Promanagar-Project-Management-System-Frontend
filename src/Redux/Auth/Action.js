import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import { API_BASE_URL } from "../../config/api"
import axios from "axios"

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST })
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt)
      dispatch({ type: REGISTER_SUCCESS, payload: data })
    }
    console.log("registration successfull---", data)
  } catch (error) {
    console.log("error: ", error)
    dispatch({ 
      type: REGISTER_FAILURE, 
      error: error.message 
    })
  }
}

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt)
      dispatch({ type: LOGIN_SUCCESS, payload: data })
    }
    console.log("login successfull---", data)
  } catch (error) {
    console.log("error: ", error)
    dispatch({ 
      type: LOGIN_FAILURE, 
      error: error.message 
    })
  }
}

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST })
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
    
    dispatch({ type: GET_USER_SUCCESS, payload: data })
    console.log("fetch user successfull---", data)
  } catch (error) {
    console.log("error: ", error)
    dispatch({ 
      type: GET_USER_FAILURE, 
      error: error.message 
    })
  }
}

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT })
  localStorage.clear()
}
