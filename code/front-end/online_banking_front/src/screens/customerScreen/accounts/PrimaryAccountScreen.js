import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { primaryAccountAction } from "../../../actions/accountsActions";

const PrimaryAccountScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName, response } = userSignin;

  const dispatch = useDispatch();
  const primaryAccountT = useSelector((store) => store.primaryAccountR);
  const {
    loading,
    response2,
    error,
    isPrimaryAccountListSuccess,
  } = primaryAccountT;

  useEffect(() => {
    dispatch(primaryAccountAction(userName));
  }, []);
  useEffect(() => {}, [loading, response2, error, isPrimaryAccountListSuccess]);

  const onCancel = () => {
    props.history.push('/userhome')
  };

  return (
    <div>
      <br/>
      <center>
      <h2>
        Primary Transactions List
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

export default PrimaryAccountScreen;
