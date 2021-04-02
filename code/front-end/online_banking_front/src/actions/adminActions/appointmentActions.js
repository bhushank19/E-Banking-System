import{
    ADMIN_APPOINTMENT_REQUEST,
    ADMIN_APPOINTMENT_SUCCESS,
    ADMIN_APPOINTMENT_FAIL
}from "../../constants/adminConstants/appointmentConstants";
import axios from "axios"

export const appointmentAction = () => {
    return (dispatch) => {
      dispatch({
        type: ADMIN_APPOINTMENT_REQUEST,
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = {
      };
      const url = "http://localhost:8080/admin/appointment/all"
      axios
        .get(url, body, header)
        .then((response) => {
          dispatch({
            type: ADMIN_APPOINTMENT_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: ADMIN_APPOINTMENT_FAIL,
            payload: error,
          });
        });
    };
  };