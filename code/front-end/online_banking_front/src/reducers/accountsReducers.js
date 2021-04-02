
import{
    USER_PRIMARYACCOUNT_REQUEST,
    USER_PRIMARYACCOUNT_SUCCESS,
    USER_PRIMARYACCOUNT_FAIL,
    USER_SAVINGSACCOUNT_REQUEST,
    USER_SAVINGSACCOUNT_SUCCESS,
    USER_SAVINGSACCOUNT_FAIL

}from "../constants/accountsConstants";



export const primaryAccountReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_PRIMARYACCOUNT_REQUEST:
        return { loading: true };
      case USER_PRIMARYACCOUNT_SUCCESS:
        return {
          loading: false,
          response2: action.payload,
          isPrimaryAccountListSuccess : true,
        };
      case USER_PRIMARYACCOUNT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  
export const savingsAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SAVINGSACCOUNT_REQUEST:
      return { loading: true };
    case USER_SAVINGSACCOUNT_SUCCESS:
      return {
        loading: false,
        response2: action.payload,
        isSavingsAccountListSuccess : true,
      };
    case USER_SAVINGSACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};