import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap';
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
              <td><button onClick={(e)=>showAppt(e, a)}>View</button></td>
            </tr>        
        )
      })
    }
  }

  const showAppt = (e, id) => {
    e.preventDefault();
    return console.log(id)
  }
  
  const navigate = useNavigate();
  return(
    <Container>
      <h1 style={{textAlign: "center"}} >Home</h1>
      {/* <RenderJson json={auth} />
      <RenderJson json={appointments} /> */}
      <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", margin: "20px"}} >
        <div style={{width: "200px", height: "200px"}} >
          <Image src={auth.image} fluid roundedCircle />
        </div>
        <div>
          <h2>{auth.nickname}</h2>
          <p>{auth.name}</p>
          <p>{auth.email}</p>
        </div>
        <Button onClick={()=>navigate("/profile/edit")} >Edit your profile</Button>
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
    </Container>
  )
};

export default Home;