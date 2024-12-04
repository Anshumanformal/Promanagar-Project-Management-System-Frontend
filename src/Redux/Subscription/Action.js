import api from '../../config/api'
import { GET_USER_SUBSCRIPTION_FAILURE, GET_USER_SUBSCRIPTION_REQUEST, GET_USER_SUBSCRIPTION_SUCCESS, UPGRADE_SUBSCRIPTION_FAILURE, UPGRADE_SUBSCRIPTION_REQUEST, UPGRADE_SUBSCRIPTION_SUCCESS } from './ActionTypes';

export const getUserSubscription = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_SUBSCRIPTION_REQUEST })
    try {
      const response = await api.get("/api/subscriptions/user", {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      console.log("user subscriptions fetched successfully", response.data)
      dispatch({
        type: GET_USER_SUBSCRIPTION_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      console.log("error: ", error)
      dispatch({
        type: GET_USER_SUBSCRIPTION_FAILURE,
        error : error.message
      })
    }
  }
}

export const upgradeSubscription = ({planType}) => {
    return async (dispatch) => {
      dispatch({ type: UPGRADE_SUBSCRIPTION_REQUEST })
      try {
        const response = await api.patch("/api/subscriptions/upgrade", null, {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("jwt")}`
          },
          params : {
            planType : planType
          }
        })
        console.log("upgrade subscription done successfully", response.data)
        dispatch({
          type: UPGRADE_SUBSCRIPTION_SUCCESS,
          payload: response.data,
        })
      } catch (error) {
        console.log("error: ", error)
        dispatch({
            type: UPGRADE_SUBSCRIPTION_FAILURE,
            error : error.message
          })
      }
    }
  }