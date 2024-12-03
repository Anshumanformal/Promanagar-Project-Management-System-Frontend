import api from "../../config/api"
import * as actionTypes from "./ActionTypes"

export const createIssue = (issueData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST })
    try {
      const response = await api.post("/api/issues", issueData)
      dispatch({
        type: actionTypes.CREATE_ISSUE_SUCCESS,
        issue: response.data,
      })
      console.log("issue created successfully", response)
    } catch (error) {
      console.log("error: ", error.response.data)
      dispatch({
        type: actionTypes.CREATE_ISSUE_FAILURE,
        error: error.message,
      })
    }
  }
}

export const fetchIssues = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST })
    try {
      const response = await api.get(`/api/issues/project/${id}`)
      console.log("issues fetched successfully")
      dispatch({
        type: actionTypes.FETCH_ISSUES_SUCCESS,
        issues: response.data,
      })
    } catch (error) {
      console.log("error: ", error)
      dispatch({
        type: actionTypes.FETCH_ISSUES_FAILURE,
        error: error.message,
      })
    }
  }
}

export const fetchIssueById = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST })
    try {
      const response = await api.get(`/api/issues/${id}`)
      console.log("issues fetched by id successfully", response.data)
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
        issues: response.data,
      })
    } catch (error) {
      console.log("error: ", error)
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
        error: error.message,
      })
    }
  }
}

export const updateIssueStatus = ({ id, status }) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST })
    try {
      const response = await api.put(`/api/issues/${id}/status/${status}`)
      console.log("issues status updated successfully", response.data)
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
        issues: response.data,
      })
    } catch (error) {
      console.log("error: ", error)
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
        error: error.message,
      })
    }
  }
}

export const deleteIssue = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST })
    try {
      const response = await api.delete("/api/issues/" + id)
      dispatch({
        type: actionTypes.DELETE_ISSUE_SUCCESS,
        issue: response.data,
      })
      console.log("issue deleted successfully", response)
    } catch (error) {
      console.log("error: ", error)
      dispatch({
        type: actionTypes.DELETE_ISSUE_FAILURE,
        error: error.message,
      })
    }
  }
}

export const assignUserToIssue = ({ issueId, userId }) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.ASSIGN_ISSUE_TO_USER_REQUEST })
    try {
      const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`)
      console.log("issue assigned to user successfully", response.data)
      dispatch({
        type: actionTypes.ASSIGN_ISSUE_TO_USER_SUCCESS,
        issues: response.data,
      })
    } catch (error) {
      console.log("error inside assignUserToIssue: ", error)
      dispatch({
        type: actionTypes.ASSIGN_ISSUE_TO_USER_FAILURE,
        error: error.message,
      })
    }
  }
}
