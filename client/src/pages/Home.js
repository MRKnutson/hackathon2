import React, { useContext } from 'react'
import { Button, Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RenderJson from '../components/RenderJson';
import { ApptContext } from '../providers/ApptProvider';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext);
  const appointments = useContext(ApptContext);
  const navigate = useNavigate();
  return(
    <Container>
      <h1>Home</h1>
      <RenderJson json={auth} />
      <RenderJson json={appointments} />
      <div>
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
    </Container>
  )
};

export default Home;