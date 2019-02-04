import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = ({ show = false, name, handleClose = f => f }) =>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Modal.Title>
                Do you want to delete{name !== null && ` ${name.name}`}?
            </Modal.Title>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" >
                Delete
            </Button>
        </Modal.Footer>
    </Modal>

export default DeleteModal