import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scheduleAppointment } from "../../../actions/appointmentActions";

const ScheduleAppointmentScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName } = userSignin;

  const scheduleAppointmentReducer = useSelector(
    (store) => store.scheduleAppointment
  );
  const {
    loading,
    response,
    error,
    scheduleAppointmentSuccess,
  } = scheduleAppointmentReducer;

  var [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const onScheduleAppointment = () => {
    console.log(userName);
    dispatch(scheduleAppointment(date, location, description, userName));
    setDate.date1 = "";
    // const [location, setLocation] = useState("");
    // const [description, setDescription] = useState("");
  };

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && scheduleAppointmentSuccess) {
      // user successfully got registered
      props.history.push("/scheduleappointment");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, scheduleAppointmentSuccess]);

  const onCancel = () => {
    props.history.push('/userhome')
  };

  return (
    <div>
      <div>
        <br />
        <center>
          <h2>Schedule An Appointment</h2>
        </center>
      </div>
      <hr/>
      <br />
      <br />
      <br />
      <Form.Group>
        <div>
          <h5>Please pick date and time (yyyy-MM-dd hh:mm): </h5>
        </div>
        <Form.Control
          id="date1"
          type="text"
          placeholder="yyyy-MM-dd hh:mm"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </Form.Group>
      <br />

      <Form.Group>
        <div>
          <h5>Please select the Location you would like to transfer from : </h5>
        </div>
        <Form.Control
          as="select"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option>-- Select location --</option>
          <option>Pune</option>
          <option>Karad</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </Form.Control>
        <br />
        <div>
          <h5>Notes: </h5>
        </div>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <center>
          <Button variant="success" onClick={onScheduleAppointment}>
            Submit Scheduling
          </Button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
      </Form.Group>
    </div>
  );
};

export default ScheduleAppointmentScreen;
