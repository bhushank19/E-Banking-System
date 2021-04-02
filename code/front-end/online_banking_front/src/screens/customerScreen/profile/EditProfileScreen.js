import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../actions/userActions";

const EditProfileScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const {
    response,
    userName,
    firstName,
    lastName,
    email,
    password,
    phone,
  } = userSignin;

  const [userNameNew, setUserNameNew] = useState(userName);
  const [firstNameNew, setFirstNameNew] = useState(firstName);
  const [lastNameNew, setLastNameNew] = useState(lastName);
  const [emailNew, setEmailNew] = useState(email);
  const [passwordNew, setPasswordNew] = useState(password);
  const [phoneNew, setPhoneNew] = useState(phone);

  const dispatch = useDispatch();

  const updateprofileReducer = useSelector((store) => store.updateprofile);
  const {
    loading,
    response2,
    error,
    updateprofileSuccess,
  } = updateprofileReducer;

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && updateprofileSuccess) {
      // user successfully got registered
      props.history.push("/editprofile");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, updateprofileSuccess]);

  // onChange = (e) => setUserNameNew({ [e.target.name]: e.target.value });

  const onUpdateProfile = () => {
    console.log(userName);
    dispatch(
      updateProfile(
        userName,
        userNameNew,
        firstNameNew,
        lastNameNew,
        emailNew,
        passwordNew,
        phoneNew
      )
    );
  };

  const onCancel = () => {
    props.history.push("/userhome");
  };

  return (
    <div>
      <div>
        <br />
        <center>
          <h2>Update User Profile</h2>
        </center>
        <hr/>
      </div>
      <Form.Group>
        <div>
          <h5>Enter New UserName : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter New UserName"
            value={userNameNew}
            readOnly="true"
            onChange={(e) => {
              setUserNameNew(e.target.value);
            }}
            // onChange={onChange}
          />
        </Col>
        <br />
        <div>
          <h5>Enter New FirstName : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter New FirstName"
            value={firstNameNew}
            onChange={(e) => {
              setFirstNameNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <div>
          <h5>Enter New LastName : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter New LastName"
            value={lastNameNew}
            onChange={(e) => {
              setLastNameNew(e.target.value);
            }}
          />
        </Col>
        <br />

        <div>
          <h5>Enter New Email : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter New Email"
            value={emailNew}
            readOnly="true"
            onChange={(e) => {
              setEmailNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <div>
          <h5>Enter New Password : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter password"
            value={passwordNew}
            onChange={(e) => {
              setPasswordNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <div>
          <h5>Enter New PhoneNo : </h5>
        </div>
        <Col>
          <Form.Control
            type="number"
            placeholder="Enter phone"
            value={phoneNew}
            onChange={(e) => {
              setPhoneNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <center>
          <Button type="submit" onClick={onUpdateProfile}>
            Update
          </Button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
        <br />
      </Form.Group>
    </div>
  );
};

export default EditProfileScreen;
