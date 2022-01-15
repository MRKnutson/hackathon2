import axios from "axios";
import React, { useEffect, useState } from "react";

const Locations = () => {

  const [locations, setLocations] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getLocations();
    getAppointments();
  }, [])

  const getLocations = async () => {
    let res = await axios.get("/api/locations");
    setLocations(res.data);
    console.log(res.data)
  }

  const getAppointments = async () => {
    let res = await axios.get("/api/appointments")
    setAppointments(res.data);
    console.log(res.data)
  }

  const renderAppointments = () => {
    if (!appointments) {
      return <p>Loading Appointments</p>
    }
    return (
      <div>
        <a href="/location/new">Add a Location</a>
        <hr />
        {renderAppointments()}
        <hr />
      </div>
    )
  };

  <div>
    <h1>Locations Page</h1>
  </div>
};

export default Locations; 