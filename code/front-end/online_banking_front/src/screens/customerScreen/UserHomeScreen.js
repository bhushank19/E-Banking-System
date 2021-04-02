import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "../../actions/userActions";
const UserHomeScreen = () => {
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

  return (
    <div>
      {responseData && (
        <div>
          <br/>
          <center>
          <h2>Welcome to User Panel</h2>
          <hr/>
          <br/>
          <div className="text-left">
          <h4>
            Account holder : {responseData.firstName} {responseData.lastName}
          </h4>
          <h4>
            Primary Account balance : {responseData.primaryAccount.accountBalance}
          </h4>
          <h4>
            Savings Account balance : {responseData.savingsAccount.accountBalance}
          </h4>
          </div>
          </center>
        </div>
      )}
    </div>
  );
};

export default UserHomeScreen;
