import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Image, Table, Modal } from 'react-bootstrap';
import RenderJson from '../components/RenderJson';
import { ApptContext } from '../providers/ApptProvider';
import { AuthContext } from '../providers/AuthProvider';
import { DateTime } from "luxon";
import AddAppointmentModal from '../components/AddAppointmentModal';
import EditAppointmentModal from '../components/EditAppointmentModal';

const Home =  () => {

  const [apps, setApps] = useState([])
  const [showId, setShowId] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const auth = useContext(AuthContext)
  // const appointments = useContext(ApptContext)
  useEffect (()=>{
    getAppointments()
  }, [])

  const getAppointments = async () => {
    let res = await axios.get('/api/appointments')
    setApps(res.data)
  }
  const renderAllApps = () => {
    if (apps.length){
      console.log(apps)
       return apps.map((a)=>{
        return (
            <tr key={a.a_id}>
              <td>{a.session}</td>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td>{a.name}</td>
              <td><button onClick={()=>toggleShowEdit(a.a_id)}>View</button></td>
            </tr>        
        )
      })
    } 
  }

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  }
  const toggleShowEdit = (id) => {
    setShowId(id);
    setShowEdit(!showEdit);
  }
  
  const navigate = useNavigate();
  return(
    <Container>
      <h1 style={{textAlign: "center"}} >Welcome: {auth.nickname ? auth.nickname : auth.name}</h1>
      {/* <RenderJson json={auth} />
      <RenderJson json={appointments} /> */}
      <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", margin: "20px"}} >
        <div style={{width: "200px", height: "200px"}} >
          <Image src={auth.image} fluid roundedCircle />
        </div>
        <div>
         <h4> See all upcoming appointments below: </h4>
        </div>
        <h3>Todays Date: {DateTime.now().toLocaleString()} </h3>
      </div>
      <hr/>
      {/* Denny insert all your stuff below here */}
      <Table striped bordered hover variant="dark">
              <thead>
              <tr>
                <th>Time</th>
                <th>Name</th>
                <th>description</th>
                <th>Location</th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {renderAllApps()}
            </tbody>
      </Table>
      <div style={{margin: "10px", padding: "10px"}} className="d-grid gap-2" >
        <h3 style={{textAlign: "center"}} >New Appointment</h3>
        <Button size="lg" onClick={toggleShowAdd} variant="primary" >Add an appointment</Button>
      </div>
      {showAdd && <AddAppointmentModal toggleShowAdd={toggleShowAdd} showAdd={showAdd} />}
      {showEdit && <EditAppointmentModal toggleShowEdit={toggleShowEdit} showEdit={showEdit} id={showId} />}
    </Container>
  )
};

export default Home;