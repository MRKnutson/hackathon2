import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Calendar } from "react-calendar";
import AddForm from "./AddAppointmentForm";

const AddAppointmentModal = (props) => {

    const {toggleShowAdd, showAdd} = props;
    const [selectedDay, setSelectedDay] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    let d = new Date()

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let appointment = {session: selectedDay, title, description};
    };

    const handleSelect = (e, date) =>{
        e.preventDefault();
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

    const VerticalModal = (props) => {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add a new appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>New Appointment Info</h4>
                <AddForm/>
                {/* <Form onSubmit={handleSubmit} >
                        <Calendar value = {d} onClickDay = {(e)=>handleSelect(e)} style ={{marginBottom: "35px"}}/>
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
                    </Form> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }

    return (
        <VerticalModal
            show={showAdd}
            onHide={toggleShowAdd}
         />
    )
};

export default AddAppointmentModal;