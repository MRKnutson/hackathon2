import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddAppointmentModal = (props) => {

    const {toggleShowAdd, showAdd} = props;

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
                <Form>
                    
                </Form>
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