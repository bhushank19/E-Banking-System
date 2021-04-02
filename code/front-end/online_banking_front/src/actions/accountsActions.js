import{
    USER_PRIMARYACCOUNT_REQUEST,
    USER_PRIMARYACCOUNT_SUCCESS,
    USER_PRIMARYACCOUNT_FAIL,
    USER_SAVINGSACCOUNT_REQUEST,
    USER_SAVINGSACCOUNT_SUCCESS,
    USER_SAVINGSACCOUNT_FAIL

}from "../constants/accountsConstants";
import axios from "axios";

export const primaryAccountAction = (userName) => {
    return (dispatch) => {
      dispatch({
        type: USER_PRIMARYACCOUNT_REQUEST,
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = {
      };
      const url = "http://localhost:8080/account/primaryAccount/"+userName
      axios
        .get(url, body, header)
        .then((response) => {
          dispatch({
            type: USER_PRIMARYACCOUNT_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: USER_PRIMARYACCOUNT_FAIL,
            payload: error,
          });
        });
    };
  };

  export const savingsAccountAction = (userName) => {
    return (dispatch) => {
      dispatch({
        type: USER_SAVINGSACCOUNT_REQUEST,
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = {
      };
      const url = "http://localhost:8080/account/savingsAccount/"+userName
      axios
        .get(url, body, header)
        .then((response) => {
          dispatch({
            type: USER_SAVINGSACCOUNT_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: USER_SAVINGSACCOUNT_FAIL,
            payload: error,
          });
        });
    };
  };
  