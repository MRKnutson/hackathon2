import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Calendar } from "react-calendar";


const AddForm = () => {

    const [selectedDay, setSelectedDay] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    let d = new Date()

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let appointment = {session: selectedDay, title, description};
    };

    const handleSelect = (date) =>{
        setSelectedDay(formatDate(date));
        // console.log(formatDate(date));
      };

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

    return (
        <Form onSubmit={handleSubmit} >
                        <Calendar value = {d} onClickDay = {handleSelect} style ={{marginBottom: "35px"}}/>
                        <p>Selected date: {selectedDay}</p>
                        <Form.Group className="mb-3" controlId="formName" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNickname" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" >Submit</Button>
        </Form>
    )
}

export default AddForm;