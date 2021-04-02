import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEditRecipient,
  getRecipientList,
} from "../../../actions/transferActions";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

const AddEditRecipientScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName } = userSignin;

  const saveEditRecipient = useSelector((store) => store.saveEditRecipient);
  const { loading, response, error, saveRecipientSuccess } = saveEditRecipient;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const getRecipientListReducer = useSelector(
    (store) => store.getRecipientList
  );
  const {
    loading2,
    response2,
    error2,
    getRecipientListSuccess,
  } = getRecipientListReducer;

  useEffect(() => {
    dispatch(getRecipientList(userName));
  }, []);
  useEffect(() => {}, [loading2, response2, error2, getRecipientListSuccess]);

  const onDelete = (recipientName) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    };
    const url =
      "http://localhost:8080/transfer/recipient/delete/" + recipientName;
    axios
      .delete(url, header)
      .then((response) => {
        dispatch(getRecipientList(userName));
        console.log(response.status);
      })
      .catch((error) => {
        alert("error in calling API : " + error);
      });
  };

  const onSaveEditRecipient = () => {
    console.log(userName);
    dispatch(
      addEditRecipient(userName, name, email, phone, accountNumber, description)
    );
   
  };
  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    dispatch(getRecipientList(userName));
    if (response && saveRecipientSuccess) {
      // user successfully got registered
      props.history.push("/addeditrecipient");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, saveRecipientSuccess]);

  const onCancel = () => {
    props.history.push('/userhome')
  };

  return (
    <div>
      <div>
        <br />
        <center>
          <h2>Add Recipient</h2>
        </center>
      </div>
      <hr/>
    <br/>
      <Form.Group>
        <div>
          <h5>Name : </h5>
        </div>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Form.Control>

        <div>
          <h5>Email : </h5>
        </div>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Form.Control>

        <div>
          <h5>Phone : </h5>
        </div>
        <Form.Control
          type="number"
          placeholder="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <div>
          <h5>Account Number : </h5>
        </div>
        <Form.Control
          type="number"
          placeholder="account Number"
          onChange={(e) => {
            setAccountNumber(e.target.value);
          }}
        />

        <div>
          <h5>Description : </h5>
        </div>
        <Form.Control
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <center>
          <Button variant="success" onClick={onSaveEditRecipient}>Add</Button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
      </Form.Group>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Recipient Name</th>
            <th>Recipient Email</th>
            <th>Recipient Phone</th>
            <th>Recipient Account Number</th>
            <th>Recipient Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {response2 &&
            response2.map((recipient) => {
              return (
                <tr>
                  <td>{recipient.name}</td>
                  <td>{recipient.email}</td>
                  <td>{recipient.phone}</td>
                  <td>{recipient.accountNumber}</td>
                  <td>{recipient.description}</td>
                  <td>
                    <Link onClick={() => onDelete(recipient.name)}>Delete</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default AddEditRecipientScreen;
