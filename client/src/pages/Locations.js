import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Dropdown, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RenderJson from "../components/RenderJson";
import { ApptContext } from "../providers/ApptProvider";
import { AuthContext } from "../providers/AuthProvider";
import LocationForm from "./LocationForm";

const Locations = () => {

  const appointments = useContext(ApptContext)
  const [locationAppointments, setLocationAppointments] = useState(appointments && appointments.appointments ? appointments.appointments : []);
  const [showLocations, setShowLocations] = useState([]);

  const navigate = useNavigate();

  console.log(locationAppointments)

  useEffect(() => {
    getLocations();
  }, [])


  const getLocations = async () => {
    let res = await axios.get("/api/locations");
    setShowLocations(res.data);
    console.log(res.data);
  }

  // const renderLocations = () => {
  //   if (!showLocations) {
  //     return <p>Loading Locations</p>
  //   };
  // };

  const renderAppointments = () => {
    if (appointments.length < 1) {
      return <p>Loading Appointments</p>
    } else {
      return appointments.appointments.map((appointment) => {
        return <p>{appointment.title}</p>
      })
    }
  }
  const renderRows = () => {
    if (locationAppointments.length > 0) {
      return locationAppointments.map((appointment) => {
        return (
          <tr key={appointment.session}>
            <td>{appointment.session}</td>
            <td>{appointment.title}</td>
            <td>{appointment.description}</td>
            <td>{appointment.location} : {appointment.address}</td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td colSpan={4}>No appointments</td>
        </tr>
      )
    }
  };

  const renderLocations = () => {
    if (showLocations.length > 0) {
      return showLocations.map((location) => {
        return (
          <Dropdown.Item eventKey={location.id}>{location.name}</Dropdown.Item>
        )
      })
    }
  }

  return (
    <Container>
      <div style={{ margin: "4rem auto" }}>
        <h1>Calendar View</h1>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {renderLocations()}
        </Dropdown.Menu>
      </Dropdown>

      <Table striped bordered hover variant="dark" style={{ marginTop: "35px" }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </Table>
      {/* <RenderJson json={appointments} /> */}
    </Container>
  )
};

// return (
//   <div>
//     <h1>Locations Page</h1>
//     <RenderJson json={appointments.appointments} />
//     <RenderJson json={showLocations} />
//     {renderLocations()}
//     {renderAppointments()}
//     <hr />
//     <LocationForm />
//   </div>
// )
// };

export default Locations;