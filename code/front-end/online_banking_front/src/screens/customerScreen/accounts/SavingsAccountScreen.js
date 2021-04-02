import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { savingsAccountAction } from "../../../actions/accountsActions";

const SavingsAccountScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName, response } = userSignin;

  const dispatch = useDispatch();
  const savingsAccountT = useSelector((store) => store.savingsAccountR);
  const {
    loading,
    response2,
    error,
    isSavingsAccountListSuccess,
  } = savingsAccountT;

  useEffect(() => {
    dispatch(savingsAccountAction(userName));
  }, []);
  useEffect(() => {}, [loading, response2, error, isSavingsAccountListSuccess]);

  const onCancel = () => {
    props.history.push('/userhome')
  };

  return (
    <div>
      <br/>
       <center>
      <h2>
        Savings Transactions List
      </h2>
      </center>
      <hr/>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Amount</th>
            <th>Account Date</th>
            <th>Account Description</th>
            <th>Account Status</th>
            <th>Account Available_balance</th>
          </tr>
        </thead>
        <tbody>
          {response2 &&
            response2.map((account) => {
              return (
                <tr>
                  <td>{account.id}</td>
                  <td>{account.amount}</td>
                  <td>{account.date}</td>
                  <td>{account.description}</td>
                  <td>{account.status}</td>
                  <td>{account.availableBalance}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <center>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
    </div>
  );
};

export default SavingsAccountScreen;
