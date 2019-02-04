import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'

const EditCustomer = ({ show = false, customer, handleEdit, handleClose = f => f }) =>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="customerForm" onSubmit={(event) => {
                event.preventDefault();
                handleEdit({
                    name: event.target.name.value,
                    address: event.target.address.value,
                    phone: event.target.phone.value
                })
            }} >
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="Name" defaultValue={customer ? customer.name : ""} name='name' />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="Address" defaultValue={customer ? customer.address : ""} name='address' />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="Phone" defaultValue={customer ? customer.phone : ""} name='phone' />
                    </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" form='customerForm'>
                Apply
            </Button>
        </Modal.Footer>
    </Modal>

export default EditCustomer