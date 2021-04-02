import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getUserDataAction } from "../../../actions/userActions";

const ViewProfileScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName } = userSignin;
  const [userNameOld, setUserNameOld] = useState(userName);

  const getUserDataR = useSelector((store) => store.getUserDataR);
  const { responseData } = getUserDataR;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataAction(userNameOld));
  }, []);

  useEffect(() => {}, [responseData]);

  const onCancel = () => {
    props.history.push("/userhome");
  };

  return (
    <div>
     <center>
     {responseData && (
        <div>
          <br/>
          <h2> User Profile</h2>
          <hr/>
          <br/>
          <div className="text-left">
          <h4>
            Account holder Name : {responseData.firstName} {responseData.lastName}
          </h4>
          <h4>User Name : {responseData.userName}</h4>
          <h4>User Email : {responseData.email}</h4>
          <h4>User password : {responseData.password}</h4>
          <h4>User PhoneNo : {responseData.phone}</h4>
          <h4>
            Primary Account balance : {responseData.primaryAccount.accountBalance}
          </h4>
          <h4>
            Savings Account balance : {responseData.savingsAccount.accountBalance}
          </h4>
          </div>
          <center>
            <button onClick={onCancel} className="btn btn-danger float-end">
              Back
            </button>
          </center>
        </div>
      )}
     </center>
    </div>
  );
};

export default ViewProfileScreen;
