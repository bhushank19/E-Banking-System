import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";

const SigninScreen = (props) => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, erro, response, role, userId } = userSignin;

  const dispatch = useDispatch();
  const onSignin = () => {
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (role === "ADMIN") {
      sessionStorage.setItem("token", userId);
      props.history.push("/adminhome");
    } else if (role === "CUSTOMER") {
      sessionStorage.setItem("token", userId);
      props.history.push("/userhome");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (erro) {
      alert(erro);
    }
  }, [loading, erro, response, role, userId]);

  return (

      <div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Signin</h2>
            </Grid>
            <TextField
              label="E-mail"
              placeholder="Enter E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              onClick={onSignin}
              fullWidth
            >
              Sign in
            </Button>
            <Typography>
              {" "}
              Do you have an account ?<Link href="/signup">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
  );
};

export default SigninScreen;
