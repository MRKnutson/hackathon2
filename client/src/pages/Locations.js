import axios from "axios";
import React, { useEffect, useState } from "react";
import LocationForm from "./LocationForm";

const Locations = () => {

  const [showLocations, setShowLocations] = useState([]);
  // const [appointments, setAppointments] = useState([]);


  useEffect(() => {
    getLocations();
    // getAppointments();
  }, [])

  const getLocations = async () => {
    let res = await axios.get("/api/locations");
    setShowLocations(res.data);
    console.log(res.data)
  }

  const renderLocations = () => {
    if (!showLocations) {
      return <p>Loading Locations</p>
    };
  };

  // const getAppointments = async () => {
  //   let res = await axios.get("/api/appointments")
  //   setAppointments(res.data);
  //   console.log(res.data)
  // }

  // const renderAppointments = () => {
  //   if (!appointments) {
  //     return <p>Loading Appointments</p>
  //   }
  return (
    <div>
      <h1>Locations Page</h1>
      <a href="/locations/new">Add a Location</a>
      <hr />
      {renderLocations()}
      {/* {renderAppointments()} */}
      <hr />
      <LocationForm />
    </div>
  )
};
// };

export default Locations; 