import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toSomeOneElse } from "../../../actions/transferActions";

const SomeoneElseAccountScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName } = userSignin;

  const toSomeOneElseReducer = useSelector((store) => store.toSomeOneElse);
  const {
    loading,
    response,
    error,
    toSomeOneElseSuccess,
    toSomeOneElseFail,
  } = toSomeOneElseReducer;

  const [recipientName, setRecipientName] = useState("");
  const [accountType, setAccountType] = useState("Primary");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && toSomeOneElseSuccess) {
      // user successfully got registered
      props.history.push("/tosomeoneelse");
    } else if (error && toSomeOneElseFail) {
      alert("Amount Transfer Failed")
    } else if (error) {
      // there is an error while making the API call
      alert("error while making API call");
    }
  }, [loading, response, error, toSomeOneElseSuccess, toSomeOneElseFail]);

  const onToSomeOneElse = () => {
    console.log(userName);
    dispatch(toSomeOneElse(userName, recipientName, accountType, amount));
  };

  const onCancel = () => {
    props.history.push('/userhome')
  };


  return (
    <div>
      <div>
        <br />
        <center>
          <h2>Transfer To SomeOne Else Accounts</h2>
        </center>
      </div>
      <hr/>
      <br />
      <br />
      <br />
      <Form.Group>
        <div>
          <h5>Please enter recipient name : </h5>
        </div>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setRecipientName(e.target.value);
          }}
        />
        <br />
        <div>
          <h5>Please select the amount you would like to transfer from : </h5>
        </div>
        <Form.Control
          as="select"
          onChange={(e) => {
            setAccountType(e.target.value);
          }}
        >
          <option>-- Select Account --</option>
          <option>Primary</option>
          <option>Savings</option>
        </Form.Control>
        <br />
        <div>
          <h5>Please specify the amount you would like to transfer : </h5>
        </div>
        <Col>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Col>
        <br />
        <center>
          <Button variant="success" onClick={onToSomeOneElse}>Transfer</Button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
      </Form.Group>
    </div>
  );
};

export default SomeoneElseAccountScreen;
