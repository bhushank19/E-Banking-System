import{
    ADMIN_APPOINTMENT_REQUEST,
    ADMIN_APPOINTMENT_SUCCESS,
    ADMIN_APPOINTMENT_FAIL

}from "../../constants/adminConstants/appointmentConstants";



export const appointmentReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_APPOINTMENT_REQUEST:
        return { loading: true };
      case ADMIN_APPOINTMENT_SUCCESS:
        return {
          loading: false,
          response: action.payload,
          isAppointmentList : true,
        };
      case ADMIN_APPOINTMENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };