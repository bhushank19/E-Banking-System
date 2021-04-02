import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userSignupReducer, userSigninReducer, updateprofileReducer ,getUserDataReducer } from "./reducers/userReducers";
import { transferBetweenAccountsReducer } from "./reducers/transferReducers";
import { primaryAccountReducer,savingsAccountReducer } from "./reducers/accountsReducers";
import { addEditRecipientReducer, getRecipientListReducer , toSomeOneElseReducer} from "./reducers/transferReducers";
import { scheduleAppointmentReducer } from "./reducers/appointmentReducers";
import { appointmentReducer } from "./reducers/adminReducers/appointmentReducers";
import { disableReducer } from "./reducers/adminReducers/disableReducers";


import logger from "redux-logger";
import thunk from "redux-thunk";



const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  updateprofile: updateprofileReducer,
  getUserDataR: getUserDataReducer,
  betweenAccounts : transferBetweenAccountsReducer,
  saveEditRecipient : addEditRecipientReducer,
  getRecipientList : getRecipientListReducer,
  toSomeOneElse : toSomeOneElseReducer,
  scheduleAppointment : scheduleAppointmentReducer,
  primaryAccountR: primaryAccountReducer,
  savingsAccountR: savingsAccountReducer,
  appointmentList : appointmentReducer,
  disableUser : disableReducer
});

let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
