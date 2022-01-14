import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DateTime } from "luxon";



const RenderSomething = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    getAllStuff();
  }, []);

  const getAllStuff = async () => {
    let res = await axios.get('/api/appointments')
      setData(res.data)
      console.log(DateTime.now().minus({weeks: 2}).toISO())
      console.log('getAllStuff hit')
    }

  const getStuff = async () => {
    console.log('getStuff hit')
  let res = await axios.delete('/api/')
    getAllStuff();
  }


return (
      <div> 
    <p>Back End Test</p>
    {JSON.stringify(data)}

    <button onClick={getStuff}>Press Me</button>
     </div>

)
}
export default RenderSomething;