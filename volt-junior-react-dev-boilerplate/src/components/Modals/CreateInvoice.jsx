import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'

const CreateInvoice = ({ show = false, handleClose = f => f }) =>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Create Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="invoiceForm" >
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
            <Button variant="primary" type="submit" form='invoiceForm'>
                Create
              </Button>
        </Modal.Footer>
    </Modal>

export default CreateInvoice