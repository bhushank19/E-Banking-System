import {
  USER_APPOINTMENT_FAIL,
  USER_APPOINTMENT_REQUEST,
  USER_APPOINTMENT_SIGNOUT,
  USER_APPOINTMENT_SUCCESS,
} from "../constants/appointmentContants";

export const scheduleAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_APPOINTMENT_REQUEST:
      return { loading: true };
    case USER_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        scheduleAppointmentSuccess : true,
      };
    case USER_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
