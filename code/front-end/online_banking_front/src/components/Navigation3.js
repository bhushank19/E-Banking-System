import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../actions/userActions";
import { Link, NavLink } from "react-router-dom";


const Navigation3 = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((store) => store.userSignin);
  const { islogin, response , role} = userSignin;
  const onSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      {(role === 'ADMIN') && userSignin.response && (
        <Navbar bg="primary" variant="dark">
          <div className="container-fluid">
            <Navbar.Brand> E-Banking</Navbar.Brand>
            <Nav className="mr-auto">
              {islogin && <span className="font-color" className="nav-link">Welcome Admin {response.userName}</span>}
              <Link to="/adminhome">
                <Button type="button">Admin DashBoard</Button>
              </Link>
             <Link to="/adminuseraccount">
                <Button type="button">User Accounts</Button>
              </Link>
              <Link to="/appoinments">
                <Button type="button">Appoinments</Button>
              </Link>
              <Button onClick={onSignOut} variant="danger">
                SignOut
              </Button>
            </Nav>
          </div>
        </Navbar>
      )}
    </div>
  );
};

export default Navigation3;
