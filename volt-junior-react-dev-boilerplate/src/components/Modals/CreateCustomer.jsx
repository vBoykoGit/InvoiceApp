import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'

const CreateCustomer = ({ show = false, handleClose = f => f }) =>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Create Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="customerForm" >
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="First name" />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="Last name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Control type="text" placeholder="Address" required />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Control type="text" placeholder="Phone" required />
                    </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" form='customerForm'>
                Create
              </Button>
        </Modal.Footer>
    </Modal>

export default CreateCustomer