import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Image, Table, Modal } from 'react-bootstrap';
import RenderJson from '../components/RenderJson';
import { ApptContext } from '../providers/ApptProvider';
import { AuthContext } from '../providers/AuthProvider';
import { DateTime } from "luxon";
import AddAppointmentModal from '../components/AddAppointmentModal';

const Home =  () => {

  const [apps, setApps] = useState([])
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
              <td><button onClick={(e)=> MyVerticallyCenteredModal(e, a)}>View</button></td>
            </tr>        
        )
      })
    } 
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.a.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.a.session}</h4>
          <p>
            {props.a.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
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
    </Container>
  )
};

export default Home;