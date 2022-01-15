import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const LocationForm = () => {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    setName(auth.name)
    setAddress(auth.address)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address })
    return auth.handleUpdate({ name, address }, navigate);
  };


  return (
    <div>
      <h1>New Location Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => { setName(e.target.value); }} />
        <p>Address</p>
        <input
          placeholder="Address"
          value={address}
          onChange={(e) => { setAddress(e.target.value); }} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LocationForm; 