import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationForm from "./LocationForm";

const Locations = () => {

  const navigate = useNavigate();
  const [showLocations, setShowLocations] = useState([]);
  const [appointments, setAppointments] = useState([]);


  useEffect(() => {
    getLocations();
    getAppointments();
  }, [])

  const getLocations = async () => {
    let res = await axios.get("/get/locations");
    setShowLocations(res.data);
    console.log(res.data);
  }

  const getAppointments = async () => {
    let res = await axios.get("/api/appointments")
    setAppointments(res.data);
    console.log(res.data);
  }

  const renderLocations = () => {
    if (!showLocations) {
      return <p>Loading Locations</p>
    };
  };

  // const renderAppointments = () => {
  //   if (!appointments) {
  //     return <p>Loading Appointments</p>
  //   }

  return (
    <div>
      <h1>Locations Page</h1>

      {renderLocations()}
      {/* {renderAppointments()} */}
      <hr />
      <LocationForm />
    </div>
  )
};
// };

export default Locations;