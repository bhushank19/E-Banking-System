import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { betweenAccounts } from "../../../actions/transferActions";


const BetweenAccountsScreen = (props) => {

  const userSignin = useSelector((store) => store.userSignin);
  const { userName } = userSignin;

  const [transferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [amount, setAmount] = useState("");
  // const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  const betweenAccountsStore = useSelector((store) => store.betweenAccounts);
  const { loading, response, error, isTransferSuccess } = betweenAccountsStore;
  
  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && isTransferSuccess) {
    props.history.push("/betweenaccounts");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("Amount Transfer Failed")
    }
  }, [loading, response, error,isTransferSuccess]);

  const onBetweenAccounts = () => {
    console.log(userName);
    dispatch(betweenAccounts(transferFrom, transferTo, amount, userName));
  };

  const onCancel = () => {
    props.history.push('/userhome')
  };

  return (
    <div>
      <div>
        <br />
        <center>
          <h2>Transfer Between Accounts</h2>
        </center>
      </div>
      <hr/>
      <br />
      <br />
      <br />
      <Form.Group>
        <div>
          <h5>Transfer From : </h5>
        </div>
        <Form.Control
          as="select"
          onChange={(e) => {
            setTransferFrom(e.target.value);
          }}
        >
          <option>-- Select Account --</option>
          <option>Primary</option>
          <option>Savings</option>
        </Form.Control>
        <br />
        <div>
          <h5>Transfer To : </h5>
        </div>
        <Form.Control
          as="select"
          onChange={(e) => {
            setTransferTo(e.target.value);
          }}
        >
          <option>-- Select Account --</option>
          <option>Savings</option>
          <option>Primary</option>
        </Form.Control>
        <br />
        <div>
          <h5>Enter Amount To Transfer : </h5>
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
          <Button  variant="success" onClick={onBetweenAccounts}>
            Transfer
          </Button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
      </Form.Group>
    </div>
  );
};

export default BetweenAccountsScreen;
