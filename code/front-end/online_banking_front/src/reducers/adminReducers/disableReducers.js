import{
    ADMIN_DISABLE_REQUEST,
    ADMIN_DISABLE_SUCCESS,
    ADMIN_DISABLE_FAIL

}from "../../constants/adminConstants/disableConstants";


export const disableReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_DISABLE_REQUEST:
        return { loading: true };
      case ADMIN_DISABLE_SUCCESS:
        return {
          loading: false,
          response: action.payload,
          isUserList : true,
        };
      case ADMIN_DISABLE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };