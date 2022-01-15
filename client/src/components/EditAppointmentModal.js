import React from "react";
import { Button, Modal } from "react-bootstrap";

const EditAppointmentModal = (props) => {

    const {toggleShowEdit, showEdit, id} = props;

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
                Edit this appointment?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Appointment Info - id:{id}</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }

    return (
        <VerticalModal
            show={showEdit}
            onHide={toggleShowEdit}
         />
    )
};

export default EditAppointmentModal;