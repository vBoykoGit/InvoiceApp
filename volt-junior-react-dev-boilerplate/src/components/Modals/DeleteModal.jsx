import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = ({ show = false, object, handleDelete = f => f, handleClose = f => f }) =>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Modal.Title>
                Do you want to delete{object ? ` ${object.name}` : null}?
            </Modal.Title>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleDelete}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>

export default DeleteModal