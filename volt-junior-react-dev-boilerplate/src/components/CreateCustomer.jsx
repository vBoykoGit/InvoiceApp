import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap'

class CreateCustomer extends React.Component {

    render() {
        const { show = false, handleClose = f => f } = this.props
        return (
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Create Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="customerForm" >
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Please provide the first name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Please provide the last name.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Control type="text" placeholder="Address" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an address.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Control type="text" placeholder="Phone" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a phone.
                            </Form.Control.Feedback>
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
        );
    }
}

export default CreateCustomer