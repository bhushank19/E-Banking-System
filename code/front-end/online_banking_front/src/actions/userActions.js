import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAIL,
  TRANSFER_BALANCE_FATCH_FAIL,
  TRANSFER_BALANCE_FATCH_REQUEST,
  TRANSFER_BALANCE_FATCH_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

export const signOut = () => {
  return (dispatch) => {
    sessionStorage.removeItem("token");
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/signin";
  };
};

export const signup = (
  firstName,
  lastName,
  email,
  password,
  userName,
  phone
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      firstName,
      lastName,
      email,
      password,
      userName,
      phone,
    };
    const url = "http://localhost:8080/signup";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      password,
    };
    const url = "http://localhost:8080/signin";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};


export const updateProfile = (
  userNameO,
  userName,
  firstName,
  lastName,
  email,
  password,
  phone
) => {
  return (dispatch) => {
    dispatch({
      type:  USER_UPDATE_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      userName,
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    const url = "http://localhost:8080/user/update/"+userNameO;
    axios
      .post(url, body, header)
      .then((response) => {
        alert("Profile Updated Successfully")
        dispatch({
          type:  USER_UPDATE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type:  USER_UPDATE_FAIL,
          payload: error,
        });
      });
  };
};
export const getUserDataAction = (userName) => {
  return (dispatch) => {
    dispatch({
      type: TRANSFER_BALANCE_FATCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/user/getuser/'+userName
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: TRANSFER_BALANCE_FATCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: TRANSFER_BALANCE_FATCH_FAIL,
          payload: error,
        })
      })
  }
}
