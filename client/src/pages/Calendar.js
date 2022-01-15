import React, { useContext, useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { ApptContext } from '../providers/ApptProvider';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


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
        {id: appointment.id, title: appointment.title, session: appointment.session, description: appointment.description, user_id: appointment.user_id, location_id: appointment.location_id, day: formatDate(appointment.session), location: appointment.name, address: appointment.address}
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

  const formatTime = (date) => {
    let data = new Date(date)
    let hrs = data.getHours()
    let mins = data.getMinutes()
    if(hrs<=9)
    hrs = "0" + hrs
    if(mins<10)
    mins = '0' + mins
    const postTime = hrs + ":" + mins
    return postTime
  };

  const renderRows = () => {
    if(dailyAppointments.length>0){
      return dailyAppointments.map((appointment)=>{
        return(
          <tr key = {appointment.session}>
            <td>{formatTime(appointment.session)}</td>
            <td>{appointment.title}</td>
            <td>{appointment.description}</td>
            <td>{appointment.location} : {appointment.address}</td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td colSpan = {4}>No appointments on this date</td>
        </tr>
      )
    }
  };

  return(
    <Container>
      <div style = {{margin:"4rem auto"}}>
        <h1>Calendar View</h1>
      </div>
      <Calendar value = {d} onClickDay = {handleSelect} style ={{marginBottom: "35px"}}/>

      <Table striped bordered hover variant="dark" style ={{marginTop: "35px"}}>
              <thead>
              <tr>
                <th>Time</th>
                <th>Name</th>
                <th>description</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
      </Table>
    </Container>
  )
};

export default CalendarView;