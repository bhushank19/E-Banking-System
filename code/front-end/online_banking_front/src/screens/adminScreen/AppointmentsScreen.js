import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { appointmentAction } from "../../actions/adminActions/appointmentActions";
import { Link } from "react-router-dom";
import axios from "axios";

const AppoinmentsScreen = (props) => {
  // const userSignin = useSelector((store) => store.userSignin);
  // const { userName, response } = userSignin;

  const dispatch = useDispatch();
  const appointment = useSelector((store) => store.appointmentList);
  const { loading, response, error, isAppointmentList } = appointment;

  useEffect(() => {
    dispatch(appointmentAction());
  }, []);
  useEffect(() => {}, [loading, response, error, isAppointmentList]);

  const onConfirmed = (id) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    };
    const url = "http://localhost:8080/admin/appointment/confirm/" + id;
    axios
      .get(url, header)
      .then((response) => {
        dispatch(appointmentAction());
        console.log(response.status);
      })
      .catch((error) => {
        alert("error in calling APT : " + error);
      });
  };

  const onCancel = () => {
    props.history.push("/adminhome");
  };

  return (
    <div>
      <br/>
      <center>
      <h2>Appointments List</h2>
      </center>
      <hr/>
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.map((appointment) => {
              return (
                <tr>
                  <td>{appointment.id}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.description}</td>
                  <td>{appointment.location}</td>
                  {appointment.confirmed === true &&
                  <td>Confirmed</td>}
                  {appointment.confirmed === false &&
                  <td>Not Confirmed</td>}
                  <td>
                    <Link onClick={() => onConfirmed(appointment.id)}>
                      Confirm Appointment
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <center>
        <button onClick={onCancel} className="btn btn-danger float-end">
          Back
        </button>
      </center>
    </div>
  );
};

export default AppoinmentsScreen;
