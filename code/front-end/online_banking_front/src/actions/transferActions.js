import {
  TRANSFER_BETWEEN_ACCOUNT_FAIL,
  TRANSFER_BETWEEN_ACCOUNT_REQUEST,
  TRANSFER_BETWEEN_ACCOUNT_SUCCESS,
  TRANSFER_EDITADDRECIPIENT_FAIL,
  TRANSFER_EDITADDRECIPIENT_REQUEST,
  TRANSFER_EDITADDRECIPIENT_SUCCESS,
  TRANSFER_TOSOMEONELSE_FAIL,
  TRANSFER_TOSOMEONELSE_REQUEST,
  TRANSFER_TOSOMEONELSE_SUCCESS,
  TRANSFER_ADDRECIPIENT_FAIL,
  TRANSFER_ADDRECIPIENT_REQUEST,
  TRANSFER_ADDRECIPIENT_SUCCESS,
} from "../constants/transferConstants";
import axios from "axios";

export const betweenAccounts = (transferFrom, transferTo, amount, userName) => {
  return (dispatch) => {
    dispatch({
      type: TRANSFER_BETWEEN_ACCOUNT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      transferFrom,
      transferTo,
      amount,
      userName,
    };
    const url = "http://localhost:8080/transfer/betweenAccounts";
    axios
      .post(url, body, header)
      .then((response) => {
        alert("Amount Transfer Successfully")
        dispatch({
          type: TRANSFER_BETWEEN_ACCOUNT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TRANSFER_BETWEEN_ACCOUNT_FAIL,
          payload: error,
        });
      });
  };
};

export const addEditRecipient = ( userName,name,email,phone,accountNumber,description) => {
  return (dispatch) => {
    dispatch({
      type: TRANSFER_EDITADDRECIPIENT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      userName,
      name,
      email,
      phone,
      accountNumber,
      description
    };
    const url = "http://localhost:8080/transfer/recipient/save";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: TRANSFER_EDITADDRECIPIENT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TRANSFER_EDITADDRECIPIENT_FAIL,
          payload: error,
        });
      });
  };
};

export const getRecipientList = ( userName) => {
  return (dispatch) => {
    dispatch({
      type: TRANSFER_ADDRECIPIENT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
    };
    const url = "http://localhost:8080/transfer/recipient/"+userName
    axios
      .get(url, body, header)
      .then((response) => {
        dispatch({
          type: TRANSFER_ADDRECIPIENT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TRANSFER_ADDRECIPIENT_FAIL,
          payload: error,
        });
      });
  };
};

export const toSomeOneElse = (userName, recipientName, accountType, amount) => {
  return (dispatch) => {
    dispatch({
      type: TRANSFER_TOSOMEONELSE_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      recipientName, 
      accountType,
      amount,
    };
    const url = "http://localhost:8080/transfer/toSomeoneElse/"+userName;
    axios
      .post(url, body, header)
      .then((response) => {
        alert("Amount Transfer Successfully")
        dispatch({
          type: TRANSFER_TOSOMEONELSE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TRANSFER_TOSOMEONELSE_FAIL,
          payload: error,
        });
      });
  };
};


