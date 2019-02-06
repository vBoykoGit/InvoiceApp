import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'

const EditProduct = ({ show = false, product, handleEdit, handleClose = f => f }) =>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="productForm" onSubmit={(event) => {
                event.preventDefault();
                handleEdit({
                    name: event.target.name.value,
                    price: event.target.price.value
                })
            }} >
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="Name" defaultValue={product ? product.name : ""} name='name' />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Control required type="text" placeholder="Price" defaultValue={product ? product.price : ""} name='price' />
                    </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" form='productForm'>
                Apply
            </Button>
        </Modal.Footer>
    </Modal>

export default EditProduct