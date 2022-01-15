import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import RenderJson from '../components/RenderJson';
import { ApptContext } from '../providers/ApptProvider';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const [apps, setApps] = useState([])
  const auth = useContext(AuthContext)
  // const appointments = useContext(ApptContext)
  useEffect (()=>{
    getAppointments()
  }, [])

  console.log(auth)


  const getAppointments = async () => {
    let res = await axios.get('/api/appointments')
    setApps(res.data)
    console.log('appointments set')
  }
  const renderAllApps = () => {
    if (apps.length){
      console.log(apps)
       return apps.map((a)=>{
        return (
            <tr>
              <td>{a.session}</td>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td>{a.name}</td>
            </tr>        
        )
      })
    }
  }


  return(
  <div>
    <h1> Welcome: {auth.name} </h1>

      <button> View Upcoming Appintments here </button>
      <h2> View All Appointments Below:</h2>
      <Table striped bordered hover variant="dark">
              <thead>
              <tr>
                <th>Time</th>
                <th>Name</th>
                <th>description</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {renderAllApps()}
            </tbody>
    </Table>
  </div>
  )
};

export default Home;