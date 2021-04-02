import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { disableAction } from "../../actions/adminActions/disableAction";
import { Link } from "react-router-dom";
import axios from "axios";

const UserAccountsScreen = (props) => {

  const dispatch = useDispatch();
  const disable = useSelector((store) => store.disableUser);
  const { loading, response, error, isUserList } = disable;

  useEffect(() => {
    dispatch(disableAction());
  }, []);
  useEffect(() => {}, [loading, response, error, isUserList]);

  const onDisable = (userId) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    };
    const url = "http://localhost:8080/admin/disable/" + userId;
    axios
      .get(url, header)
      .then((response) => {
        dispatch(disableAction());
        console.log(response.status);
      })
      .catch((error) => {
        alert("error in calling APT : " + error);
      });
  };


  const onEnable = (userId) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    };
    const url = "http://localhost:8080/admin/enable/" + userId;
    axios
      .get(url, header)
      .then((response) => {
        dispatch(disableAction());
        console.log(response.status);
      })
      .catch((error) => {
        alert("error in calling APT : " + error);
      });
  };

  const onCancel = () => {
    props.history.push("/adminhome");
  };



  return (
    <div>
    <br/>
    <center>
    <h2>User's List</h2>
    </center>
    <hr/>
    <br />
    <br />
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Status</th>
          <th>Disable</th>
          <th>Enable</th>
        </tr>
      </thead>
      <tbody>
        {response &&
          response.map((disable) => {
            return (
              <tr>
                <td>{disable.userId}</td>
                <td>{disable.email}</td>
                <td>{disable.firstName}</td>
                <td>{disable.lastName}</td>
                <td>{disable.phone}</td>
                <td>{disable.role}</td>
                {  disable.enabled === true &&
                <td>Active</td>}
                { disable.enabled === false &&
                <td>Not Active</td>}
                <td>
                  <Link onClick={() => onDisable(disable.userId)}>
                    Disable User
                  </Link>
                </td>
                <td>
                  <Link onClick={() => onEnable(disable.userId)}>
                    Enable User
                  </Link>
                </td>
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

export default UserAccountsScreen;
