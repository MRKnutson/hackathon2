import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { ApptContext } from '../providers/ApptProvider';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import RenderJson from '../components/RenderJson';

const CalendarView = () => {

  const appointments = useContext(ApptContext)
  const [userAppointments, setUserAppointments] = useState([])
  const [dailyAppointments, setDailyAppointments] = useState([])
  const [selectedDay, setSelectedDay] = useState([])
  let d = new Date()

  useEffect(()=>{
    setUserAppointments(appointments.appointments)
  },[])

  const handleSelect = (date) =>{
    setSelectedDay(formatDate(date))
    console.log(formatDate(date))
    setDailyAppointments(compareDates(formatDate(date)))
    changeData()
  }

  const compareDates= (selectedDate) =>{
    let comparisonArray = changeData()
    let filteredArray = comparisonArray.filter((appointment)=>appointment.day == selectedDate)
    return filteredArray
  };

  const changeData = () => {
    return userAppointments.map((appointment) => {
      return (
        {id: appointment.id, title: appointment.title, session: appointment.session, description: appointment.description, user_id: appointment.user_id, location_id: appointment.location_id, day: formatDate(appointment.session)}
      )
    })
  }

  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  return(
    <Container>
      <div style = {{margin:"4rem auto"}}>
        <h1>Calendar View</h1>
      </div>
      <Calendar value = {d} onClickDay = {handleSelect}/>
      <RenderJson json={userAppointments} />
      {dailyAppointments.length > 0 && <RenderJson json={dailyAppointments} />}
    </Container>
  )
};

export default CalendarView;