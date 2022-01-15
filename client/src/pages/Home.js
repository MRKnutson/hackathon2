import React, { useContext } from 'react'
import RenderJson from '../components/RenderJson';
import { ApptContext } from '../providers/ApptProvider';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext)
  const appointments = useContext(ApptContext)
  return(
    <div>
      <h1>Home</h1>
      <RenderJson json={auth} />
      <RenderJson json={appointments} />
    </div>
  )
};

export default Home;