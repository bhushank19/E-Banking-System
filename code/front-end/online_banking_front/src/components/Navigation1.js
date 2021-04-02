import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navigation1 = () => {
  const userSignin = useSelector((store) => store.userSignin);
  const { islogin } = userSignin;
  return (
    <div>
      {!islogin && (
        <Navbar bg="primary" variant="dark">
          <div className="container-fluid">
            <Navbar.Brand href="/home"> E-Banking</Navbar.Brand>

            <Nav className="mr-auto">
              <Link to="/contactus">
                <Button type="button">Contact</Button>
              </Link>
              <Link to="/about">
                <Button type="button">About</Button>
              </Link>
              <Link to="/signin">
                <Button type="button">Signin</Button>
              </Link>
              <Link to="/signup">
                <Button type="button">Signup</Button>
              </Link>
            </Nav>
          </div>
        </Navbar>
      )}
    </div>
  );
};
export default Navigation1;
