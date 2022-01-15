import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthProvider';

export const ApptContext = React.createContext();

export const ApptConsumer = ApptContext.Consumer;

const ApptProvider = (props) => {
  const [appointments, setAppointments] = useState(null);
  const auth = useContext(AuthContext)

  useEffect(()=>{
    getAppointments();
  },[auth])

  const getAppointments = async ()=>{
    try {
      let response = await axios.get('/api/appointments');
      setAppointments(response.data)
    } catch (err) {
      console.log(err.response.data.errors.full_messages)
    }
  };
  return(
    <ApptContext.Provider value ={{
      appointments
    }}>
      {props.children}
    </ApptContext.Provider>
  )
};

export default ApptProvider;