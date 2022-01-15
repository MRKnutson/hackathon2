import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import RenderJson from '../components/RenderJson';
import { ApptContext } from '../providers/ApptProvider';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext)
  const appointments = useContext(ApptContext)
  return(
    <Container>
      <h1>Home</h1>
      <RenderJson json={auth} />
      <RenderJson json={appointments} />
    </Container>
  )
};

export default Home;