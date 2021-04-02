import{
    ADMIN_DISABLE_REQUEST,
    ADMIN_DISABLE_SUCCESS,
    ADMIN_DISABLE_FAIL
}from "../../constants/adminConstants/disableConstants";
import axios from "axios"

export const disableAction = () => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_DISABLE_REQUEST,
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = {
      };
      const url = "http://localhost:8080/admin/userlist"
      axios
        .get(url, body, header)
        .then((response) => {
          dispatch({
            type: ADMIN_DISABLE_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_DISABLE_FAIL,
            payload: error,
          });
        });
    };
  };