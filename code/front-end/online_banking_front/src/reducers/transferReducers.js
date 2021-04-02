import {
  TRANSFER_BETWEEN_ACCOUNT_FAIL,
  TRANSFER_BETWEEN_ACCOUNT_REQUEST,
  TRANSFER_BETWEEN_ACCOUNT_SUCCESS,
  TRANSFER_EDITADDRECIPIENT_FAIL,
  TRANSFER_EDITADDRECIPIENT_REQUEST,
  TRANSFER_EDITADDRECIPIENT_SIGNOUT,
  TRANSFER_EDITADDRECIPIENT_SUCCESS,
  TRANSFER_TOSOMEONELSE_FAIL,
  TRANSFER_TOSOMEONELSE_REQUEST,
  TRANSFER_TOSOMEONELSE_SIGNOUT,
  TRANSFER_TOSOMEONELSE_SUCCESS,
  TRANSFER_ADDRECIPIENT_FAIL,
  TRANSFER_ADDRECIPIENT_REQUEST,
  TRANSFER_ADDRECIPIENT_SUCCESS,
  TRANSFER_ADDRECIPIENT_SIGNOUT,
} from "../constants/transferConstants";

export const transferBetweenAccountsReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSFER_BETWEEN_ACCOUNT_REQUEST:
      return { loading: true };
    case TRANSFER_BETWEEN_ACCOUNT_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        isTransferSuccess : true,
      };
    case TRANSFER_BETWEEN_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addEditRecipientReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSFER_EDITADDRECIPIENT_REQUEST:
      return { loading: true };
    case TRANSFER_EDITADDRECIPIENT_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        saveRecipientSuccess : true,
      };
    case TRANSFER_EDITADDRECIPIENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getRecipientListReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSFER_ADDRECIPIENT_REQUEST:
      return { loading2: true };
    case TRANSFER_ADDRECIPIENT_SUCCESS:
      return {
        loading: false,
        response2: action.payload,
        getRecipientListSuccess : true,
      };
    case TRANSFER_ADDRECIPIENT_FAIL:
      return { loading: false, error2: action.payload };
    default:
      return state;
  }
};

export const toSomeOneElseReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSFER_TOSOMEONELSE_REQUEST:
      return { loading: true };
    case TRANSFER_TOSOMEONELSE_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        toSomeOneElseSuccess : true,
      };
    case TRANSFER_EDITADDRECIPIENT_FAIL:
      return {
        loading: false, error: action.payload,
        toSomeOneElseFail : true,
      };
    default:
      return state;
  }
};
