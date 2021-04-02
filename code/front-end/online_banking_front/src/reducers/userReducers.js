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

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        isSignupSuccess: action.payload.role,
      };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        userId: action.payload.userId,
        userName: action.payload.userName,
        firstName : action.payload.firstName,
        lastName : action.payload.lastName,
        email : action.payload.email,
        password : action.payload.password,
        role: action.payload.role,
        phone: action.payload.phone,
        primaryBalance: action.payload.primaryAccount.accountBalance,
        islogin: true,
      };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};


export const updateprofileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        response2: action.payload,
        updateprofileSuccess: true,
      };
    case  USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserDataReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSFER_BALANCE_FATCH_REQUEST:
      return { loading: true };
    case TRANSFER_BALANCE_FATCH_SUCCESS:
      return {
        loading: false,
        responseData: action.payload,
        getUserDataSuccess : true,
      };
    case TRANSFER_BALANCE_FATCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// email: "amit@gmail.com"
// enabled: true
// firstName: "Amit"
// lastName: "Patil"
// password: "Amit@123"
// phone: "8806014080"
// primaryAccount: {id: 2, accountNumber: 1003, accountBalance: 8440}
// role: "CUSTOMER"
// savingsAccount: {id: 2, accountNumber: 1004, accountBalance: 26400}
// userId: 2
// userName: "amit"
