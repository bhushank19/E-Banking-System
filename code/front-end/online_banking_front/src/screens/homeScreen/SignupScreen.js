import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/userActions";

const SignupScreen = (props) => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const userSignup = useSelector((store) => store.userSignup);
  const { loading, response, error } = userSignup;

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && response.status === "success") {
      // user successfully got registered
      props.history.push("/signin");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const onSignup = () => {
    dispatch(signup(firstName, lastName, email, password, userName, phone));
  };

  return (
    <div>
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="User Name"
            placeholder="Enter your User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="First Name"
            placeholder="Enter your First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Enter your Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={onSignup}
            fullWidth
          >
            Sign up
          </Button>
          <Typography>
            {" "}
            Already have an account ?<Link href="/signin">Sign In</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
    </div>
  );
};
export default SignupScreen;
