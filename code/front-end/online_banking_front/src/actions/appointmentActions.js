import {
  USER_APPOINTMENT_FAIL,
  USER_APPOINTMENT_REQUEST,
  USER_APPOINTMENT_SIGNOUT,
  USER_APPOINTMENT_SUCCESS,
} from "../constants/appointmentContants";
import axios from "axios";

export const scheduleAppointment = (date, location,description, userName) => {
  return (dispatch) => {
    dispatch({
      type: USER_APPOINTMENT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      date, 
      location,
      description,
    };
    const url = "http://localhost:8080/appointment/create/"+userName
    axios
      .post(url, body, header)
      .then((response) => {
        alert("Appointment Scheduled")
        dispatch({
          type: USER_APPOINTMENT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_APPOINTMENT_FAIL,
          payload: error,
        });
      });
  };
};