import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../actions/userActions";
import { Link, NavLink } from "react-router-dom";

const Navigation2 = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((store) => store.userSignin);
  const { islogin, response, role } = userSignin;
  const onSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      {(role === 'CUSTOMER') && userSignin.response && (
        <Navbar bg="primary" variant="dark">
          <div className="container-fluid">
            <Navbar.Brand> E-Banking</Navbar.Brand>
            <Nav className="mr-auto">
              {islogin && <span className="font-color" className="nav-link">Welcome {response.userName}</span>}
              <Link to="/userhome">
                <Button type="button">User Home</Button>
              </Link>
              <Link to="/contactus">
                <Button type="button">Contact</Button>
              </Link>
              <DropdownButton id="dropdown-basic-button" title="Accounts">
                <Dropdown.Item>
                  <Link to="/primaryaccount">Primary Account</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/savingsaccount">Savings Account</Link>
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Transfers">
                <Dropdown.Item>
                  <Link to="/betweenaccounts">Between Accounts</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/tosomeoneelse">To SomeOne Else</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/addeditrecipient">Add/Edit Recipient</Link>
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Appoinments">
                <Dropdown.Item>
                  <Link to="/scheduleappointment">Schedule Appoinments</Link>
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton id="dropdown-basic-button" title="Me Profile">
                <Dropdown.Item>
                  <Link to="/viewprofile">View Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/editprofile">Edit Profile</Link>
                </Dropdown.Item>
              </DropdownButton>
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
export default Navigation2;
